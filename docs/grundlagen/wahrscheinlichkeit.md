---
title: Wahrscheinlichkeit & Epistemologie
description: Credences, Bayes-Regel, Konditionalisierung und die Normen rationalen Glaubens.
sidebar_position: 6
---

# Wahrscheinlichkeit & Epistemologie

Die formale Epistemologie modelliert Überzeugungen nicht binär, sondern als
**Grade**. Eine *Credence* ist eine subjektive Wahrscheinlichkeit, mit der ein
rationaler Akteur eine Proposition für wahr hält.

## Die Kolmogorov-Axiome

Ein Wahrscheinlichkeitsmaß $P$ über einem Ereignisraum $\Omega$ erfüllt:

$$
P(\Omega) = 1, \qquad P(\varnothing) = 0, \qquad P(A \cup B) = P(A) + P(B) \text{ für disjunkte } A, B
$$

Daraus folgt die Komplementregel:

$$
P(\neg A) = 1 - P(A)
$$

## Credences und Kohärenz

Der **Bayesianismus** behauptet: Rationale Credences sind Wahrscheinlichkeiten.
Wer gegen die Axiome verstößt, ist anfällig für ein **Dutch Book** — eine Menge
von Wetten, die sicher Verlust erzeugt.

Beispiel: Wer $P(A) = 0{,}7$ und $P(\neg A) = 0{,}5$ zugleich annimmt, hat
$P(A) + P(\neg A) = 1{,}2 \gt 1$ und damit inkohärente Grade.

## Konditionalisierung

Wie soll sich eine Überzeugung ändern, wenn Evidenz $E$ eintrifft? Die
klassische Antwort ist die **Konditionalisierungsregel**:

$$
P'(A) = P(A \mid E) = \frac{P(A \land E)}{P(E)}, \qquad P(E) \gt 0
$$

Das ist die Bayes-Regel in ihrer diachronen Form:

$$
\underbrace{P(H \mid E)}_{\text{Posterior}}
=
\frac{\underbrace{P(E \mid H)}_{\text{Likelihood}}\;\underbrace{P(H)}_{\text{Prior}}}
{\underbrace{P(E)}_{\text{Evidenz}}}
$$

## Ein philosophisches Beispiel

Angenommen, eine Theorie $H$ sagt ein Experiment $E$ voraus, das andere
Theorien nicht erklären. Wie stark sollte $E$ die Überzeugung in $H$ erhöhen?

$$
\frac{P(H \mid E)}{P(\neg H \mid E)}
=
\frac{P(E \mid H)}{P(E \mid \neg H)}
\cdot
\frac{P(H)}{P(\neg H)}
$$

Der **Bayes-Faktor** $\frac{P(E\mid H)}{P(E\mid\neg H)}$ ist das Maß der
Evidenzstärke. Er ist unabhängig vom Prior — deshalb kann Evidenz zwischen
Akteuren mit unterschiedlichen Ausgangsüberzeugungen vermitteln.

## Grenzen der Konditionalisierung

- **Dogmatismus**: Wer $P(H)=1$ ansetzt, kann durch keine Evidenz mehr
  korrigiert werden ($P(H\mid E)=1$).
- **Alte Evidenz**: Konditionalisierung setzt voraus, dass $E$ neu ist.
- **Vagheit**: Wie modelliert man unpräzise Credences? (Imprecise
  Probabilities, Dempster–Shafer.)

:::note[Brücke zur Trinärität]
Die Trinärität ist *kein* probabilistisches Modell. Aber sie teilt mit der
formalen Epistemologie die Einsicht, dass ein rationaler Akteur zwischen
**Akzeptanz**, **Ablehnung** und **Enthaltung** unterscheiden muss. Die
Enthaltung ($0$) ist dabei nicht bloß „Wahrscheinlichkeit $0{,}5$“, sondern eine
eigene epistemische Haltung.
:::

## Doxastische Logik

Die doxastische Logik formalisiert Überzeugungen mit Operatoren:

- $B_i p$: Akteur $i$ glaubt, dass $p$.
- $K_i p$: Akteur $i$ weiß, dass $p$ (stärker: Wahrheit + Rechtfertigung).

Die Trinärität schlägt vor, die drei Haltungen **Akzeptanz** ($+1$),
**Ablehnung** ($-1$) und **Suspension** ($0$) als strukturell gleichrangig zu
behandeln — mit der Besonderheit, dass $0$ als *objektiver Bezugspunkt* und
nicht als Wissenslücke fungiert.

→ [Formale Definition](/docs/trinaeritaet/formale-definition)

## Weiterlesen

- [Entscheidungs- & Spieltheorie](/docs/grundlagen/entscheidung-spieltheorie)
- [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte)
