---
title: Was ist mathematische Philosophie?
description: Definition, Methoden und Abgrenzung der formalen Philosophie.
sidebar_position: 1
---

# Was ist mathematische Philosophie?

**Mathematische Philosophie** ist diejenige Strömung der theoretischen
Philosophie, die philosophische Probleme mit den Werkzeugen der Mathematik und
der formalen Logik bearbeitet. Ihr Kennzeichen ist nicht ein bestimmter
Gegenstand, sondern eine **Methode**: Begriffe werden explizit definiert,
Behauptungen werden formalisiert, und Argumente werden auf Konsistenz und
Gültigkeit geprüft.

> Nicht *was* gedacht wird, sondern *wie* es gezeigt wird, unterscheidet die
> mathematische von der rein hermeneutischen Philosophie.

## Drei Grundoperationen

Jede formalphilosophische Arbeit lässt sich als Abfolge von drei Operationen
beschreiben:

1. **Explikation** — ein vager Alltagsbegriff wird durch einen präzisen
   formalen Begriff ersetzt (z. B. „Teil“ durch eine Relation $\leq$).
2. **Axiomatisierung** — die grundlegenden Gesetze des Begriffs werden als
   Axiome festgelegt.
3. **Modellierung** — Semantiken oder Modelle zeigen, welche Strukturen die
   Axiome erfüllen und welche Sätze daraus folgen.

## Die fünf Kernbereiche

### 1. Formale Ontologie & Mereologie

Untersuchung von Existenz, Identität und den Beziehungen von Teilen und Ganzen
mithilfe axiomatischer Systeme. Die Mereologie (Leśniewski) ersetzt die
Element-Relation $\in$ der Mengenlehre durch die Teil-Relation $\leq$.

→ [Zur Mereologie](/docs/grundlagen/mereologie)

### 2. Modale Logik & mögliche Welten

Formalisierung von Notwendigkeit ($\Box$), Möglichkeit ($\Diamond$), Wissen
($K_i$) und Pflicht ($O$) über Kripke-Semantiken. Der Ausdruck „es ist
notwendig, dass $p$“ wird wahr, wenn $p$ in *allen* erreichbaren Welten gilt.

→ [Zur Modallogik](/docs/grundlagen/modalitaet)

### 3. Wahrscheinlichkeitstheorie & Epistemologie

Mathematische Modellierung von Überzeugungsgraden (*credences*), rationalem
Glaubenswechsel und Konditionalisierung. Der Bayesianismus liefert eine
diachrone Norm: Wie soll sich eine Überzeugung ändern, wenn Evidenz eintrifft?

→ [Zur Wahrscheinlichkeit](/docs/grundlagen/wahrscheinlichkeit)

### 4. Entscheidungs- & Spieltheorie

Formale Analyse rationalen Handelns, kollektiver Dilemmata und sozialer
Wahltheorie. Arrows Unmöglichkeitstheorem zeigt, dass kein Wahlverfahren
gleichzeitig mehrere intuitive Fairness-Axiome erfüllen kann.

→ [Zur Entscheidungstheorie](/docs/grundlagen/entscheidung-spieltheorie)

### 5. Zeit-, Raum- & Prozessphilosophie

Topologische und algebraische Modelle zur Struktur von Zeitpunkten, Ereignissen
und Kontinuen. Ist die Zeit diskret oder dicht? Sind Ereignisse punktuell oder
ausgedehnt?

→ [Zur Zeitphilosophie](/docs/grundlagen/zeit-raum-prozess)

## Abgrenzung zu Nachbardisziplinen

| Disziplin | Frage | Methode |
| --- | --- | --- |
| Mathematische Philosophie | Was folgt aus welchen Begriffen? | Axiome, Modelle, Beweise |
| Logik | Welche Schlüsse sind gültig? | Kalküle, Semantik, Metalogik |
| Mathematik | Welche Strukturen existieren? | Beweis, Konstruktion |
| Empirische Philosophie | Was glauben Menschen? | Erhebung, Statistik |
| Hermeneutik | Was bedeutet ein Text? | Interpretation |

Die Grenzen sind fließend. Entscheidend ist die **Explizitheit der Regeln**:
In der mathematischen Philosophie muss jeder Schritt nachvollziehbar und
prinzipiell maschinell prüfbar sein.

## Ein Minimalbeispiel

Betrachte den Satz: *„Wenn alle Menschen sterblich sind und Sokrates ein
Mensch ist, dann ist Sokrates sterblich.“*

Formal:

$$
\forall x\,(M(x) \to S(x)),\quad M(\text{sokrates}) \;\vdash\; S(\text{sokrates})
$$

Der Schluss ist gültig, weil er eine Instanz des Modus ponens ist. Was hier
trivial wirkt, ist die Grundlage dafür, auch *nicht-triviale* philosophische
Argumente — etwa den ontologischen Gottesbeweis — maschinell zu prüfen.

:::info[Warum Formalisierung?]
Formalisierung ist kein Selbstzweck. Sie macht Annahmen sichtbar, trennt
Streitpunkte, und erlaubt es, ein Argument in einem Beweisassistenten wie Lean
oder Coq zu verifizieren. Siehe [Implementierung](/docs/implementierung/architektur).
:::

## Weiterlesen

- [Geschichte der Disziplin](/docs/grundlagen/geschichte)
- [Formale Logik als Werkzeug](/docs/grundlagen/formale-logik)
- [Die Trinäritäts-Theorie](/docs/trinaeritaet/einfuehrung)
