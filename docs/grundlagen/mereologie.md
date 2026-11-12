---
title: Mereologie
description: Die formale Theorie der Teile-Ganzes-Beziehungen — Axiome, Fusion und die Brücke zur Trinärität.
sidebar_position: 4
---

# Mereologie

**Mereologie** (von griechisch *méros*, „Teil“) ist die formale Theorie der
Teile-Ganzes-Beziehungen. Während die klassische Mengenlehre auf der
Element-Beziehung $\in$ basiert, untersucht die Mereologie die Relation
„$x$ ist ein Teil von $y$“ — geschrieben $x \leq y$ — ohne dass dafür abstrakte
Mengenobjekte existieren müssen.

## Der Kernunterschied zur Mengenlehre

In der Mengenlehre erzeugt jede Zusammenfassung ein neues, abstraktes Objekt,
das eine eigene ontologische Stufe einnimmt:

- Ein Apfel ist ein *Element* der Menge $\{\text{Apfel}\}$, aber nicht identisch
  mit dieser Menge.
- Die Menge der Teile eines Fahrrads ist etwas anderes als das physische
  Fahrrad selbst.

In der Mereologie gibt es keinen solchen **Stufenaufstieg**:

> Die mereologische Summe (*Fusion*) aus Rahmen, Rädern, Lenker und Kette ist
> direkt das Fahrrad selbst — ein konkretes Einzelding, kein abstrakter
> Container.

## Die drei Grundaxiome

Jedes klassische mereologische System (z. B. nach Stanisław Leśniewski oder
Nelson Goodman) definiert die Teil-Relation $\leq$ über drei logische
Grundregeln:

**(M1) Reflexivität.** Jedes Objekt ist ein (unechter) Teil seiner selbst:

$$
x \leq x
$$

**(M2) Antisymmetrie.** Wenn $x$ Teil von $y$ und $y$ Teil von $x$ ist, sind
$x$ und $y$ identisch:

$$
x \leq y \;\land\; y \leq x \;\Longrightarrow\; x = y
$$

**(M3) Transitivität.** Wenn $x$ Teil von $y$ und $y$ Teil von $z$ ist, ist $x$
auch Teil von $z$:

$$
x \leq y \;\land\; y \leq z \;\Longrightarrow\; x \leq z
$$

Ein System mit (M1)–(M3) heißt **partielle Ordnung**. Die echte Teilrelation ist
definiert als

$$
x \lt y \;:\Longleftrightarrow\; x \leq y \;\land\; x \neq y
$$

## Abgeleitete Begriffe

Auf $\leq$ lassen sich weitere Begriffe rein logisch definieren:

**Überlappung** (*overlap*): Zwei Dinge teilen mindestens ein gemeinsames
Teilstück.

$$
O(x,y) \;:\Longleftrightarrow\; \exists z\,(z \leq x \;\land\; z \leq y)
$$

**Disjunktheit**: Zwei Dinge haben keinerlei gemeinsame Teile.

$$
D(x,y) \;:\Longleftrightarrow\; \neg O(x,y)
$$

**Fusion** (*sum*): Ein Objekt $z$ ist die Fusion der $F$-Dinge, wenn genau die
Teile von $z$ mit den $F$-Dingen überlappen.

$$
\mathrm{Fu}(z, F) \;:\Longleftrightarrow\; \forall y\,\bigl(y \leq z \;\leftrightarrow\; \exists x\,(F(x) \land O(x,y))\bigr)
$$

## Klassische Mereologie (GEM)

Die *General Extensional Mereology* (GEM) ergänzt (M1)–(M3) um:

- **Extensionalität**: Objekte mit denselben echten Teilen sind identisch.
- **Universelle Fusion**: Jede nicht-leere Menge von Objekten besitzt eine
  Fusion.
- **Supplementation**: Jedes echte Teil hat ein „Reststück“.

Damit wird die mereologische Struktur zu einem vollständigen booleschen Verband
ohne Nullobjekt — ein starkes und elegantes Fragment der Ontologie.

## Warum das philosophisch relevant ist

### Identität über Zeit

Wenn man bei einem Schiff nach und nach alle Planken austauscht (das **Schiff
des Theseus**), bleibt die mereologische Summe dieselbe oder entsteht ein neues
Ganzes? Die Mereologie allein beantwortet das nicht — sie zeigt aber präzise,
*welche* Zusatzannahmen (z. B. über Form, Funktion oder Kausalgeschichte) man
benötigt, um eine Antwort zu geben.

### Kompositionelle Strukturen

Wie verhalten sich fundamentale Bausteine zu emergenten Gesamtsystemen?

- **Linguistik**: Wie bilden Morpheme ein Wort?
- **Informatik**: Wie setzen sich komplexe Datenstrukturen ohne Overhead aus
  Speicherblöcken zusammen?
- **Biologie**: Ist eine Zelle nur die Summe ihrer Moleküle?

### Hylomorphische Mereologie

**Kit Fine** (*Things and Their Parts*) und **Kathrin Koslicki** (*The Structure
of Objects*) kritisieren die klassische Mereologie: Ein Ganzes sei nicht nur
die unstrukturierte Summe seiner Teile. Sie führen **strukturelle Teile**
(Form, Prinzip) gegenüber **materiellen Teilen** ein.

> Diese Unterscheidung ist der direkteste Anknüpfungspunkt für die Trinärität:
> Der Kern ($0$) wirkt wie ein konstitutives Strukturprinzip, die Projektionen
> ($\pm 1$) wie verschachtelte Sub-Teile, die nur relativ zu diesem Zentrum
> ihre Gültigkeit behalten.

→ [Mereologie und Trinärität](/docs/trinaeritaet/mereologie-verbindung)

## Formale Miniatur

Ein winziges Modell in TypeScript — nur zur Illustration:

```ts
type Part = {id: string; parts: Part[]};

const isPartOf = (x: Part, y: Part): boolean =>
  y.parts.some((p) => p.id === x.id || isPartOf(x, p));

const overlaps = (x: Part, y: Part): boolean =>
  x.id === y.id || x.parts.some((p) => overlaps(p, y));
```

Die Implementierung ist naiv (zyklische Strukturen, Performance), zeigt aber
den Kern: Teil-Sein ist eine *strukturelle*, keine mengenbasierte Relation.

## Weiterlesen

- [Modallogik](/docs/grundlagen/modalitaet)
- [Mereologie und Trinärität](/docs/trinaeritaet/mereologie-verbindung)
- [Formale Definition der Trinärität](/docs/trinaeritaet/formale-definition)
