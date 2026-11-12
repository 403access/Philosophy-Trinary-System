---
title: Software-Architektur
description: Wie man die Trinärität auf binärer Hardware als Schichtenarchitektur abbildet.
sidebar_position: 1
---

# Software-Architektur

Die Trinärität ist keine Hardware-Technologie. Sie ist eine **semantische
Schicht**, die auf gewöhnlicher binärer Hardware läuft. Dieses Kapitel beschreibt
eine Referenzarchitektur.

## Die vier Schichten

```text
┌──────────────────────────────────────────────────────────┐
│  4. Anwendungsschicht                                    │
│     Mediation, KI-Agent, Datenbank-UI                    │
├──────────────────────────────────────────────────────────┤
│  3. Perspektivschicht                                    │
│     Lesarten ρ, Valenz σ, Projektion / Rückprojektion    │
├──────────────────────────────────────────────────────────┤
│  2. Admissibilitätsschicht                               │
│     Invariante I, Prüfung Adm(p)                         │
├──────────────────────────────────────────────────────────┤
│  1. Kernschicht                                          │
│     Unveränderliche Fakten, Event-Log, Weltmodell        │
└──────────────────────────────────────────────────────────┘
```

Jede Schicht hat eine klare Verantwortung. Die entscheidende Regel: **Die
Perspektivschicht darf die Kernschicht nicht direkt mutieren.** Alle Änderungen
am Kern laufen über die Admissibilitätsschicht.

## Datenmodell

```ts
// Schicht 1: Kern
type Core = {
  readonly id: string;
  readonly facts: ReadonlyMap<string, unknown>;
  readonly invariant: string;      // kanonischer Hash
};

// Schicht 3: Perspektive
type Perspective<K> = {
  readonly id: string;
  readonly coreId: string;
  readonly valence: 1 | -1;
  readonly read: (core: K) => K;   // Lesart ρ
  readonly project: (core: K) => K; // Rückprojektion ρ←
};

// Schicht 2: Prüfung
type Admission =
  | {ok: true; perspective: Perspective<Core>}
  | {ok: false; reason: 'core-mutation'; detail: string};
```

## Der Lebenszyklus einer Perspektive

1. **Erzeugen** — ein Akteur formuliert eine Lesart des Kerns.
2. **Projizieren** — die Lesart wird auf den Kern angewendet.
3. **Prüfen** — die Invariante wird verglichen.
4. **Zulassen oder abweisen** — bei Erfolg wird die Perspektive gespeichert.
5. **Rückprojizieren** — bei Bedarf wird die ursprüngliche Sicht rekonstruiert.

```ts
function evaluate(
  core: Core,
  perspective: Perspective<Core>,
): Admission {
  const projected = perspective.read(core);
  if (projected.invariant !== core.invariant) {
    return {
      ok: false,
      reason: 'core-mutation',
      detail: `expected ${core.invariant}, got ${projected.invariant}`,
    };
  }
  return {ok: true, perspective};
}
```

## Invarianten

Die Wahl der Invariante ist die wichtigste Designentscheidung:

| Domäne | Invariante |
| --- | --- |
| Dokument | Hash des normalisierten Inhalts |
| Datenbank | Merkle-Root des Event-Logs |
| Weltmodell | deduktive Hülle der Axiome |
| Recht | Menge unstreitiger Tatsachen |
| Physik | Erhaltungsgrößen |

**Faustregel:** Die Invariante sollte *notwendig* und *hinreichend* sein:

- **Notwendig:** Keine zulässige Perspektive darf sie verändern.
- **Hinreichend:** Keine unzulässige Perspektive darf sie erhalten.

## Fehlerbehandlung

Drei Fehlerklassen:

1. **Kernmutation** — Invariante verletzt → Perspektive abweisen.
2. **Technischer Fehler** — Hash-Kollision, Serialisierung → neu berechnen.
3. **Normativer Konflikt** — zwei Invarianten widersprechen sich → Eskalation
   an die Anwendungsschicht.

Die dritte Klasse ist philosophisch interessant: Sie zeigt, dass die Wahl der
Invariante selbst umstritten sein kann.

## Teststrategie

```ts
describe('admissibility', () => {
  it('accepts an identity reading', () => {
    const core = makeCore({bridge: 'closed'});
    const p = makePerspective(core, -1, (c) => c);
    expect(evaluate(core, p).ok).toBe(true);
  });

  it('rejects a core mutation', () => {
    const core = makeCore({bridge: 'closed'});
    const p = makePerspective(core, -1, (c) =>
      makeCore({bridge: 'open'}),
    );
    expect(evaluate(core, p).ok).toBe(false);
  });
});
```

Die Tests prüfen genau die Eigenschaften, die die Theorie behauptet:
Kernpräsentation zulässig, Mutation unzulässig, Valenz orthogonal.

## Technologie-Wahl

| Sprache | Stärke | Einsatz |
| --- | --- | --- |
| TypeScript | schnelle Prototypen, UI | Web, Demonstration |
| Rust | Korrektheit, Performance | Kernbibliothek, verteilte Systeme |
| Lean 4 | formale Beweise | Konsistenzprüfung des Kernkalküls (`formal/`) |

Der Kernkalkül ist in Lean 4 formalisiert; die Sätze und ihre Grenzen stehen in
[Formale Verifikation](/docs/forschung/formale-verifikation).

→ [TypeScript-Implementierung](/docs/implementierung/typescript)
→ [Rust-Implementierung](/docs/implementierung/rust)
