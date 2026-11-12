---
title: Formale Logik
description: Syntax, Semantik, Kalküle, Korrektheit und Vollständigkeit als Werkzeugkasten der Philosophie.
sidebar_position: 3
---

# Formale Logik als Werkzeug

Formale Logik ist die Grammatik der mathematischen Philosophie. Sie liefert
eine Sprache, in der sich Behauptungen eindeutig formulieren lassen, und eine
Semantik, die sagt, wann sie wahr sind.

## Syntax und Semantik

Ein logisches System besteht aus drei Teilen:

1. **Syntax** — welche Zeichenketten wohlgeformte Formeln sind.
2. **Semantik** — welche Bedeutungen (Wahrheitswerte, Modelle) diese Formeln
   haben.
3. **Kalkül** — welche Formeln aus welchen Prämissen ableitbar sind.

Die zentrale metalogische Frage lautet: *Stimmen Ableitbarkeit und Wahrheit
überein?*

## Aussagenlogik

Die kleinste Einheit ist die Aussage $p, q, r, \dots$ mit den Junktoren
$\neg, \land, \lor, \to, \leftrightarrow$.

| $p$ | $q$ | $p \land q$ | $p \lor q$ | $p \to q$ |
|:---:|:---:|:---:|:---:|:---:|
| W | W | W | W | W |
| W | F | F | W | F |
| F | W | F | W | W |
| F | F | F | F | W |

Eine Tautologie ist eine Formel, die unter jeder Belegung wahr ist, z. B.

$$
(p \to q) \land p \;\to\; q \qquad \text{(Modus ponens)}
$$

## Prädikatenlogik

Die Prädikatenlogik fügt Quantoren $\forall$ und $\exists$ sowie Prädikate und
Terme hinzu. Ein Modell $\mathcal{M} = \langle D, I \rangle$ besteht aus einem
Individuenbereich $D$ und einer Interpretationsfunktion $I$.

$$
\mathcal{M} \models \forall x\, \varphi(x)
\iff
\text{für alle } d \in D: \mathcal{M} \models \varphi(d)
$$

Damit lassen sich philosophische Argumente präzise rekonstruieren:

```text
(P1)  ∀x (Mensch(x) → Sterblich(x))
(P2)  Mensch(sokrates)
(K)   ∴ Sterblich(sokrates)
```

## Korrektheit und Vollständigkeit

Zwei metalogische Qualitätsmerkmale:

- **Korrektheit** (*soundness*): Was ableitbar ist, ist auch semantisch gültig.
- **Vollständigkeit** (*completeness*): Was semantisch gültig ist, ist auch
  ableitbar.

Gödels **Vollständigkeitssatz** (1929) zeigt: Die Prädikatenlogik erster Stufe
ist vollständig. Sein **Unvollständigkeitssatz** (1931) zeigt zugleich, dass
jedes hinreichend starke, widerspruchsfreie formale System arithmetische Sätze
enthält, die es weder beweisen noch widerlegen kann.

:::warning[Konsequenz]
Es gibt keine vollständige Formalisierung der Arithmetik. Jede formale
Philosophie muss daher mit **Offenheit** und **Revisionsfähigkeit** rechnen —
ein Motiv, das in der [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit)
wiederkehrt.
:::

## Nicht-klassische Logiken

Sobald man das Prinzip der Bivalenz aufgibt, entstehen Alternativen:

| Logik | Wahrheitswerte | Motivation |
| --- | --- | --- |
| Klassisch | $\{0,1\}$ | Bivalenz |
| Łukasiewicz $\mathbf{L}_3$ | $\{0,\tfrac12,1\}$ | Vagheit, Zukunft |
| Kleene | $\{0,u,1\}$ | Unbestimmtheit |
| Intuitionistisch | Heyting-Algebra | Konstruktivität |
| Parakonsistent | Widerspruch tolerierend | Dialetheien |
| Bilateral | Geltung + Ablehnung | epistemische Polarität |

Die Trinärität ist **keine** weitere dreiwertige Logik im engen Sinn. Sie
trennt die *ontologische* Ebene (Kern) von der *epistemischen* Ebene
(Projektion). Mehr dazu in
[Abgrenzung & USP](/docs/trinaeritaet/abgrenzung-usp).

## Beweisassistenten

Moderne Werkzeuge prüfen Beweise mechanisch:

```lean
theorem modus_ponens (p q : Prop) (hp : p) (h : p → q) : q :=
  h hp
```

Lean und Coq erzwingen vollständige Explizitheit. Ein philosophisches Argument,
das sich dort formalisieren lässt, ist frei von versteckten Prämissen — oder es
zeigt sich, welche fehlen.

## Weiterlesen

- [Mereologie](/docs/grundlagen/mereologie)
- [Modallogik](/docs/grundlagen/modalitaet)
- [Die Trinäritäts-Theorie](/docs/trinaeritaet/einfuehrung)
