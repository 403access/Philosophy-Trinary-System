/-
  Trinary — maschinell geprüfter Kernkalkül.

  Dieses Modul formalisiert die Definitionen aus
  `docs/trinaeritaet/formale-definition.md` (v0.1):

    * den trinären Träger T = {-1, 0, +1} und die Involution ν,
    * Kernrahmen ⟨K, I⟩, Perspektiven ⟨k, σ, ρ⟩,
    * Admissibilität als Invarianz-Bedingung,
    * die Auswertungsfunktion v.

  Bewusst ohne Mathlib-Abhängigkeit: nur Lean-4-Core. Dadurch ist die
  Prüfung schnell, reproduzierbar und in CI ohne großen Download möglich.

  Die Theoreme selbst stehen in `Trinary/Theorems.lean`.
-/

namespace Trinary

open Classical

/-! ## 1. Der trinäre Träger -/

/-- Der trinäre Träger: zwei entgegengesetzte Valenzen und das Zentrum. -/
inductive T where
  | neg
  | zero
  | pos
  deriving DecidableEq, Repr

/-- Perspektiv-Negation ν: vertauscht die Pole, lässt das Zentrum fest. -/
def nu : T → T
  | .neg => .pos
  | .zero => .zero
  | .pos => .neg

@[simp] theorem nu_neg : nu .neg = .pos := rfl
@[simp] theorem nu_pos : nu .pos = .neg := rfl
@[simp] theorem nu_zero : nu .zero = .zero := rfl

/-- T2: ν ist eine Involution. -/
theorem nu_involutive (x : T) : nu (nu x) = x := by
  cases x <;> rfl

/-- T2: ν fixiert das Zentrum. -/
theorem nu_fixes_centre : nu .zero = .zero := rfl

/-- ν ist nicht die Identität: die Polarität ist echt. -/
theorem nu_ne_id : nu ≠ id := by
  intro h
  have h' : nu .pos = id .pos := congrFun h .pos
  simp at h'

/-- Der Träger ist wörtlich `{-1, 0, +1}`. -/
def toInt : T → Int
  | .neg => -1
  | .zero => 0
  | .pos => 1

/-- Die drei Konstruktoren sind paarweise verschieden. -/
theorem toInt_injective : Function.Injective toInt := by
  intro a b h
  cases a <;> cases b <;> first | rfl | simp [toInt] at h

/-- Das Bild von `toInt` ist genau `{-1, 0, +1}`. -/
theorem toInt_cases (x : T) : toInt x = -1 ∨ toInt x = 0 ∨ toInt x = 1 := by
  cases x <;> simp [toInt]

/-- ν entspricht auf `Int` der Negation. -/
theorem toInt_nu (x : T) : toInt (nu x) = -toInt x := by
  cases x <;> decide

/-! ## 2. Kernrahmen und Lesarten -/

/-- Ein Kernrahmen: Weltzustände, Invariantenraum und Invariantenabbildung. -/
structure CoreFrame (K : Type u) (I : Type v) where
  /-- Die Invariante, die jede zulässige Lesart erhalten muss. -/
  inv : K → I

namespace CoreFrame

variable {K : Type u} {I : Type v}

/-- Globale Invarianz: eine Lesart erhält die Invariante an *jedem* Zustand.

    Diese stärkere Fassung ist nötig, damit Zulässigkeit unter Komposition
    abgeschlossen ist; die punktweise Fassung `Adm` tut das nicht
    (siehe `adm_not_closed_under_comp` in `Trinary/Theorems.lean`). -/
def Invariant (F : CoreFrame K I) (ρ : K → K) : Prop :=
  ∀ k, F.inv (ρ k) = F.inv k

theorem invariant_id (F : CoreFrame K I) : F.Invariant id := by
  intro k
  rfl

/-- Globale Invarianz ist unter Komposition abgeschlossen. -/
theorem invariant_comp (F : CoreFrame K I) {ρ₁ ρ₂ : K → K}
    (h₁ : F.Invariant ρ₁) (h₂ : F.Invariant ρ₂) :
    F.Invariant (ρ₁ ∘ ρ₂) := by
  intro k
  exact (h₁ (ρ₂ k)).trans (h₂ k)

end CoreFrame

/-- Valenz: die beiden entgegengesetzten Perspektiven. `0` ist keine Valenz. -/
inductive Valence where
  | neg
  | pos
  deriving DecidableEq, Repr

/-- Eine Perspektive: Kernzustand, Valenz und Lesart. -/
structure Perspective (K : Type u) where
  k : K
  σ : Valence
  ρ : K → K

namespace CoreFrame

variable {K : Type u} {I : Type v}

/-- Definition 4: Admissibilität, punktuell am Zustand der Perspektive.

    `F.Adm p` ist genau die Bedingung `I(ρ(k)) = I(k)` aus dem Paper. -/
def Adm (F : CoreFrame K I) (p : Perspective K) : Prop :=
  F.inv (p.ρ p.k) = F.inv p.k

/-- Die Identitätslesart ist stets zulässig (Kernpräsentation). -/
theorem adm_id (F : CoreFrame K I) (k : K) (σ : Valence) :
    F.Adm ⟨k, σ, id⟩ := rfl

/-- Globale Invarianz impliziert punktuelle Admissibilität. -/
theorem adm_of_invariant (F : CoreFrame K I) (p : Perspective K)
    (h : F.Invariant p.ρ) : F.Adm p :=
  h p.k

/-- Zulässigkeit hängt nicht von der Valenz ab (Orthogonalität). -/
theorem adm_valence_irrel (F : CoreFrame K I) (k : K) (ρ : K → K)
    (σ₁ σ₂ : Valence) :
    F.Adm ⟨k, σ₁, ρ⟩ ↔ F.Adm ⟨k, σ₂, ρ⟩ :=
  Iff.rfl

end CoreFrame

/-! ## 3. Auswertung -/

/-- Das Ergebnis der Auswertung. `bot` ist ein Fehlerzustand, kein dritter
    Wahrheitswert. -/
inductive Value where
  | core
  | sign : Valence → Value
  | bot
  deriving DecidableEq, Repr

namespace CoreFrame

variable {K : Type u} {I : Type v}

/-- Definition 6: die Auswertungsfunktion.

    `0` für die Kernpräsentation `ρ = id`, `σ` für zulässige nicht-triviale
    Lesarten, `⊥` für Kernmutationen. -/
noncomputable def eval (F : CoreFrame K I) (p : Perspective K) : Value :=
  if p.ρ = id then .core
  else if F.Adm p then .sign p.σ
  else .bot

end CoreFrame

end Trinary
