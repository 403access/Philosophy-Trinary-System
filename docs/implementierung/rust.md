---
title: Rust
description: Eine typsichere Kernimplementierung mit Result-basierter Admissibilität.
sidebar_position: 3
---

# Rust-Implementierung

Rust eignet sich für die Kernbibliothek, weil es Invarianten durch das Typsystem
und durch explizite Fehlerbehandlung erzwingt. Dieses Kapitel zeigt eine
minimale, aber idiomatische Umsetzung.

## Typen

```rust
use std::collections::BTreeMap;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Valence {
    Positive,
    Negative,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Core {
    pub id: String,
    pub facts: BTreeMap<String, String>,
    pub invariant: String,
}

#[derive(Debug, Clone)]
pub struct Perspective {
    pub id: String,
    pub core_id: String,
    pub valence: Valence,
    pub reading: fn(&Core) -> Core,
}
```

## Invariante

```rust
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};

pub fn compute_invariant(facts: &BTreeMap<String, String>) -> String {
    let mut hasher = DefaultHasher::new();
    // BTreeMap iteriert bereits in sortierter Reihenfolge.
    for (k, v) in facts {
        k.hash(&mut hasher);
        v.hash(&mut hasher);
    }
    format!("{:016x}", hasher.finish())
}

impl Core {
    pub fn new(facts: BTreeMap<String, String>) -> Self {
        let invariant = compute_invariant(&facts);
        Self {
            id: uuid::Uuid::new_v4().to_string(),
            facts,
            invariant,
        }
    }
}
```

## Fehler und Admissibilität

```rust
#[derive(Debug, PartialEq, Eq)]
pub enum AdmissionError {
    CoreMutation { expected: String, actual: String },
    WrongCore { expected: String, actual: String },
}

pub type Admission = Result<(), AdmissionError>;

pub fn evaluate(core: &Core, p: &Perspective) -> Admission {
    if p.core_id != core.id {
        return Err(AdmissionError::WrongCore {
            expected: core.id.clone(),
            actual: p.core_id.clone(),
        });
    }

    let projected = (p.reading)(core);

    if projected.invariant != core.invariant {
        return Err(AdmissionError::CoreMutation {
            expected: core.invariant.clone(),
            actual: projected.invariant,
        });
    }

    Ok(())
}
```

## Beispiel

```rust
fn main() {
    let mut facts = BTreeMap::new();
    facts.insert("bridge".to_string(), "closed".to_string());

    let core = Core::new(facts);

    // Zulässige Perspektive: gleiche Fakten, andere Annotation
    let alice = Perspective {
        id: "alice".into(),
        core_id: core.id.clone(),
        valence: Valence::Negative,
        reading: |c| {
            let mut facts = c.facts.clone();
            facts.insert("annotation".into(), "Pendler verlieren Zeit".into());
            Core {
                invariant: compute_invariant(&facts),
                ..c.clone()
            }
        },
    };

    // Unzulässige Perspektive: Kernmutation
    let carol = Perspective {
        id: "carol".into(),
        core_id: core.id.clone(),
        valence: Valence::Negative,
        reading: |_| {
            let mut facts = BTreeMap::new();
            facts.insert("bridge".into(), "open".into());
            Core::new(facts)
        },
    };

    // Hinweis: Das obige Beispiel illustriert die Struktur. Für eine
    // korrekte Invariante muss die Annotation aus der Invariante
    // ausgeschlossen werden.
    let _ = (alice, carol);
}
```

:::caution[Invariante vs. Annotation]
Das Beispiel zeigt ein subtiles Problem: Wenn die Invariante *alle* Fakten
umfasst, dann verändert jede Annotation den Hash — und die Perspektive wäre
unzulässig. In der Praxis muss die Invariante nur die **unveränderlichen
Kernfakten** umfassen, nicht die Metadaten der Perspektive.
:::

## Verbesserte Invariante

```rust
pub struct Core {
    pub id: String,
    /// Nur die unveränderlichen Fakten.
    pub essential: BTreeMap<String, String>,
    /// Perspektivische Metadaten (nicht in der Invariante).
    pub annotations: Vec<String>,
    pub invariant: String,
}

impl Core {
    pub fn new(essential: BTreeMap<String, String>) -> Self {
        let invariant = compute_invariant(&essential);
        Self {
            id: uuid::Uuid::new_v4().to_string(),
            essential,
            annotations: Vec::new(),
            invariant,
        }
    }
}
```

Damit ist die Trennung sauber: **essentielle Fakten** konstituieren die
Invariante, **Annotationen** sind Perspektiven.

## Warum Rust?

| Eigenschaft | Nutzen |
| --- | --- |
| Ownership | Der Kern kann nicht versehentlich mutiert werden |
| `Result` | Admissibilität ist explizit, kein stilles Fehlschlagen |
| `BTreeMap` | Deterministische Iteration → stabile Hashes |
| Traits | Perspektiven können generisch über Domänen definiert werden |

## Nächste Schritte

- `no_std`-Variante für eingebettete Systeme.
- Serde-Serialisierung für verteilte Systeme.
- Property-based Testing mit `proptest`.
- Formale Verifikation mit Kani oder Creusot.

→ [TypeScript-Implementierung](/docs/implementierung/typescript)
→ [Architektur](/docs/implementierung/architektur)
