---
title: Zeit, Raum & Prozess
description: Temporallogik, Topologie des Kontinuums und die Struktur von Ereignissen.
sidebar_position: 8
---

# Zeit-, Raum- & Prozessphilosophie

Die Philosophie der Zeit fragt nach der **Struktur** von Zeitpunkten,
Ereignissen und Kontinuen. Die mathematische Philosophie beantwortet diese
Fragen mit topologischen und algebraischen Modellen.

## Diskret oder dicht?

Drei grundlegende Ordnungstypen:

| Struktur | Eigenschaft | Beispiel |
| --- | --- | --- |
| Diskret | jeder Punkt hat einen Nachfolger | $\mathbb{Z}$ |
| Dicht | zwischen zwei Punkten liegt immer ein dritter | $\mathbb{Q}$ |
| Vollständig | jede beschränkte Menge hat ein Supremum | $\mathbb{R}$ |

Die physikalische Zeit scheint zumindest dicht zu sein; ob sie *kontinuierlich*
im Sinne von $\mathbb{R}$ ist, ist empirisch offen.

## Temporallogik

Die **lineare Temporallogik** (LTL) führt Operatoren für Zeit ein:

- $G p$ — „immer $p$“ (*globally*)
- $F p$ — „irgendwann $p$“ (*finally*)
- $X p$ — „im nächsten Schritt $p$“ (*next*)
- $p \, U \, q$ — „$p$, bis $q$“ (*until*)

Ein typisches Axiom:

$$
G\,p \;\leftrightarrow\; p \land X\,G\,p
$$

Verzweigte Zeit (**CTL**) erlaubt zusätzlich Quantoren über Pfade:
„Auf *allen* Pfaden gilt irgendwann …“.

## Intervalle und Ereignisse

Neben Zeitpunkten sind **Intervalle** zentral. Allen's Intervallalgebra
definiert 13 Relationen zwischen Intervallen, darunter:

```text
  A:  [====]
  B:        [====]     (before)
  B:    [======]       (overlaps)
  B:  [==]             (during)
```

Ereignisse sind dann nicht punktuell, sondern als *Regionen* im
Raum-Zeit-Kontinuum modelliert. Das löst Zeno-Paradoxien eleganter als eine
punktbasierte Semantik.

## Topologie des Kontinuums

Ein Kontinuum lässt sich als **zusammenhängender, kompakter, metrisierbarer
Raum** charakterisieren. Die entscheidende Eigenschaft ist der Zusammenhang:
Es gibt keine „Lücke“, die den Raum in zwei offene Teile zerlegt.

Für die Trinärität ist wichtig: Ein Kontinuum hat **kein ausgezeichnetes
Zentrum** — es sei denn, man führt eines durch eine Metrik oder einen
Bezugspunkt ein. Genau das tut die Trinärität mit dem Kern $0$: Sie zeichnet
einen invarianten Bezugspunkt aus, relativ zu dem Projektionen definiert sind.

## Prozessphilosophie

Whitehead, Peirce und Rescher verstehen die Welt primär als **Prozess** statt
als Substanz. Formale Ansätze modellieren Prozesse als:

- **Pfade** in einem Zustandsraum,
- **Ereignisstrukturen** (event structures) in der Nebenläufigkeitstheorie,
- **Petri-Netze** für verteilte Prozesse.

Die Trinärität schließt hier an: Der Kern ist der *invariante Zustand*, die
Projektionen sind *Perspektiven auf denselben Prozess*. Ein Perspektivwechsel
ist dann eine Transformation, die die Invarianten respektiert.

## Formales Miniaturmodell

```ts
type Instant = number;

type Interval = {start: Instant; end: Instant};

const before = (a: Interval, b: Interval): boolean => a.end < b.start;
const overlaps = (a: Interval, b: Interval): boolean =>
  a.start < b.end && b.start < a.end;
const during = (a: Interval, b: Interval): boolean =>
  b.start <= a.start && a.end <= b.end;
```

## Weiterlesen

- [Mereologie](/docs/grundlagen/mereologie)
- [Formale Definition](/docs/trinaeritaet/formale-definition)
- [Anwendungen: Verteilte Systeme](/docs/anwendungen/verteilte-systeme)
