---
title: Recht & Mediation
description: Erst den Faktenkern festhalten, dann die Bewertungen als Projektionen verhandeln.
sidebar_position: 5
---

# Recht & Mediation

In juristischen und zwischenmenschlichen Konflikten scheitern Einigungen oft
daran, dass beide Parteien glauben, die Wahrheit der anderen Seite würde ihre
eigene Wahrheit vernichten. Die Trinärität liefert ein Verfahren, das diese
Angst strukturell auflöst.

## Das Problem

Zwei Parteien streiten. Die eine sagt: „Das war Notwehr.“ Die andere: „Das war
Angriff.“ Klassisch behandelt man das als **Faktenstreit** — eine Seite muss
falsch sein.

Oft ist es aber ein **Perspektivstreit**: Beide beschreiben denselben
Ereigniskern, bewerten ihn aber entgegengesetzt.

## Das Verfahren

**Schritt 1 — Kern fixieren.** Welche Fakten sind unstreitig?

```text
- Person A hat Person B körperlich berührt.
- B hat dabei eine Verletzung erlitten.
- A handelte in einer als bedrohlich erlebten Situation.
```

**Schritt 2 — Perspektiven trennen.** Welche Bewertungen werden auf den Kern
projiziert?

| Partei | Valenz | Deutung |
| --- | :---: | --- |
| A | $+1$ | Notwehr, Schutz |
| B | $-1$ | Angriff, Schaden |

**Schritt 3 — Admissibilität prüfen.** Verändert eine Deutung den Kern?

- „A hat B berührt“ + „A handelte aus Notwehr“ → zulässig (Kern unverändert).
- „A hat B nicht berührt“ → unzulässig (Kernmutation).

**Schritt 4 — Konflikt klassifizieren.** Ist der Streit ein Fakten- oder ein
Perspektivstreit? Nur der Faktenstreit braucht Beweisaufnahme.

## Das formale Modell

Ein Mediationsfall ist ein Tupel

$$
\mathcal{M} = \langle K,\; P_A,\; P_B,\; \mathcal{I} \rangle
$$

mit Kern $K$, den Perspektiven $P_A, P_B$ und der Invariante $\mathcal{I}$
(z. B. der Menge unstreitiger Tatsachen).

Ein Dissens heißt **echt**, wenn

$$
\neg \mathrm{Adm}(P_A) \;\lor\; \neg \mathrm{Adm}(P_B)
$$

andernfalls ist er ein **Perspektivdissens** und blockiert keine Einigung über
den Kern.

## Warum das hilft

- **Entlastung.** Parteien müssen ihre Bewertung nicht aufgeben, um sich auf
  Fakten zu einigen.
- **Fokussierung.** Ressourcen gehen in den echten Faktenstreit, nicht in
  Bewertungsdebatten.
- **Transparenz.** Man sieht, wo eine Einigung möglich ist und wo nicht.

## Ein Werkzeug

Ein formales Argumentations-Tool könnte so aussehen:

```ts
type MediationCase = {
  core: string[];
  perspectives: {
    party: string;
    valence: 1 | -1;
    reading: (core: string[]) => string[];
  }[];
};

const classify = (c: MediationCase): 'fact' | 'perspective' =>
  c.perspectives.every((p) => sameSet(p.reading(c.core), c.core))
    ? 'perspective'
    : 'fact';
```

## Grenzen

1. **Machtasymmetrien.** Wer den Kern definiert, hat Macht. Das Verfahren darf
   diese Macht nicht verschleiern.
2. **Normativität des Rechts.** Recht ist nicht nur Faktenklärung; es setzt
   Normen. Die Trinärität trennt Fakt und Bewertung, ersetzt aber keine
   Rechtsetzung.
3. **Trauma und Emotion.** Nicht jeder Konflikt ist rationalisierbar.
4. **Der Kern ist oft umstritten.** Genau dann braucht man ein Verfahren zur
   Kernfeststellung — das ist die eigentliche juristische Arbeit.

:::note[Kein Ersatz für Recht]
Die Trinärität ist ein **Analysewerkzeug**, kein Urteil. Sie sagt, wo ein
Faktenstreit vorliegt — nicht, wer Recht hat.
:::

## Forschungsfragen

- Wie formalisiert man die Feststellung des Kerns fair?
- Lässt sich das Verfahren empirisch testen (Mediationsstudien)?
- Wie verhält es sich zu restaurativer Justiz?

→ [Kognition](/docs/anwendungen/kognition)
→ [Entscheidungs- & Spieltheorie](/docs/grundlagen/entscheidung-spieltheorie)
