---
title: Neuro-symbolische KI
description: Faktenwissen und normative Wertung getrennt halten — Urteilskraft statt Halluzination.
sidebar_position: 2
---

# Neuro-symbolische KI

Aktuelle Sprachmodelle leiden an einem strukturellen Problem: Sie vermischen
**Faktenwissen** und **normative Wertungen** im selben Vektorraum. Ein Modell,
das gelernt hat, „Die Brücke ist gesperrt“ zu assoziieren, assoziiert zugleich
„schlecht“ oder „gut“ — je nach Trainingskontext. Das führt zu Halluzinationen
und zu scheinbar unlösbaren Widersprüchen.

## Die trinäritische Architektur

```text
┌─────────────────────────────────────────────────────┐
│  Perspektivschicht                                  │
│  Agent A: (σ=+1, ρ_A)     Agent B: (σ=−1, ρ_B)      │
└──────────────────────┬──────────────────────────────┘
                       │  Projektion / Rückprojektion
┌──────────────────────┴──────────────────────────────┐
│  Kernschicht: invariantes Weltmodell (Fakten)       │
│  I(world) = Hash der deduktiv geschlossenen Axiome  │
└─────────────────────────────────────────────────────┘
```

Der Kern ist ein **symbolisches Weltmodell**: eine Menge von Fakten und Regeln,
deren Invariante (z. B. ein Hash oder eine Konsistenzprüfung) erhalten bleiben
muss. Die Perspektivschicht ist **neuronal**: Sie lernt, wie ein Agent den Kern
liest und bewertet.

## Vektor-symbolische Architekturen (VSA)

**VSA** (Vector Symbolic Architectures) bzw. *Hyperdimensional Computing*
kodiert Symbole als hochdimensionale Vektoren und kombiniert sie mit drei
Operationen:

| Operation | Symbol | Bedeutung |
| --- | --- | --- |
| Binden | $\otimes$ | Rolle-Füller-Kombination |
| Bündeln | $\oplus$ | Superposition (Menge) |
| Ähnlichkeit | $\cos$ | semantische Nähe |

Die Trinärität lässt sich geometrisch abbilden:

- Der **Kern** ist ein orthogonaler Basisvektor $\mathbf{e}_0$ maximaler
  Symmetrie.
- Die **Projektionen** sind Rotationen $\mathbf{R}_{\pm}$ in einem Unterraum:

$$
\mathbf{p}_{\pm} = \mathbf{R}_{\pm}\,\mathbf{e}_0
$$

- Die **Urteilskraft** ist eine Distanz- oder Kosinusoperation:

$$
d(\mathbf{p}, \mathbf{e}_0) = 1 - \cos(\mathbf{p}, \mathbf{e}_0)
$$

Je größer die Distanz, desto stärker weicht die Perspektive vom Kern ab.

## Der Admissibilitäts-Check

Der entscheidende Schritt: Bevor eine Perspektive akzeptiert wird, prüft das
System, ob ihre Rückprojektion den Kern verändert.

```ts
type WorldModel = {facts: Set<string>; rules: Rule[]};

const coreHash = (w: WorldModel): string =>
  hash(canonicalize(deductiveClosure(w)));

const admissible = (
  w: WorldModel,
  perspective: (w: WorldModel) => WorldModel,
): boolean => coreHash(perspective(w)) === coreHash(w);
```

Der Check ist billig (ein Hash-Vergleich) und schützt vor einer Klasse von
Halluzinationen: **normative Überschreibungen des Faktenmodells**.

## Was das konkret verhindert

| Ohne Trinärität | Mit Trinärität |
| --- | --- |
| Modell behauptet, die Brücke sei offen, weil „offen“ positiver klingt | Kernwahrheit wird geprüft; die Behauptung wird abgewiesen |
| Zwei Agenten „widersprechen“ sich in einer ethischen Frage | Beide Perspektiven bleiben gültig, weil der Kern unberührt ist |
| Modell vermischt „ist“ und „soll“ | Ebenen sind architektonisch getrennt |

## Grenzen

1. **Die Invariante ist das Problem.** Ein Hash erkennt technische Mutation,
   aber keine semantische. Zwei Formulierungen desselben Fakts haben
   unterschiedliche Hashes.
2. **VSA ist keine gelöste Technologie.** Die geometrische Analogie ist
   inspirierend, aber empirisch nicht ausreichend validiert.
3. **Skalierung.** Die deduktive Hülle eines großen Weltmodells ist teuer.
4. **Normativität.** Die Wahl der Invariante ist selbst eine ethische
   Entscheidung — sie darf nicht an das Modell delegiert werden.

:::warning[Kein Alignment-Wundermittel]
Die Trinärität ist ein **Architekturvorschlag**, kein Alignment-Verfahren. Sie
sagt, *wie* man Fakt und Wertung trennen kann — nicht, *welche* Werte richtig
sind.
:::

## Forschungsfragen

- Wie kodiert man Invarianten, die semantische statt nur syntaktische
  Gleichheit erfassen?
- Lässt sich die Admissibilitätsprüfung differenzierbar machen (für Training)?
- Wie verhält sich das Modell zu bestehenden Alignment-Techniken (RLHF, DPO)?

→ [Formale Definition](/docs/trinaeritaet/formale-definition)
→ [Verteilte Systeme](/docs/anwendungen/verteilte-systeme)
