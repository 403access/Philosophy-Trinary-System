---
title: Roadmap
description: Meilensteine, Deliverables und Status des Forschungsprogramms.
sidebar_position: 5
---

# Roadmap

Diese Roadmap beschreibt den Weg von der Idee zur publizierten, geprüften
Theorie. Sie ist bewusst realistisch: Es gibt keine Abkürzung zu einem
widerlegbaren Paper.

:::info[Status]
Aktueller Stand: **Phase 3 — Proof of Concept**. Die formale Definition steht
(v0.1), der Prototyp ist in Arbeit, die empirische Evaluation steht aus.
:::

## Phase 1 — Axiomatisierung ✅

**Status:** abgeschlossen (v0.1)

| Deliverable | Status |
| --- | --- |
| Träger $T=\{-1,0,+1\}$ | ✅ |
| Kernrahmen $\langle K,\mathcal{I}\rangle$ | ✅ |
| Admissibilitätsbedingung | ✅ |
| Nicht-Kollaps-Satz | ✅ (informell) |

→ [Formale Definition](/docs/trinaeritaet/formale-definition)

## Phase 2 — Stand der Forschung ✅

**Status:** abgeschlossen

| Deliverable | Status |
| --- | --- |
| Vergleich mit 5 Nachbaransätzen | ✅ |
| USP-Definition | ✅ |
| Bibliographie | ✅ |

→ [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte)

## Phase 3 — Proof of Concept 🔄

**Status:** in Arbeit

| Deliverable | Status |
| --- | --- |
| TypeScript-Prototyp | 🔄 |
| Rust-Prototyp | ⬜ |
| Lean-Formalisierung | ⬜ |
| Fallstudie verteiltes System | ⬜ |

→ [Implementierung](/docs/implementierung/architektur)

## Phase 4 — Paper 📝

**Status:** geplant

| Deliverable | Status |
| --- | --- |
| Abstract & Gliederung | ✅ |
| Erste Vollfassung | ⬜ |
| Interne Reviews | ⬜ |
| Einreichung | ⬜ |

→ [Paper-Outline](/docs/forschung/paper-outline)

## Phase 5 — Peer Review & Replikation 🔬

**Status:** geplant

| Deliverable | Status |
| --- | --- |
| Einreichung bei einem Journal | ⬜ |
| Response to Reviewers | ⬜ |
| Open-Source-Release | ⬜ |
| Replikationsstudie | ⬜ |

→ [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit)

## Meilenstein-Timeline

```text
2026 Q4  ├─ Formale Definition v0.1        ✅
         ├─ Literaturbericht               ✅
2027 Q1  ├─ TypeScript-Prototyp            🔄
         ├─ Lean-Formalisierung            ⬜
2027 Q2  ├─ Fallstudie                     ⬜
         ├─ Paper-Entwurf                  ⬜
2027 Q3  ├─ Interne Reviews                ⬜
         ├─ Einreichung                    ⬜
2027 Q4  ├─ Peer Review                    ⬜
2028 Q1  ├─ Revision & Publikation         ⬜
```

## Risiken

| Risiko | Wahrscheinlichkeit | Gegenmaßnahme |
| --- | --- | --- |
| Invariante bleibt unterbestimmt | hoch | Fallstudie mit konkreter Domäne |
| Formalisierung zeigt Inkonsistenz | mittel | frühzeitige Lean-Prüfung |
| Kein empirischer Vorteil | mittel | Baseline-Vergleich von Anfang an |
| Scope Creep | hoch | Fokus auf eine Domäne |

## Nächste konkrete Schritte

1. TypeScript-Prototyp fertigstellen und testen.
2. Lean-Definition der Axiome T1–T6.
3. Fallstudie: verteiltes System mit zwei Replikaten.
4. Erste Paper-Vollfassung.

→ [Forschungsprogramm](/docs/forschung/forschungsprogramm)
