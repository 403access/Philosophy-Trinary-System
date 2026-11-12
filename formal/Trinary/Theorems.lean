/-
  Trinary — die Sätze.

  Jeder Satz hier entspricht einer Behauptung aus der Dokumentation. Wo die
  Prosa-Fassung zu stark war, ist die korrigierte Fassung bewiesen und die
  Gegenbeispiel-Stelle markiert.
-/

import Trinary.Basic

namespace Trinary

open Classical

/-! ## 1. Ein konkretes Modell: Drift ohne Mutation -/

/-- Zwei unabhängige Fakten; nur das erste ist invariant. -/
abbrev K₂ : Type := Bool × Bool

def inv₂ : K₂ → Bool := Prod.fst

def F₂ : CoreFrame K₂ Bool := ⟨inv₂⟩

/-- Vertauscht das zweite (nicht-invariante) Fakt. -/
def flip₂ : K₂ → K₂ := fun (a, b) => (a, !b)

/-- Eine Lesart, die das zweite Fakt kollabiert und dabei das erste
    korrumpieren *kann*. -/
def bad₂ : K₂ → K₂ := fun (_, b) => if b then (true, true) else (false, false)

def k₂ : K₂ := (false, false)

theorem flip₂_ne_id : flip₂ ≠ id := by
  intro h
  have h' : flip₂ k₂ = id k₂ := congrFun h k₂
  simp [flip₂, k₂] at h'

theorem flip₂_invariant : F₂.Invariant flip₂ := by
  intro k
  cases k
  rfl

/-- Die Invariante ist nicht injektiv: beide Wahrheitswerte des zweiten Fakts
    fallen auf denselben Invariantenwert. -/
theorem inv₂_not_injective : ¬ Function.Injective inv₂ := by
  intro h
  have h' : (false, false) = (false, true) := h rfl
  simp at h'

/-- Die in `invarianz.md` behauptete Kompositions-Eigenschaft ist in der
    punktuellen Fassung **falsch**. Beide Lesarten sind an `k₂` zulässig, ihre
    Komposition ist es nicht. -/
theorem adm_not_closed_under_comp :
    F₂.Adm ⟨k₂, .pos, flip₂⟩ ∧
    F₂.Adm ⟨k₂, .pos, bad₂⟩ ∧
    ¬ F₂.Adm ⟨k₂, .pos, bad₂ ∘ flip₂⟩ := by
  refine ⟨?_, ?_, ?_⟩
  · rfl
  · rfl
  · intro h
    simp [CoreFrame.Adm, F₂, inv₂, k₂, bad₂, flip₂, Function.comp] at h

/-! ## 2. T1: Das Zentrum ist eindeutig -/

/-- T1: Der Wert `0` tritt genau bei der Kernpräsentation `ρ = id` auf. -/
theorem eval_eq_core_iff (F : CoreFrame K I) (p : Perspective K) :
    F.eval p = .core ↔ p.ρ = id := by
  constructor
  · intro h
    by_cases hne : p.ρ = id
    · exact hne
    · by_cases ha : F.Adm p
      · simp [CoreFrame.eval, hne, ha] at h
      · simp [CoreFrame.eval, hne, ha] at h
  · intro h
    simp [CoreFrame.eval, h]

/-- T1 ist als Eindeutigkeit des *Werts* `0` zu lesen, nicht als Eindeutigkeit
    einer Perspektive: Zu verschiedenen Zuständen (oder Valenzen) gibt es
    verschiedene Perspektiven mit `ρ = id`. Die wörtliche Formulierung
    „genau eine Kernpräsentation“ ist daher falsch. -/
theorem core_presentation_not_unique :
    ∃ p q : Perspective Bool, p.ρ = id ∧ q.ρ = id ∧ p ≠ q := by
  refine ⟨⟨true, .pos, id⟩, ⟨false, .pos, id⟩, rfl, rfl, ?_⟩
  intro h
  have hk : (⟨true, .pos, id⟩ : Perspective Bool).k =
      (⟨false, .pos, id⟩ : Perspective Bool).k :=
    congrArg Perspective.k h
  simp at hk

/-! ## 3. T4/T6: Nicht-Kollaps ist erfüllbar -/

/-- Nicht-Kollaps (konstruktiv): Es gibt einen Kernrahmen und einen Zustand,
    an dem zwei zulässige Perspektiven entgegengesetzter Valenz koexistieren
    und verschiedene, fehlerfreie Werte erhalten.

    Der Satz zeigt die *Erfüllbarkeit* der Koexistenz. Er zeigt nicht, dass
    jede beliebige Invariantenwahl Koexistenz erlaubt. -/
