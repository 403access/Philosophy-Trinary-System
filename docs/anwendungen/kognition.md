---
title: Kognition & Dissonanz
description: Ein Ereignis zugleich als schmerzhaft und wachstumsfördernd integrieren.
sidebar_position: 6
---

# Kognition & Dissonanz

Menschen erleben Stress — **kognitive Dissonanz** —, wenn sie zwei
widersprüchliche Bewertungen desselben Ereignisses gleichzeitig halten müssen.
Die Trinärität liefert ein Modell, das diesen Stress erklärt und auflöst, ohne
die Realität des Ereignisses zu verdrängen.

## Das Modell

Ein belastendes Ereignis wird nicht als *eine* Bewertung gespeichert, sondern
als **Kern plus Projektionen**:

```text
   Ereignis-Kern (0):  „Die Prüfung wurde nicht bestanden.“
        │
        ├── Projektion +1:  „Ich habe etwas Wichtiges gelernt.“
        └── Projektion −1:  „Das war ein Rückschlag.“
```

Beide Projektionen sind zulässig, solange sie den Kern nicht verändern. Der
Konflikt entsteht erst, wenn eine Projektion den Kern überschreiben will:

- „Ich habe gar nicht wirklich versagt.“ → Kernmutation, unzulässig.
- „Das war ein Rückschlag, und ich habe etwas gelernt.“ → Koexistenz, zulässig.

## Formale Fassung

Ein appraisal-theoretisches Modell:

$$
\mathcal{A} = \langle E,\; \sigma_1,\; \sigma_2,\; \mathcal{I} \rangle
$$

mit Ereignis $E$, zwei Bewertungen $\sigma_1,\sigma_2 \in \{+1,-1\}$ und der
Invariante $\mathcal{I}$ (der unveränderliche Ereigniskern).

Dissonanz entsteht, wenn

$$
\sigma_1 \neq \sigma_2 \;\land\; \neg \mathrm{Adm}(\sigma_1 \lor \sigma_2)
$$

also wenn die Bewertungen nicht als koexistierende Projektionen, sondern als
konkurrierende Faktenbehauptungen behandelt werden.

## Der therapeutische Punkt

Die Trinärität formalisiert eine Einsicht der kognitiven Verhaltenstherapie
(CBT): **Ein Gedanke ist keine Tatsache.** Der Kern ist die Tatsache; der
Gedanke ist eine Perspektive.

Das Modell erlaubt eine gesunde Haltung:

- Den Kern anerkennen („Es ist passiert.“).
- Die negative Bewertung anerkennen („Es tut weh.“).
- Die positive Bewertung anerkennen („Es lehrt mich etwas.“).
- Keine Bewertung zur alleinigen Wahrheit machen.

Das ist strukturell verwandt mit Achtsamkeitsansätzen und mit der
**Akzeptanz- und Commitment-Therapie** (ACT).

## Ein Werkzeug

```ts
type Appraisal = {
  event: string;
  valence: 1 | -1;
  thought: string;
};

type Integration = {
  core: string;
  appraisals: Appraisal[];
};

const isIntegrated = (i: Integration): boolean =>
  i.appraisals.every((a) => !a.thought.includes('nicht passiert'));
```

Die Funktion ist illustrativ: Integration heißt, alle Bewertungen zuzulassen,
ohne den Kern zu leugnen.

## Grenzen

1. **Klinische Evidenz fehlt.** Das Modell ist konzeptionell, nicht validiert.
   Es ersetzt keine Therapie.
2. **Trauma.** Bei traumatischen Ereignissen ist der Kern oft selbst fragmentiert;
   die einfache Zwei-Ebenen-Struktur reicht nicht.
3. **Emotionale Amplitude.** Die Valenz ist keine bloße Binärheit; Intensität
   braucht eine zusätzliche Dimension.
4. **Kulturelle Kontexte.** Was als „Kern“ gilt, ist kulturell geprägt.

:::warning[Kein Therapieersatz]
Dieses Kapitel ist Philosophie und Formalisierung, keine klinische Anleitung.
Bei psychischen Belastungen ist professionelle Hilfe angezeigt.
:::

## Forschungsfragen

- Lässt sich das Modell in psychologischen Studien operationalisieren?
- Wie verhält es sich zu etablierten Dissonanztheorien (Festinger)?
- Kann ein digitales Tagebuch die Kern/Perspektive-Trennung unterstützen?

→ [Recht & Mediation](/docs/anwendungen/recht-mediation)
→ [Anwendungen — Überblick](/docs/anwendungen/ueberblick)
