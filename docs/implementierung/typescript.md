---
title: TypeScript
description: Ein minimaler, lauffähiger Prototyp der Trinärität in TypeScript.
sidebar_position: 2
---

# TypeScript-Prototyp

Dieses Kapitel enthält einen minimalen, aber vollständigen Prototyp. Er ist
bewusst klein gehalten: Er soll die *Struktur* zeigen, nicht production-ready
sein.

## Typen

```ts
export type Valence = 1 | -1;

export type Core = {
  readonly id: string;
  readonly facts: Readonly<Record<string, unknown>>;
  readonly invariant: string;
};

export type Reading = (core: Core) => Core;

export type Perspective = {
  readonly id: string;
  readonly coreId: string;
  readonly valence: Valence;
  readonly read: Reading;
};

export type Admission =
  | {ok: true; value: Perspective}
  | {ok: false; reason: 'core-mutation'; expected: string; actual: string};
```

## Invariante berechnen

```ts
/** Kanonischer Hash der Fakten — Reihenfolge-unabhängig. */
export function computeInvariant(
  facts: Readonly<Record<string, unknown>>,
): string {
  const canonical = Object.keys(facts)
    .sort()
    .map((k) => `${k}=${JSON.stringify(facts[k])}`)
    .join('&');
  return hash(canonical);
}

/** Einfacher, deterministischer Hash (nur für Demonstration). */
function hash(input: string): string {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}
```

## Kern erzeugen

```ts
export function makeCore(facts: Record<string, unknown>): Core {
  return {
    id: crypto.randomUUID(),
    facts: Object.freeze({...facts}),
    invariant: computeInvariant(facts),
  };
}
```

## Perspektive erzeugen

```ts
export function makePerspective(
  core: Core,
  valence: Valence,
  reading: Reading,
): Perspective {
  return {
    id: crypto.randomUUID(),
    coreId: core.id,
    valence,
    read: reading,
  };
}
```

## Admissibilität prüfen

```ts
export function evaluate(core: Core, p: Perspective): Admission {
  if (p.coreId !== core.id) {
    throw new Error('perspective does not belong to this core');
  }
  const projected = p.read(core);
  if (projected.invariant !== core.invariant) {
    return {
      ok: false,
      reason: 'core-mutation',
      expected: core.invariant,
      actual: projected.invariant,
    };
  }
  return {ok: true, value: p};
}
```

## Beispiel: Die gesperrte Brücke

```ts
const core = makeCore({bridge: 'closed', since: '2026-11-12'});

// Zulässige negative Perspektive
const alice = makePerspective(core, -1, (c) => ({
  ...c,
  facts: {...c.facts, annotation: 'Pendler verlieren Zeit'},
}));

// Zulässige positive Perspektive
const bob = makePerspective(core, +1, (c) => ({
  ...c,
  facts: {...c.facts, annotation: 'Altstadt wird ruhiger'},
}));

// Unzulässige Perspektive: Kernmutation
const carol = makePerspective(core, -1, (c) =>
  makeCore({bridge: 'open', since: '2026-11-12'}),
);

console.log(evaluate(core, alice).ok); // true
console.log(evaluate(core, bob).ok);   // true
console.log(evaluate(core, carol).ok); // false
```

## Test mit Vitest

```ts
import {describe, expect, it} from 'vitest';
import {evaluate, makeCore, makePerspective} from './trinary';

describe('Trinärität', () => {
  it('akzeptiert koexistierende Perspektiven', () => {
    const core = makeCore({bridge: 'closed'});
    const a = makePerspective(core, -1, (c) => c);
    const b = makePerspective(core, +1, (c) => c);
    expect(evaluate(core, a).ok).toBe(true);
    expect(evaluate(core, b).ok).toBe(true);
  });

  it('weist Kernmutationen ab', () => {
    const core = makeCore({bridge: 'closed'});
    const c = makePerspective(core, -1, () =>
      makeCore({bridge: 'open'}),
    );
    const result = evaluate(core, c);
    expect(result.ok).toBe(false);
  });

  it('lässt Valenz die Zulässigkeit nicht beeinflussen', () => {
    const core = makeCore({x: 1});
    const plus = makePerspective(core, +1, (c) => c);
    const minus = makePerspective(core, -1, (c) => c);
    expect(evaluate(core, plus).ok).toBe(evaluate(core, minus).ok);
  });
});
```

## Was fehlt

- **Rückprojektion** $\rho^{\leftarrow}$ für verlustfreie Rekonstruktion.
- **Metrik** für Urteilskraft (Distanz zum Kern).
- **Mehrere Akteure** und Persistenz.
- **Kryptografische** Invarianten (SHA-256 statt FNV).

→ [Rust-Implementierung](/docs/implementierung/rust)
→ [Architektur](/docs/implementierung/architektur)
