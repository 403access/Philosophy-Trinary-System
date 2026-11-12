---
title: Die Invarianz-Bedingung
description: Der Operator, der entscheidet, ob eine Wahrnehmung den Kern verändert — das Herzstück der Theorie.
sidebar_position: 3
---

# Die Invarianz-Bedingung

Die Invarianz-Bedingung ist der einzige wirklich neue Mechanismus der
Trinärität. Alles andere — zwei Pole, ein Zentrum — ist philosophisch vertraut.
Neu ist die **operative Regel**, die entscheidet, wann eine Perspektive zulässig
ist.

## Der Grundgedanke

Eine Perspektive darf den Kern **lesen**, aber nicht **überschreiben**. Formal
hatten wir definiert:

$$
\mathrm{Adm}(p) \;:\Longleftrightarrow\; \mathcal{I}(\rho(k)) = \mathcal{I}(k)
$$

Drei Dinge sind daran entscheidend:

1. **$\mathcal{I}$ ist explizit.** Man muss angeben, *was* erhalten bleiben soll.
2. **$\rho$ ist explizit.** Man muss angeben, *wie* die Perspektive den Kern
   liest.
3. **Die Prüfung ist berechenbar.** Für endliche $K$ ist $\mathrm{Adm}$ eine
   entscheidbare Funktion.

## Drei Stärken von Invarianz

Nicht jede Invariantz ist gleich. Man kann abstufen:

**Schwache Invarianz.** Die Invariante bleibt erhalten:

$$
\mathcal{I}(\rho(k)) = \mathcal{I}(k)
$$

**Idempotente Lesart.** Mehrfaches Lesen ändert nichts:

$$
\rho(\rho(k)) = \rho(k)
$$

**Starke Invarianz (Reversibilität).** Die Lesart ist auf dem Kern umkehrbar:

$$
\rho^{\leftarrow}(\rho(k)) = k
$$

Die **Rückprojektion** $\rho^{\leftarrow}$ ist genau die Funktion, die im
ursprünglichen Entwurf noch fehlte. Sie erlaubt es, aus Kern + Perspektive die
ursprüngliche Sicht zu rekonstruieren — die Grundlage der
[semantischen Kompression](/docs/anwendungen/semantische-kompression).

## Eigenschaften

Aus den Definitionen folgen unmittelbar:

| Eigenschaft | Aussage | Bedeutung |
| --- | --- | --- |
| Identität | $\mathrm{Adm}(\langle k,\sigma,\mathrm{id}\rangle)$ | Der Kern ist stets zulässig |
| Komposition | $\mathrm{Adm}(\rho_1), \mathrm{Adm}(\rho_2) \Rightarrow \mathrm{Adm}(\rho_1\circ\rho_2)$ | Zulässigkeit ist abgeschlossen |
| Invarianz unter $\nu$ | $\mathrm{Adm}(\langle k,\sigma,\rho\rangle) \Leftrightarrow \mathrm{Adm}(\langle k,\nu(\sigma),\rho\rangle)$ | Valenz und Zulässigkeit sind orthogonal |
| Nicht-Mutation | $\mathcal{I}(\rho(k))\neq\mathcal{I}(k) \Rightarrow \neg\mathrm{Adm}$ | Kernverletzung ist absolut |

Die dritte Eigenschaft ist wichtig: **Zulässigkeit hängt nicht von der Valenz
ab.** Ob eine Perspektive gut oder schlecht findet, sagt nichts darüber, ob sie
den Kern respektiert.

## Operative Prüfung

Ein minimaler Prüfalgorithmus:

```ts
type Core = { id: string; facts: Record<string, unknown> };

const invariant = (core: Core): string =>
  // In der Praxis: kanonischer Hash der unveränderlichen Fakten
  JSON.stringify(core.facts, Object.keys(core.facts).sort());

const admissible = (core: Core, reading: (c: Core) => Core): boolean =>
  invariant(reading(core)) === invariant(core);
```

Das ist bewusst naiv. Es zeigt aber die Struktur: **Invariante berechnen,
Lesart anwenden, Invarianten vergleichen.**

## Drift vs. Mutation

Zwei Fehlerbilder müssen unterschieden werden:

- **Drift**: Die Perspektive verändert den Kern *graduell*, ohne die Invariante
  zu verletzen. Beispiel: Eine Interpretation wird präzisiert, bleibt aber mit
  dem Fakt verträglich.
- **Mutation**: Die Perspektive verändert die Invariante selbst. Beispiel: Eine
  Interpretation behauptet, der Fakt sei ein anderer.

Nur Mutationen sind unzulässig. Drift ist erlaubt und oft wünschenswert — sie
ist der Mechanismus, durch den sich Verständnis vertieft.

:::warning[Die schwierige Frage]
Wer legt $\mathcal{I}$ fest? Die Invarianz-Bedingung ist nur so gut wie die
Wahl der Invariante. Eine schlecht gewählte Invariante macht das System entweder
trivial (alles ist zulässig) oder dogmatisch (nichts ist zulässig). Die Wahl von
$\mathcal{I}$ ist deshalb ein **normativer Akt**, kein rein technischer.
:::

## Verbindung zu bekannten Mechanismen

Die Invarianz-Bedingung ist strukturell verwandt mit:

| Mechanismus | Invariante | Lesart |
| --- | --- | --- |
| Typsystem | Typ eines Terms | Typinferenz |
| Prüfsumme | Hash des Inhalts | Übertragung |
| Transaktionsdatenbank | Konsistenzbedingung | Transaktion |
| CRDT | Konvergenzzustand | lokale Operation |
| Physik | Erhaltungsgröße | Symmetrietransformation |

Das ist kein Zufall: Überall dort, wo mehrere Perspektiven auf denselben
invarianten Zustand zugelassen werden sollen, braucht man genau diesen
Mechanismus.

→ [Anwendung: Verteilte Systeme](/docs/anwendungen/verteilte-systeme)

## Formale Grenzen

1. **Nicht jede Invariante ist darstellbar.** Manche Fakten sind holistisch;
   ihre Invariante lässt sich nicht lokal berechnen.
2. **Hash-Kollisionen.** Eine technische Invariante (Hash) ist nie perfekt.
3. **Normative Invarianten.** In Ethik und Recht ist $\mathcal{I}$ oft
   umstritten — genau dort, wo die Theorie helfen soll.
4. **Dynamische Kerne.** Wenn sich der Kern legitim ändert, braucht man eine
   Theorie der Kern-Revision.

Diese Grenzen sind keine Widerlegung, sondern der Ort, an dem weitergearbeitet
werden muss. Siehe [Offene Fragen](/docs/forschung/offene-fragen).

→ [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)