theorem noncollapse :
    ∃ (F : CoreFrame K₂ Bool) (k : K₂) (pPlus pMinus : Perspective K₂),
      pPlus.k = k ∧ pMinus.k = k ∧
      pPlus.σ = .pos ∧ pMinus.σ = .neg ∧
      F.Adm pPlus ∧ F.Adm pMinus ∧
      F.eval pPlus = .sign .pos ∧ F.eval pMinus = .sign .neg := by
  refine ⟨F₂, k₂, ⟨k₂, .pos, flip₂⟩, ⟨k₂, .neg, flip₂⟩,
    rfl, rfl, rfl, rfl, ?_, ?_, ?_, ?_⟩
  · rfl
  · rfl
  · simp [CoreFrame.eval, flip₂_ne_id, CoreFrame.Adm, F₂, inv₂, k₂, flip₂]
  · simp [CoreFrame.eval, flip₂_ne_id, CoreFrame.Adm, F₂, inv₂, k₂, flip₂]

/-- Insbesondere sind die beiden Werte wirklich verschieden: kein Kollaps. -/
theorem noncollapse_values_distinct :
    Value.sign .pos ≠ Value.sign .neg := by
  intro h
  simp at h

/-! ## 4. Die Grenzen der Invariantenwahl (F1) -/

/-- Ist die Invariante konstant, so ist *jede* Lesart global invariant:
    das Vakuum-Kriterium F1 bricht. -/
theorem invariant_of_const (F : CoreFrame K I) (c : I)
    (h : ∀ k, F.inv k = c) (ρ : K → K) : F.Invariant ρ := by
  intro k
  rw [h (ρ k), h k]

/-- Unter einer konstanten Invariante erhält jede nicht-triviale Perspektive
    ihren Valenzwert: Zulässigkeit unterscheidet nichts mehr. -/
theorem eval_of_const (F : CoreFrame K I) (c : I) (h : ∀ k, F.inv k = c)
    (p : Perspective K) (hne : p.ρ ≠ id) :
    F.eval p = .sign p.σ := by
  have ha : F.Adm p := invariant_of_const F c h p.ρ p.k
  simp [CoreFrame.eval, hne, ha]

/-- Ist die Invariante injektiv, so ist jede global invariante Lesart die
    Identität: es gibt keinen Spielraum für Perspektiven. -/
theorem invariant_eq_id_of_injective (F : CoreFrame K I)
    (hI : Function.Injective F.inv) {ρ : K → K} (h : F.Invariant ρ) :
    ρ = id := by
  funext k
  exact hI (h k)

/-- Unter einer injektiven Invariante lässt jede zulässige Perspektive ihren
    eigenen Kernzustand unverändert: Drift ist unmöglich. -/
theorem adm_fixes_state_of_injective (F : CoreFrame K I)
    (hI : Function.Injective F.inv) (p : Perspective K) (h : F.Adm p) :
    p.ρ p.k = p.k :=
  hI h

/-- Drift — eine zulässige Lesart, die den Zustand tatsächlich bewegt —
    existiert genau dann, wenn die Invariante nicht injektiv ist.

    Die Äquivalenz quantifiziert über alle Funktionen `K → K`. Für
    eingeschränkte Lesarten (stetig, berechenbar, monoton, …) ist sie neu zu
    prüfen.

    Das ist der formale Gehalt der Spannung zwischen „trivial“ (konstante
    Invariante, F1) und „dogmatisch“ (injektive Invariante): Beide Extreme
    lassen keinen echten Perspektivspielraum. -/
theorem drift_iff_not_injective (F : CoreFrame K I) :
    (∃ (k : K) (ρ : K → K), ρ k ≠ k ∧ F.inv (ρ k) = F.inv k) ↔
      ¬ Function.Injective F.inv := by
  constructor
  · rintro ⟨k, ρ, hne, hinv⟩ hinj
    exact hne (hinj hinv)
  · intro hni
    unfold Function.Injective at hni
    rw [Classical.not_forall] at hni
    obtain ⟨a, hni⟩ := hni
    rw [Classical.not_forall] at hni
    obtain ⟨b, hni⟩ := hni
    have hinv : F.inv a = F.inv b :=
      Classical.byContradiction (fun hc => hni (fun hEq => absurd hEq hc))
    have hne : a ≠ b := by
      intro hab
      exact hni (fun _ => hab)
    exact ⟨a, fun _ => b, Ne.symm hne, hinv.symm⟩

/-! ## 5. Starke Invarianz und Rückprojektion -/

/-- Existiert eine Rückprojektion `ρ←` mit `ρ←(ρ k) = k`, so ist `ρ`
    injektiv. Das ist die formale Grundlage der starken Invarianz. -/
theorem injective_of_leftInverse {K : Type u} {ρ ρinv : K → K}
    (h : ∀ k, ρinv (ρ k) = k) : Function.Injective ρ := by
  intro a b hab
  have ha : ρinv (ρ a) = a := h a
  rw [hab] at ha
  exact ha.symm.trans (h b)

/-- Eine Linksinverse macht die Lesart auf dem Kern verlustfrei
    rekonstruierbar. -/
theorem reconstruct_of_leftInverse {K : Type u} {ρ ρinv : K → K}
    (h : ∀ k, ρinv (ρ k) = k) (k : K) : ρinv (ρ k) = k :=
  h k

end Trinary
