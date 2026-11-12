---
title: Formale Verifikation
description: Der trinäre Kernkalkül als maschinell geprüfter Lean-4-Beweis — was gezeigt ist, was nicht, und welche Korrekturen nötig wurden.
sidebar_position: 4
---

# Formale Verifikation

Dieses Kapitel dokumentiert die **maschinell geprüfte** Fassung der Theorie.
Der vollständige Beweis liegt im Verzeichnis [`formal/`](https://github.com/403access/Philosophy-Trinary-System/tree/main/formal)
und wird bei jedem Push gegen Lean 4 geprüft.

:::info[Status]
F4 (Konsistenz) ist für den **Kernkalkül** beantwortet: Definitionen,
Admissibilität, Auswertung und der Nicht-Kollaps-Satz sind in Lean 4
formalisiert; `lake build` läuft ohne `sorry` und ohne Warnungen durch.
Das ist ein Beweis über das *Modell*, kein Beweis der philosophischen These.
:::

## Warum Lean 4?

| System | Eignung für dieses Projekt |
| --- | --- |
| **Lean 4** ✅ | Bestes Verhältnis aus Lesbarkeit, Tooling, CI und Community. Der Kalkül braucht **keine Mathlib**, nur den Core — der Build dauert Sekunden. |
| Coq / Rocq | Gleich mächtig, aber für ein kleines Paper-Artefakt schwerer lesbar und ohne vergleichbaren CI-Standard. |
| Isabelle/HOL | Sehr gute Automation, aber schwerer Einstieg und weniger gut als zitierbares Open-Source-Artefakt. |
| Agda | Schön für dependent types, aber ohne die Automatisierung, die man für diese Alltagsbeweise will. |
| TLA+ | Das richtige Werkzeug für die **CRDT-Konvergenz** in der Fallstudie, nicht für den philosophischen Kernkalkül. |
| Property-based Tests | Ergänzen den TypeScript-/Rust-Prototyp, ersetzen aber keinen Beweis. |

Die Wahl ist bewusst bescheiden: Lean 4 prüft hier keine große Mathematik,
sondern einen kleinen Kalkül — genau die Stelle, an der Prosa-Beweise gerne
Lücken verstecken.

## Was formalisiert ist

Der Träger ist ein eigener induktiver Typ, nicht `Int`:

```lean
inductive T where
  | neg | zero | pos
```

Damit ist ausgeschlossen, dass versehentlich Arithmetik auf $\{-1,0,+1\}$
verwendet wird, die die Theorie nicht behauptet. Die Einbettung
`toInt : T → Int` ist bewiesen injektiv und mit $\nu$ verträglich:

$$
\mathrm{toInt}(\nu(x)) = -\mathrm{toInt}(x).
$$

Kernrahmen, Perspektive und Admissibilität folgen der Definition im Paper:

```lean
structure CoreFrame (K : Type u) (I : Type v) where
  inv : K → I

structure Perspective (K : Type u) where
  k : K
  σ : Valence
  ρ : K → K

def Adm (F : CoreFrame K I) (p : Perspective K) : Prop :=
  F.inv (p.ρ p.k) = F.inv p.k
```

Die Auswertung ist bewusst **nicht** berechenbar (`noncomputable`), weil
Funktionsgleichheit `ρ = id` klassisch entschieden werden muss. Der
ausführbare Prototyp unterscheidet die Kernpräsentation stattdessen über ein
explizites Flag.

## Die geprüften Sätze

| Papier-Behauptung | Lean-Theorem | Status |
| --- | --- | --- |
| T2: $\nu$ ist Involution, $\nu(0)=0$ | `nu_involutive`, `nu_fixes_centre` | ✅ |
| T2: $\nu$ ist nicht die Identität | `nu_ne_id` | ✅ |
| Kernpräsentation ist zulässig | `adm_id` | ✅ |
| Zulässigkeit ist valenzunabhängig | `adm_valence_irrel` | ✅ |
| T1: Wert $0$ $\Leftrightarrow$ $\rho=\mathrm{id}$ | `eval_eq_core_iff` | ✅ |
| T1: „genau eine Kernpräsentation“ ist wörtlich falsch | `core_presentation_not_unique` | ✅ |
| T4/T6: Nicht-Kollaps ist erfüllbar | `noncollapse` | ✅ |
| F1: konstante Invariante $\Rightarrow$ alles zulässig | `invariant_of_const`, `eval_of_const` | ✅ |
| Injektive Invariante $\Rightarrow$ keine Drift | `invariant_eq_id_of_injective`, `adm_fixes_state_of_injective` | ✅ |
| Starke Invarianz (Rückprojektion) | `injective_of_leftInverse` | ✅ |

## Zwei Korrekturen, die der Beweis erzwungen hat

### 1. T1 ist eine Eindeutigkeit des Werts, keine der Perspektive

Axiom T1 sagt: „Es gibt genau eine Kernpräsentation pro Kernrahmen.“ Wörtlich
genommen ist das **falsch**, sobald $K$ mehr als einen Zustand hat: Zu jedem
$k\in K$ und jeder Valenz gibt es eine Perspektive mit $\rho=\mathrm{id}$. Der
Beweis `core_presentation_not_unique` zeigt zwei verschiedene solche
Perspektiven.

Präzise ist die Aussage nur als **Eindeutigkeit des Werts**:

$$
v(p)=0 \;\Longleftrightarrow\; \rho=\mathrm{id}
\qquad\text{(eval\_eq\_core\_iff)}.
$$

„Kernpräsentation“ ist also eine *Rolle* (die Identitätslesart), kein einzelnes
Objekt. Die Formulierung von T1 wurde entsprechend geschärft.

### 2. Komposition gilt nur global, nicht punktuell

Die ursprüngliche Tabelle in [Invarianz-Bedingung](/docs/trinaeritaet/invarianz)
behauptete:

$$
\mathrm{Adm}(\rho_1), \mathrm{Adm}(\rho_2)
\;\Rightarrow\;
\mathrm{Adm}(\rho_1 \circ \rho_2).
$$

Das ist **falsch**. `Adm` ist punktuell am Zustand $k$ definiert. Aus
$\mathcal{I}(\rho_2(k))=\mathcal{I}(k)$ und
$\mathcal{I}(\rho_1(k))=\mathcal{I}(k)$ folgt nicht
$\mathcal{I}(\rho_1(\rho_2(k)))=\mathcal{I}(\rho_2(k))$.

Ein Gegenbeispiel ist maschinell geprüft (`adm_not_closed_under_comp`):
Auf $K=\{\text{links},\text{rechts}\}\times\{\text{alt},\text{neu}\}$ mit
$\mathcal{I}(a,b)=a$ sind beide Lesarten an $k=(\text{links},\text{alt})$
zulässig, ihre Komposition aber nicht.

Die korrigierte Fassung verwendet die **globale** Invarianz

$$
\mathrm{Inv}(\rho) \;:\Longleftrightarrow\; \forall k.\;\mathcal{I}(\rho(k))=\mathcal{I}(k),
$$

für die `invariant_comp` die Abgeschlossenheit beweist. Punktuelle
Admissibilität bleibt der richtige Begriff für die *Bewertung einer einzelnen
Perspektive*; globale Invarianz ist der richtige Begriff für *Kombination von
Lesarten*. Die Dokumentation wurde entsprechend angepasst.

## Ein neuer Satz: der Invarianten-Engpass

Der Beweis `drift_iff_not_injective` zeigt:

$$
\bigl(\exists k\,\exists \rho.\;\rho(k)\neq k \land \mathcal{I}(\rho(k))=\mathcal{I}(k)\bigr)
\;\Longleftrightarrow\;
\neg\,\mathrm{Injective}(\mathcal{I}).
$$

In Worten: **Echte, invariante Perspektivität existiert genau dann, wenn die
Invariante nicht injektiv ist.**

Die Äquivalenz gilt für die im Modell zugelassenen Lesarten, also für *alle*
Funktionen $K\to K$. Wird die Klasse der Lesarten eingeschränkt (etwa auf
stetige, berechenbare oder monotone Funktionen), ist die Aussage neu zu prüfen
— ein sinnvoller nächster Schritt für konkrete Domänen.

- Ist $\mathcal{I}$ **konstant**, ist alles zulässig — das Vakuum-Kriterium F1
  greift.
- Ist $\mathcal{I}$ **injektiv**, ist jede zulässige Lesart lokal die Identität
  — das Modell wird dogmatisch.

Damit ist die Spannung aus [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
nicht mehr nur Prosa, sondern ein Satz: Die interessante Invariante muss
zwischen beiden Extremen liegen, also echte Information verlieren, ohne
beliebig zu werden. Das verschiebt die offene Frage von „Ist das Modell
konsistent?“ zu „Welche nicht-injektive Invariante ist normativ vertretbar?“ —
und macht sie damit präziser angreifbar.

## Was der Beweis nicht leistet

1. **Keine Anwendbarkeit.** Lean zeigt nicht, dass $\mathcal{I}$ in Recht,
   Physik oder KI sinnvoll gewählt ist.
2. **Keine Wahrheitstheorie.** Der Nicht-Kollaps-Satz ist ein
   Erfüllbarkeitssatz, kein Argument gegen den Relativismus.
3. **Keine CRDT-Konvergenz.** Die verteilte-systemische Behauptung braucht
   einen eigenen Beweis (TLA+ oder ein Lean-Modell der Replikate).
4. **Keine Empirie.** F3 bleibt offen; der Beweis berührt keine Messdaten.
5. **Keine Kanonizität.** Bewiesen ist die Konsistenz *dieser* Definition
   v0.1, nicht die Alternativlosigkeit der Definition.

> Ein maschineller Beweis sagt: „Wenn man diese Definitionen akzeptiert, dann
> folgt dieser Satz.“ Er sagt nicht: „Diese Definitionen sind die richtigen.“

## Reproduzieren

Voraussetzung ist [elan](https://github.com/leanprover/elan), der
Lean-Toolchain-Manager. Die verwendete Version steht in
`formal/lean-toolchain`.

```bash
cd formal
lake build
```

Oder aus dem Projektwurzelverzeichnis:

```bash
bun run verify
```

Der Build ist absichtlich klein: keine Mathlib, keine externen Pakete, nur
Lean-Core. In CI prüft `.github/workflows/lean.yml` zusätzlich mit `--wfail`,
dass keine Warnungen und keine `sorry`-Platzhalter entstehen.

## Aufbau

```text
formal/
├─ lean-toolchain          # Lean-Version (gepinnt)
├─ lakefile.toml           # Paketdefinition
├─ Trinary.lean            # Wurzelmodul
└─ Trinary/
   ├─ Basic.lean           # Träger, Kernrahmen, Admissibilität, Auswertung
   └─ Theorems.lean        # alle Sätze, Gegenbeispiele, Nicht-Kollaps
```

## Anschluss

- [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit) — F4 ist jetzt
  beantwortet.
- [Formale Definition](/docs/trinaeritaet/formale-definition) — die
  Lean-Fassung ist die Referenzimplementierung der Definitionen.
- [Roadmap](/docs/forschung/roadmap) — Lean-Formalisierung abgeschlossen.
