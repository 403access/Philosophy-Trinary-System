---
title: Willkommen
description: Ein offenes Forschungsprogramm zwischen mathematischer Logik, theoretischer Philosophie und künstlicher Intelligenz.
sidebar_position: 1
---

# Mathematische Philosophie

> *Die Philosophie muss sich, wie jede Wissenschaft, einer Prüfung auf
> Konsistenz, Entscheidbarkeit und formale Gültigkeit unterziehen lassen.*

**Mathematische Philosophie** — oft auch als *analytische Ontologie*, *formale
Philosophie* oder *symbolische Philosophie* bezeichnet — verbindet die rigorose
Präzision der mathematischen Logik und formaler Strukturen mit den tiefen,
konzeptuellen Fragestellungen der theoretischen Philosophie.

Anstatt sich auf rein sprachliche Intuitionen zu verlassen, formalisiert sie
philosophische Probleme so, dass sie überprüfbar werden.

---

## Was diese Dokumentation ist

Diese Seite ist zugleich **Lehrbuch**, **Forschungsprogramm** und
**Spezifikation**. Sie verfolgt drei Ziele:

1. **Grundlagen vermitteln** — die methodischen Säulen der mathematischen
   Philosophie: Mereologie, Modallogik, Wahrscheinlichkeit, Entscheidungs- und
   Spieltheorie sowie Zeit- und Prozessphilosophie.
2. **Eine Theorie formulieren** — die *Trinäritäts-Theorie*: ein invarianter
   Kern ($0$) und zwei koexistierende Projektionen ($+1$, $-1$), die gültig
   bleiben, solange sie den Kern nicht verändern.
3. **Wissenschaftlich prüfbar machen** — Axiomatisierung, Proof of Concept,
   Limitationen und explizite Falsifikationskriterien.

:::note[Status]
Es handelt sich um ein **offenes Forschungsprogramm** (Preprint v0.1). Die
Theorie ist kein etablierter Konsens. Genau deshalb ist sie so aufgebaut, dass
sie scheitern *kann* — und zwar an klar benennbaren Stellen. Der Kernkalkül ist
inzwischen in Lean 4 maschinell geprüft; die philosophische und empirische
Arbeit bleibt offen.
:::

## Die fünf methodischen Säulen

| Säule | Gegenstand | Formales Werkzeug |
| --- | --- | --- |
| Formale Ontologie & Mereologie | Existenz, Identität, Teil-Ganzes | axiomatische Systeme, Leśniewski-Mereologie |
| Modale Logik | Notwendigkeit, Möglichkeit, Wissen, Pflicht | Kripke-Semantiken |
| Wahrscheinlichkeit & Epistemologie | Überzeugungsgrade, Glaubenswechsel | Bayes, Konditionalisierung |
| Entscheidungs- & Spieltheorie | rationales Handeln, kollektive Wahl | Erwartungsnutzen, Gleichgewichte |
| Zeit-, Raum- & Prozessphilosophie | Zeitpunkte, Ereignisse, Kontinuen | Topologie, Algebra, Temporallogik |

## Der rote Faden: die Trinärität

Die klassische Logik ist **bivalent**: Jede Aussage ist wahr oder falsch. Das
ist mächtig, aber es erzeugt ein Problem, sobald zwei Akteure denselben
Sachverhalt gegensätzlich *bewerten*. Ein flaches binäres System registriert
$A \land \neg A$ — einen Widerspruch — und bricht zusammen oder erzwingt eine
willkürliche Entscheidung.

Die Trinärität schlägt eine **architektonische Trennung** vor:

```text
        Ebene 2 · Wahrnehmung        +1  (gut / bejahend)
                                     −1  (schlecht / verneinend)
        ─────────────────────────────────────────────────────
        Ebene 1 · Kern                0  (invariante Grundwahrheit)
```

- Der **Kern** ($0$) speichert, *was der Fall ist*.
- Die **Projektionen** ($\pm 1$) speichern, *wie es auf ein Subjekt wirkt*.
- Die **Invarianz-Bedingung** ist der Integritäts-Constraint: Eine Perspektive
  ist zulässig, solange ihre Rückprojektion den Kern nicht mutiert.

## Wie du diese Dokumentation liest

Wenn du neu bist, lies in dieser Reihenfolge:

1. [Grundlagen der mathematischen Philosophie](/docs/grundlagen/mathematische-philosophie)
2. [Die Trinäritäts-Theorie — Einführung](/docs/trinaeritaet/einfuehrung)
3. [Formale Definition](/docs/trinaeritaet/formale-definition)
4. [Invarianz-Bedingung](/docs/trinaeritaet/invarianz)

Wenn du bereits mit formaler Logik vertraut bist, springe direkt zur
[formalen Definition](/docs/trinaeritaet/formale-definition) und zur
[Abgrenzung zum Stand der Forschung](/docs/trinaeritaet/abgrenzung-usp).

Wenn du praktisch arbeiten willst, beginne mit der
[Software-Architektur](/docs/implementierung/architektur).

## Ein Paper, kein Blog

Die Dokumentation ist so geschrieben, dass sie sich zu einer wissenschaftlichen
Arbeit verdichten lässt. Der [Paper-Entwurf](/docs/forschung/paper-outline)
bildet die Struktur ab; die [Roadmap](/roadmap) beschreibt den Weg dorthin.
Eine druckfertige Fassung steht als [PDF](/paper) bereit.

:::tip[Mitmachen]
Dieses Projekt ist auf Widerspruch angewiesen. Wenn du eine Stelle findest, an
der die Theorie bricht, ist das ein *Ergebnis*, kein Fehler. Siehe
[Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit).
:::
