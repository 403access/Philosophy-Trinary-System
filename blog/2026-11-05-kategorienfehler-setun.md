---
slug: kategorienfehler-setun
title: Der Kategorienfehler der Setun
authors: [research]
tags: [trinaeritaet, ki]
date: 2026-11-05
description: Warum der sowjetische Ternär-Computer auf der falschen Abstraktionsebene ansetzte — und was das für die Trinärität bedeutet.
---

# Der Kategorienfehler der Setun

1958 entwickelte Nikolai Brussenzow an der Moskauer Lomonossow-Universität die
**Setun**, einen Computer mit balancierter ternärer Logik: $-1$, $0$, $+1$.
Mathematisch war das elegant — kein separates Vorzeichen-Bit, hohe
Radix-Ökonomie.

Und trotzdem verschwand die Setun. Warum?

{/* truncate */}

## Die falsche Ebene

Die Setun versuchte, Trinärität auf der **physikalischen Ebene** zu erzwingen:
drei stabile Spannungsniveaus in Transistoren und magnetischen Verstärkern.
Zwei Zustände stabil zu halten ist physikalisch und industriell jedoch viel
billiger als drei feinstufige Level zu kalibrieren.

Die Setun hat ein philosophisch-strukturelles Prinzip in die Hardware geprügelt.
Das ist, als wolle man die Grammatik einer Sprache in die Moleküle des Papiers
einprägen.

## Die richtige Ebene

Die Trinärität ist **keine** Hardware-Technologie. Sie ist eine semantische
Architektur:

- Die unterste Ebene darf binär bleiben.
- Die Trinärität ist selbst binär verschachtelt: Ebene 1 (Kern/Perspektive) ×
  Ebene 2 (Valenz).
- Sie läuft daher auf gewöhnlichen Bits und Bytes.

```text
0   → 00
+1  → 10
−1  → 11
```

Zwei Bits genügen. Die Struktur gehört in die Wissensrepräsentation, nicht in
den Kupferdraht.

## Die Lehre

Der Streit „binär vs. trinär“ ist ein Kategorienfehler. Die beiden liegen auf
verschiedenen Abstraktionsebenen. Die Binärlogik bleibt das Substrat; die
Trinärität fügt eine Ebene der Interpretation hinzu.

→ [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)
→ [Abgrenzung & USP](/docs/trinaeritaet/abgrenzung-usp)
