# Trinary — formale Verifikation

Maschinell geprüfter Kernkalkül der Trinärität in Lean 4. Bewusst ohne
Mathlib-Abhängigkeit: nur Lean-Core, damit der Build in Sekunden läuft und
reproduzierbar bleibt.

## Bauen

Voraussetzung ist [elan](https://github.com/leanprover/elan). Die gepinnte
Toolchain steht in `lean-toolchain`.

```bash
lake build
```

Oder aus dem Projektwurzelverzeichnis:

```bash
bun run verify
```

Der Build muss ohne `sorry` und ohne Warnungen durchlaufen. CI prüft zusätzlich
mit `lake build --wfail` und einem Axiom-Audit.

## Struktur

| Datei | Inhalt |
| --- | --- |
| `Trinary/Basic.lean` | Träger $T=\{-1,0,+1\}$, Involution $\nu$, Kernrahmen, Perspektive, Admissibilität, Auswertung |
| `Trinary/Theorems.lean` | Nicht-Kollaps, Zentrum-Eindeutigkeit, Grenzfälle konstanter/injektiver Invarianten, Gegenbeispiel zur Komposition |
| `Trinary.lean` | Wurzelmodul |

## Wichtigste Ergebnisse

| Theorem | Aussage |
| --- | --- |
| `nu_involutive` | $\nu\circ\nu=\mathrm{id}$ |
| `nu_ne_id` | $\nu\neq\mathrm{id}$ |
| `adm_id` | Die Kernpräsentation ist zulässig |
| `adm_valence_irrel` | Zulässigkeit hängt nicht von der Valenz ab |
| `eval_eq_core_iff` | Wert $0$ $\Leftrightarrow$ $\rho=\mathrm{id}$ |
| `core_presentation_not_unique` | T1 als Perspektiv-Eindeutigkeit ist wörtlich falsch |
| `noncollapse` | Zwei zulässige Perspektiven entgegengesetzter Valenz koexistieren und erhalten verschiedene Werte |
| `adm_not_closed_under_comp` | Punktuelle Admissibilität ist **nicht** unter Komposition abgeschlossen |
| `drift_iff_not_injective` | Drift existiert genau dann, wenn die Invariante nicht injektiv ist |
| `invariant_of_const` / `eval_of_const` | Konstante Invariante macht alles zulässig (F1) |
| `invariant_eq_id_of_injective` | Injektive Invariante erzwingt die Identität |

## Interpretation

Der Beweis bezieht sich auf das **Modell**, nicht auf die philosophische These.
Er zeigt: Wenn man die Definitionen aus
`docs/trinaeritaet/formale-definition.md` akzeptiert, ist der Kalkül konsistent
und der Nicht-Kollaps-Satz erfüllbar. Er zeigt nicht, dass die Wahl der
Invarianten normativ richtig oder empirisch fruchtbar ist.

Die ausführliche Diskussion steht in
`docs/forschung/formale-verifikation.md`.
