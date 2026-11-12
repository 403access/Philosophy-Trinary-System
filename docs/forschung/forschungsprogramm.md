---
title: Das Forschungsprogramm
description: Fünf Phasen von der Axiomatisierung bis zur Peer Review.
sidebar_position: 1
---

# Das Forschungsprogramm

Die Trinärität in eine wissenschaftliche Arbeit zu gießen, erfordert einen
strukturierten Prozess. Dieses Kapitel beschreibt fünf Phasen — von der
formalen Axiomatisierung bis zur kritischen Falsifikation.

:::note[Leitprinzip]
Ob die Annahme am Ende aufgeht, ist offen. Das Ziel ist nicht, sie zu
*bestätigen*, sondern sie **prüfbar** zu machen.
:::

## Phase 1 — Formale Axiomatisierung

**Ziel:** Das Modell in eine präzise mathematisch-logische Form bringen.

**Aufgaben:**

- Definition der Domäne: Kern $K$ und Projektionen $P=\{+1,-1\}$.
- Definition der Invarianz-Funktion $\mathcal{I}$ und der Zulässigkeit
  $\mathrm{Adm}$.
- Festlegung des formalen Status des Kerns: singulär oder binär.

**Ergebnis:** [Formale Definition](/docs/trinaeritaet/formale-definition).

**Erfolgskriterium:** Das System ist konsistent konstruiert; alle Begriffe sind
definiert oder als primitiv markiert.

## Phase 2 — Literaturarbeit & Stand der Forschung

**Ziel:** Die Theorie im bestehenden Diskurs verorten.

**Aufgaben:**

- Vergleich mit Supervaluationismus (Fine, van Fraassen), Bilateralismus
  (Rumfitt, Wansing), Łukasiewicz, Kleene, Peirce, Rovelli.
- Herausarbeitung des USP: Invarianz + Koexistenz + Valenz.
- Benennung dessen, was **nicht** neu ist.

**Ergebnis:** [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte),
[Abgrenzung & USP](/docs/trinaeritaet/abgrenzung-usp).

**Erfolgskriterium:** Jede Nachbardisziplin ist korrekt zitiert; die Abgrenzung
ist nachprüfbar.

## Phase 3 — Operationalisierung & Proof of Concept

**Ziel:** Die Theorie formal beweisen oder algorithmisch demonstrieren.

**Aufgaben:**

- Logischer Beweis: Vermeidet das System den *epistemic collapse*?
- Algorithmischer Prototyp in TypeScript oder Rust.
- Demonstration an einem Mini-Wissensgraphen mit kontroversen Aussagen.

**Ergebnis:** [Implementierung](/docs/implementierung/architektur).

**Erfolgskriterium:** Der Prototyp läuft; die Nicht-Kollaps-Eigenschaft ist
getestet.

## Phase 4 — Struktur der wissenschaftlichen Arbeit

**Ziel:** Ein einreichbares Paper.

**Aufgaben:**

- Abstract, Einleitung, formaler Kern, Vergleich, Implementierung, Diskussion,
  Fazit.
- Limitationen explizit machen.
- Falsifikationskriterien formulieren.

**Ergebnis:** [Paper-Outline](/docs/forschung/paper-outline).

**Erfolgskriterium:** Ein Reviewer kann das Paper in seiner Struktur
nachvollziehen, ohne den Autor zu kennen.

## Phase 5 — Kritische Falsifizierbarkeit

**Ziel:** Den Stresstest.

**Aufgaben:**

- Bedingungen formulieren, unter denen die Theorie scheitert.
- Schwachstellen selbst benennen und diskutieren.
- Offene Fragen priorisieren.

**Ergebnis:** [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit),
[Offene Fragen](/docs/forschung/offene-fragen).

**Erfolgskriterium:** Mindestens ein klar formuliertes Kriterium, das die
Theorie widerlegen würde.

## Zeitplan (Orientierung)

| Phase | Dauer | Meilenstein |
| --- | --- | --- |
| 1 | 2–3 Wochen | Formale Definition v0.1 |
| 2 | 3–4 Wochen | Literaturbericht |
| 3 | 4–6 Wochen | Lauffähiger Prototyp |
| 4 | 4–6 Wochen | Paper-Entwurf |
| 5 | 2–3 Wochen | Falsifikationskriterien |

Das sind grobe Schätzungen für eine Einzelperson mit Hintergrund in Logik und
Programmierung.

## Methodische Standards

- **Explizitheit:** Jede Annahme wird benannt.
- **Reproduzierbarkeit:** Code und Beweise sind öffentlich.
- **Bescheidenheit:** Die Theorie wird als Programm, nicht als Ergebnis
  präsentiert.
- **Angreifbarkeit:** Schwachstellen werden gesucht, nicht versteckt.

→ [Roadmap](/roadmap)
→ [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit)
