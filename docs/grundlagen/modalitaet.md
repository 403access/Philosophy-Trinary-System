---
title: Modallogik & mögliche Welten
description: Kripke-Semantiken, Notwendigkeit, epistemische und deontische Logik.
sidebar_position: 5
---

# Modallogik & mögliche Welten

Die klassische Aussagenlogik kennt nur *wahr* und *falsch*. Viele
philosophische Begriffe verlangen jedoch eine feinere Struktur: Etwas ist nicht
nur wahr, sondern **notwendig** wahr; ein Akteur **weiß** etwas; eine Handlung
ist **geboten**.

## Die Grundoperatoren

Die Modallogik ergänzt die klassische Logik um zwei Operatoren:

| Operator | Lesart | Dual |
| --- | --- | --- |
| $\Box p$ | „notwendig $p$“ | $\Diamond p \equiv \neg\Box\neg p$ |
| $\Diamond p$ | „möglich $p$“ | $\Box p \equiv \neg\Diamond\neg p$ |

Die beiden Operatoren sind dual: Notwendigkeit ist die Negation der
Möglichkeit des Gegenteils.

## Kripke-Semantik

Ein **Kripke-Modell** ist ein Tripel

$$
\mathcal{M} = \langle W, R, V \rangle
$$

- $W$ ist eine Menge möglicher Welten,
- $R \subseteq W \times W$ ist die Erreichbarkeitsrelation,
- $V: \mathrm{Prop} \to \mathcal{P}(W)$ ordnet jeder atomaren Aussage die
  Welten zu, in denen sie gilt.

Die zentrale Wahrheitsklausel lautet:

$$
\mathcal{M}, w \models \Box p
\;\Longleftrightarrow\;
\forall v \in W\,\bigl(wRv \Rightarrow \mathcal{M}, v \models p\bigr)
$$

> „Notwendig“ heißt also: *in allen von hier aus erreichbaren Welten*.

## Welche Axiome welche Struktur erzwingen

Die Wahl der Erreichbarkeitsrelation bestimmt, welche modalen Gesetze gelten:

| Axiom | Formel | Bedingung an $R$ |
| --- | --- | --- |
| T | $\Box p \to p$ | reflexiv |
| 4 | $\Box p \to \Box\Box p$ | transitiv |
| 5 | $\Diamond p \to \Box\Diamond p$ | euklidisch |
| B | $p \to \Box\Diamond p$ | symmetrisch |

- **S4** (reflexiv + transitiv) modelliert oft *Wissen*.
- **S5** (Äquivalenzrelation) modelliert *metaphysische Notwendigkeit*.
- **KD** (serial) modelliert *deontische* Konsistenz: Gebotenes ist möglich.

## Epistemische Logik

In der epistemischen Logik steht $\Box_i$ für „Akteur $i$ weiß, dass …“. Die
Semantik relativiert Erreichbarkeit auf epistemische Alternativen: Welten, die
mit dem aktuellen Wissen von $i$ vereinbar sind.

$$
K_i p \;\equiv\; \Box_i p
$$

Das **Wissensaxiom** (T) verlangt: Was gewusst wird, ist wahr. Für *Überzeugung*
(*belief*) wird T oft fallengelassen — man kann sich irren.

## Deontische Logik

Hier steht $O p$ für „es ist geboten, dass $p$“. Das Standard-System **KD**
fordert Konsistenz:

$$
O p \to \neg O \neg p
$$

Ein echtes deontisches Dilemma — $O p \land O \neg p$ — ist damit im
Standardmodell unzulässig. Genau hier zeigt sich eine Grenze klassischer
Modallogik, die für die Trinärität relevant wird: Wie lassen sich
*widersprechende, aber je gültige* Perspektiven repräsentieren?

## Intensionale Semantik

Montague und Lewis erweiterten die Modallogik zu einer Semantik natürlicher
Sprache. Eine **Intension** ist eine Funktion von Welten auf Extensionen:

$$
\llbracket \text{der Morgenstern} \rrbracket : W \to \text{Objekte}
$$

„Morgenstern“ und „Abendstern“ haben dieselbe Extension (die Venus), aber
verschiedene Intensionen. Das erklärt, warum ihre Gleichsetzung informativ ist.

## Verbindung zur Trinärität

Die Trinärität nutzt die modallogische Grundidee, verschiebt aber den Fokus:

- Die Modallogik fragt: *In welchen Welten gilt $p$?*
- Die Trinärität fragt: *Welche Projektion auf einen invarianten Kern ist
  zulässig?*

Beide trennen **Struktur** von **Perspektive**. Der Unterschied ist, dass die
Trinärität die Perspektive nicht als Wahrheitswert in einer anderen Welt
modelliert, sondern als *Relation zum selben Kern*.

→ [Die Trinäritäts-Theorie](/docs/trinaeritaet/einfuehrung)

## Weiterlesen

- [Wahrscheinlichkeit & Epistemologie](/docs/grundlagen/wahrscheinlichkeit)
- [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte)
