---
title: Semantische Kompression
description: Kern + Projektions-Offset als verlustfreie Repräsentation von Bedeutung.
sidebar_position: 4
---

# Semantische Kompression

Wenn man große Wissensbestände (Enzyklopädien, Codebases, Diskurse) komprimiert,
besteht ein großer Teil der Redundanz aus **verschiedenen Formulierungen
derselben Sache**. Klassische Kompression (gzip, zstd) erkennt syntaktische
Wiederholung, aber keine semantische.

Die Trinärität liefert ein Modell für **semantische** Kompression: Speichere
den minimalen Sinn einmal und kodiere die Perspektiven als kompakte Offsets.

## Das Modell

```text
   ┌─────────────────────────────────────────────┐
   │  Kern: minimaler semantischer Gehalt (0)    │
   └──────────────────┬──────────────────────────┘
          ┌───────────┴───────────┐
          ▼                       ▼
   Offset (+1, ρ_A)        Offset (−1, ρ_B)
   „positive Lesart“       „negative Lesart“
```

Die Idee: Eine Aussage und ihre Umkehrung teilen denselben Kern. Statt beide
voll zu speichern, speichert man den Kern und einen **Projektions-Offset**.

## Formale Bedingung

Verlustfreie Rekonstruktion ist genau dann möglich, wenn die Rückprojektion
$\rho^{\leftarrow}$ existiert und

$$
\rho^{\leftarrow}\bigl(\rho(k)\bigr) = k
$$

gilt. Das ist die **starke Invarianz** aus
[Invarianz-Bedingung](/docs/trinaeritaet/invarianz).

Wenn $\rho$ nicht umkehrbar ist, ist die Kompression verlustbehaftet — wie bei
jeder verlustbehafteten Kodierung.

## Ein Beispiel

Drei Formulierungen desselben Sachverhalts:

1. „Die Brücke ist gesperrt.“
2. „Man kann die Brücke derzeit nicht überqueren.“
3. „Die Überfahrt ist unterbrochen.“

Der Kern: *Brücke nicht passierbar*. Die Formulierungen sind Perspektiven mit
verschiedenen Konnotationen. Statt drei volle Sätze zu speichern:

```json
{
  "core": "bridge:impassable",
  "projections": [
    {"offset": "+1", "register": "formal", "surface": "gesperrt"},
    {"offset": "+1", "register": "colloquial", "surface": "nicht überquerbar"},
    {"offset": "-1", "register": "technical", "surface": "Überfahrt unterbrochen"}
  ]
}
```

Der Kern ist die gemeinsame Invariante; die Offsets kodieren Register und
Valenz.

## Analogien

| Technik | Kern | Offset |
| --- | --- | --- |
| Delta-Encoding | Basisversion | Differenz |
| PCA | Hauptkomponenten | Residual |
| Wavelet-Kompression | Approximation | Details |
| Trinärität | semantischer Kern | Projektions-Offset |

Die Trinärität ist keine Kompressionstechnik im engen Sinn, aber sie liefert
die **Semantik**, die eine solche Technik bräuchte.

## Warum das schwierig ist

1. **Semantische Gleichheit ist unentscheidbar.** Ob zwei Sätze dasselbe
   bedeuten, lässt sich im Allgemeinen nicht berechnen.
2. **Konnotationen sind nicht binär.** „Gut/schlecht“ ist eine grobe Achse;
   Register, Ironie und Kontext passen nicht in ein Bit.
3. **Der Kern ist theorieabhängig.** Was als „derselbe Sachverhalt“ gilt, hängt
   von der gewählten Ontologie ab.

:::caution[Keine magische Kompression]
Die Trinärität behauptet **nicht**, dass sich Bedeutung beliebig komprimieren
lässt. Sie behauptet, dass man *dort, wo eine Invariante existiert*, die
Perspektiven als Offsets kodieren kann.
:::

## Forschungsfragen

- Wie findet man den minimalen Kern automatisch?
- Lässt sich die Rückprojektion aus Daten lernen?
- Wie behandelt man mehrstufige Perspektiven (Perspektiven auf Perspektiven)?

→ [Neuro-symbolische KI](/docs/anwendungen/neuro-symbolische-ki)
→ [Verteilte Systeme](/docs/anwendungen/verteilte-systeme)
