---
title: Verteilte Systeme & CRDTs
description: Lokale Sichten koexistieren, ohne den unveränderlichen Event-Log zu überschreiben.
sidebar_position: 3
---

# Verteilte Systeme & CRDTs

In verteilten Datenbanken (Local-First-Software, Peer-to-Peer-Systeme)
entstehen bei parallelen Änderungen oft Konflikte. Klassische Systeme lösen sie
durch **Überschreiben** (Last-Write-Wins) oder durch **Sperren**. Beides ist
teuer und verliert Information.

Die Trinärität schlägt einen dritten Weg vor: **Koexistenz zulässiger Sichten**.

## Die Architektur

```text
   Client A          Client B          Client C
   (Sicht +1)        (Sicht −1)        (Sicht +1)
       │                 │                 │
       └────────┬────────┴────────┬────────┘
                ▼                 ▼
        ┌───────────────────────────────┐
        │  Immutable Core / Event-Log   │
        │  I(log) = Merkle-Root         │
        └───────────────────────────────┘
```

- Der **Kern** ist ein unveränderlicher Event-Log (append-only).
- Die **Perspektiven** sind lokale Sichten oder Interpretationen.
- Die **Invariante** ist der Merkle-Root des Logs.

Solange eine lokale Sicht den Merkle-Root nicht verändert, ist sie zulässig und
muss nicht synchronisiert werden.

## Formale Fassung

Ein zustandsbasierter **CRDT** ist ein Join-Halbstverband
$\langle S, \sqcup \rangle$. Der Join ist kommutativ, assoziativ und idempotent:

$$
s_1 \sqcup s_2 = s_2 \sqcup s_1, \qquad
(s_1 \sqcup s_2) \sqcup s_3 = s_1 \sqcup (s_2 \sqcup s_3), \qquad
s \sqcup s = s
$$

Konvergenz folgt aus der Algebra: Alle Replikate, die dieselben Updates
gesehen haben, haben denselben Zustand.

Die Trinärität ergänzt dies um eine **Interpretationsschicht**:

$$
\text{Replikat} = \langle \text{Kern}, \text{lokale Sicht}, \text{Valenz} \rangle
$$

Zwei Replikate können verschiedene lokale Sichten haben und trotzdem denselben
Kern teilen.

## Ein Beispiel: Kommentare mit Bewertung

```ts
type Core = {
  postId: string;
  content: string;
  merkleRoot: string;
};

type View = {
  clientId: string;
  valence: 1 | -1;
  annotation: string;
};

// Der Kern wird nie überschrieben — nur gelesen.
const admissibile = (core: Core, view: View): boolean =>
  view.annotation.length > 0 &&
  !view.annotation.includes('DELETE_CORE');
```

Das Beispiel ist bewusst einfach. In der Praxis braucht man:

- kryptografische Invarianten (Signaturen, Merkle-Bäume),
- eine Theorie der **Kern-Revision** (wann darf der Log wachsen?),
- eine Konfliktklassifikation (Faktenstreit vs. Perspektivstreit).

## Konfliktklassifikation

Der eigentliche Nutzen: Man kann Konflikte **typisiert** behandeln.

| Konflikttyp | Definition | Lösung |
| --- | --- | --- |
| Faktenkonflikt | Sichten verändern den Kern | Auflösung nötig (Wahrheit klären) |
| Perspektivkonflikt | Sichten teilen den Kern, divergieren in $\sigma$ | Koexistenz erlaubt |
| Drift | Sicht präzisiert den Kern, ohne Invariante zu ändern | Merge / Anreicherung |

Diese Typisierung ist der Beitrag der Trinärität. Sie ersetzt nicht die
technische Konfliktauflösung, aber sie sagt, *welche* Konflikte überhaupt
aufgelöst werden müssen.

## Verbindung zu Local-First

Local-First-Software (Ink & Switch) will, dass Nutzer offline arbeiten und
später synchronisieren. Die Trinärität liefert dafür eine Semantik:

- Der Event-Log ist die **Wahrheit**.
- Die lokalen Sichten sind **Perspektiven**.
- Die Synchronisation muss nur den Kern abgleichen, nicht jede Interpretation.

## Grenzen

1. **Der Kern wächst.** Ein append-only Log wird groß; Garbage Collection
   braucht Invarianten.
2. **Semantische Invarianten.** Ein Merkle-Root erkennt technische, nicht
   inhaltliche Mutation.
3. **Byzantinische Fehler.** Böswillige Replikate können den Kern angreifen;
   dafür braucht es Konsensprotokolle, nicht nur Admissibilität.
4. **Normative Konflikte.** Was als „Kern“ gilt, ist oft selbst umstritten.

## Forschungsfragen

- Wie definiert man Invarianten, die semantische Äquivalenz erfassen?
- Lässt sich die Admissibilitätsprüfung in CRDT-Merge integrieren?
- Wie behandelt man legitime Kern-Revisionen (Gesetzesänderungen, Reparaturen)?

→ [Semantische Kompression](/docs/anwendungen/semantische-kompression)
→ [Implementierung](/docs/implementierung/architektur)
