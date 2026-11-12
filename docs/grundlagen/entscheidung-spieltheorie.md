---
title: Entscheidungs- & Spieltheorie
description: Erwartungsnutzen, Gleichgewichte, Gefangenendilemma und Arrows Unmöglichkeitstheorem.
sidebar_position: 7
---

# Entscheidungs- & Spieltheorie

Wo die Epistemologie fragt, *was* ein Akteur glauben soll, fragt die
Entscheidungstheorie, *was* er tun soll. Sie liefert das formale Gerüst für
rationales Handeln unter Unsicherheit.

## Erwartungsnutzen

Ein rationaler Akteur wählt die Handlung mit dem höchsten **Erwartungsnutzen**:

$$
EU(a) = \sum_{s \in S} P(s \mid a)\, U(s, a)
$$

- $S$: mögliche Zustände der Welt,
- $P(s \mid a)$: Wahrscheinlichkeit von $s$ gegeben Handlung $a$,
- $U(s,a)$: Nutzen des Ergebnisses.

Die **von-Neumann–Morgenstern-Axiome** (Vollständigkeit, Transitivität,
Stetigkeit, Unabhängigkeit) garantieren, dass eine Präferenzordnung genau dann
durch eine Nutzenfunktion repräsentierbar ist, wenn sie diese Axiome erfüllt.

## Dominanz und Unsicherheit

Wenn eine Handlung in *jedem* Zustand mindestens so gut ist wie eine andere,
dominiert sie diese **strikt**. Bei echter Unsicherheit ohne Wahrscheinlichkeiten
bieten sich **Maximin** (bester schlechtester Fall) oder **Minimax-Regret** an.

## Spieltheorie

Ein Spiel ist ein Tripel

$$
G = \langle N, (A_i)_{i \in N}, (u_i)_{i \in N} \rangle
$$

mit Spielern $N$, Aktionsmengen $A_i$ und Nutzenfunktionen $u_i$.

### Nash-Gleichgewicht

Ein Profil $a^* = (a_1^*, \dots, a_n^*)$ ist ein **Nash-Gleichgewicht**, wenn
kein Spieler durch einseitige Abweichung besser fährt:

$$
u_i(a_i^*, a_{-i}^*) \geq u_i(a_i, a_{-i}^*) \quad \forall i, \forall a_i
$$

### Das Gefangenendilemma

|  | B schweigt | B gesteht |
| --- | --- | --- |
| **A schweigt** | (3, 3) | (0, 5) |
| **A gesteht** | (5, 0) | (1, 1) |

Beide haben ein dominant striktes Interesse zu gestehen, obwohl Kooperation
beiden besser gefiele. Das ist der Kern kollektiver Dilemmata — und ein
Motiv für die Trinärität: Wie lässt sich ein gemeinsamer Kern (*Kooperation*)
gegen zwei kurzfristige Projektionen (*Eigennutz*) stabilisieren?

## Soziale Wahltheorie

Wie aggregiert man individuelle Präferenzen zu einer kollektiven? **Arrow**
(1951) zeigte, dass kein Wahlverfahren gleichzeitig folgende Bedingungen
erfüllen kann:

1. **Universalität** — jede Präferenzordnung ist zulässig.
2. **Pareto** — einstimmige Präferenzen werden respektiert.
3. **Unabhängigkeit von irrelevanten Alternativen**.
4. **Nicht-Diktatur** — kein Individuum bestimmt immer das Ergebnis.

> Arrows Theorem ist ein **Unmöglichkeitssatz**: Es zeigt nicht, dass
> Demokratie irrational ist, sondern dass jedes Verfahren *trade-offs* erzwingt.

## Verbindung zur Trinärität

Die Trinärität lässt sich als Alternative zur reinen Aggregation lesen:

- Statt individuelle Präferenzen zu *einem* Ergebnis zu verrechnen, wird zuerst
  der **gemeinsame Faktenkern** ($0$) fixiert.
- Die individuellen Bewertungen ($\pm 1$) bleiben als **koexistierende
  Projektionen** erhalten.
- Die Invarianz-Bedingung verhindert, dass eine Projektion den Kern
  überschreibt.

Das löst Arrows Problem nicht (es bleibt ein Aggregationsproblem), verschiebt
aber die Frage: Nicht *welche Präferenz gewinnt*, sondern *welche Projektion ist
mit dem Kern verträglich*.

→ [Anwendung: Recht & Mediation](/docs/anwendungen/recht-mediation)

## Weiterlesen

- [Zeit, Raum & Prozess](/docs/grundlagen/zeit-raum-prozess)
- [Anwendungen](/docs/anwendungen/ueberblick)
