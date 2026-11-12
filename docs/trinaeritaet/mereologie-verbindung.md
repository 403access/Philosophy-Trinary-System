---
title: Mereologie & Trinärität
description: Wie der Kern als Strukturprinzip und die Projektionen als strukturelle Teile gelesen werden können.
sidebar_position: 5
---

# Mereologie & Trinärität

Die Mereologie ist der direkteste Anknüpfungspunkt der Trinärität an die
etablierte formale Philosophie. Der Grund ist einfach: Die Trinärität behauptet,
dass die Pole **Teile eines Ganzen** sind, das durch das Zentrum zusammengehalten
wird. Genau das ist eine mereologische Aussage.

## Die Standard-Mereologie reicht nicht

Die klassische Mereologie (siehe [Grundlagen: Mereologie](/docs/grundlagen/mereologie))
kennt nur die unstrukturierte Summe:

$$
\text{Fahrrad} = \text{Rahmen} \oplus \text{Räder} \oplus \text{Lenker} \oplus \text{Kette}
$$

Aber diese Summe erklärt nicht, *warum* die Teile ein Fahrrad und nicht einen
Haufen Metall bilden. Es fehlt das **Strukturprinzip**.

## Hylomorphische Mereologie

**Kit Fine** (*Things and Their Parts*, 1999) und **Kathrin Koslicki**
(*The Structure of Objects*, 2008) führen genau dieses Prinzip ein. Ein Ganzes
besteht nicht nur aus materiellen Teilen, sondern auch aus **strukturellen
Teilen**: der Form, dem Prinzip, der Anordnung.

$$
\text{Ganzes} = \langle \text{Materie},\; \text{Struktur} \rangle
$$

Die Struktur ist selbst ein Teil — aber ein Teil *anderer Art*. Sie ist das,
was die Materie zur Einheit macht.

## Die Abbildung auf die Trinärität

Hier liegt die entscheidende Analogie:

| Mereologie (Fine/Koslicki) | Trinärität |
| --- | --- |
| Strukturprinzip / Form | Kern $0$ |
| Materielle Teile | Projektionen $\pm 1$ |
| Einheit des Ganzen | Invarianz-Bedingung $\mathcal{I}$ |
| Zerfall bei Formverlust | Kernmutation → $\bot$ |

Der Kern fungiert als **konstitutives Strukturprinzip**. Die Projektionen sind
verschachtelte Sub-Teile, die nur relativ zu diesem Zentrum ihre Gültigkeit
behalten.

> Verändert eine Projektion das Zentrum, kollabiert die mereologische Identität
> des Ganzen — das Ganze ist nicht mehr dasselbe Ganze.

## Formale Fassung: restringierte Fusion

In der klassischen Mereologie ist die Fusion *frei*: Jede Menge von Teilen hat
eine Summe. In der Trinärität ist die Fusion **restringiert**:

$$
\mathrm{Fu}_{\mathcal{I}}(z, F)
\;:\Longleftrightarrow\;
\forall y\,\bigl(y \leq z \leftrightarrow \exists x\,(F(x) \land O(x,y))\bigr)
\;\land\;
\mathcal{I}(z) = \mathcal{I}\!\left(\bigoplus F\right)
$$

Die zweite Konjunktion ist neu: Die Fusion muss dieselbe Invariante besitzen wie
die Summe ihrer Teile. Eine „Fusion“, die die Invariante verändert, ist keine
zulässige Fusion.

Das ist ein starker Begriff: Er verbietet bestimmte Kompositionen. Nicht jede
Zusammenfassung von Teilen ergibt ein Ganzes.

## Das Schiff des Theseus

Die Trinärität liefert eine neue Perspektive auf das klassische Puzzle:

- Werden alle Planken ersetzt, bleibt die **Invariante** (die Form, die
  Funktion, die Geschichte) erhalten?
- Wenn ja, ist das Schiff dasselbe — trotz materieller Diskontinuität.
- Wenn nein, ist ein neues Ganzes entstanden.

Die Mereologie allein kann das nicht entscheiden. Sie zeigt aber präzise, dass
die Antwort von der Wahl der Invarianten $\mathcal{I}$ abhängt. Genau das ist
der Beitrag der Trinärität: Sie macht die **Abhängigkeit von der Invariante
explizit**, statt sie zu verstecken.

## Wo die Analogie bricht

Man muss ehrlich sein: Die Trinärität ist **keine** vollständige mereologische
Theorie. Drei Unterschiede:

1. **Richtung.** Mereologie fragt nach Teilen *eines* Ganzen. Die Trinärität
   fragt nach Perspektiven *auf* einen Kern. Die Richtung der Relation ist
   anders.
2. **Zeit.** Mereologie ist meist statisch. Die Trinärität braucht eine Dynamik
   der Perspektiven.
3. **Normativität.** Die Invarianz-Bedingung ist normativ (was *soll* erhalten
   bleiben?), die mereologische Teil-Relation ist deskriptiv.

Diese Unterschiede sind kein Defekt, sondern der Ort, an dem die Theorie über
die etablierte Mereologie hinausgeht.

## Ein Miniaturbeispiel

```ts
type Whole = {
  core: {structure: string; invariant: string};
  parts: {id: string; valence: 1 | -1}[];
};

const isSameWhole = (a: Whole, b: Whole): boolean =>
  a.core.invariant === b.core.invariant;

const compose = (parts: Whole['parts'], invariant: string): Whole => ({
  core: {structure: 'trinary', invariant},
  parts,
});
```

Die Funktion `isSameWhole` ist bewusst trivial: Identität wird über die
Invariante definiert, nicht über die Materie. Das ist die mereologische These
der Trinärität in einer Zeile.

## Weiterlesen

- [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte)
- [Abgrenzung & USP](/docs/trinaeritaet/abgrenzung-usp)
- [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
