---
title: Anwendungen — Überblick
description: Fünf Domänen, in denen die Trennung von Kern und Perspektive operativ wird.
sidebar_position: 1
---

# Anwendungen — Überblick

Die Trinärität ist zunächst eine philosophische Architektur. Ihr Wert zeigt
sich aber erst, wenn sie in konkreten Domänen **etwas leistet**. Dieses Kapitel
skizziert fünf Anwendungsfelder.

## Die gemeinsame Struktur

In allen Anwendungen wiederholt sich dasselbe Muster:

```text
   unveränderlicher Kern  +  mehrere zulässige Perspektiven
   ─────────────────────     ──────────────────────────────
   Weltmodell / Event-Log     Agenten / Clients / Deuter
```

Die Frage ist immer: *Welche Perspektive verändert den Kern, welche nicht?*

## Die fünf Felder

| Feld | Kern | Perspektiven | Nutzen |
| --- | --- | --- | --- |
| [Neuro-symbolische KI](/docs/anwendungen/neuro-symbolische-ki) | Faktenmodell | Wertungen, Kontexte | Urteilskraft statt Halluzination |
| [Verteilte Systeme](/docs/anwendungen/verteilte-systeme) | Event-Log | lokale Sichten | Konflikte ohne Überschreiben |
| [Semantische Kompression](/docs/anwendungen/semantische-kompression) | minimaler Sinn | Lesarten/Offsets | verlustfreie Kompression |
| [Recht & Mediation](/docs/anwendungen/recht-mediation) | unstreitige Fakten | Parteipositionen | echte vs. scheinbare Konflikte |
| [Kognition](/docs/anwendungen/kognition) | Ereignis | Emotionen/Deutungen | Dissonanz integrieren |

## Der gemeinsame Nutzen

In allen Fällen löst die Trinärität dasselbe Problem: **Kontextkollaps**.

Klassische Systeme vermischen Fakt und Bewertung auf einer Ebene. Sobald zwei
Bewertungen kollidieren, entsteht ein scheinbarer Widerspruch. Die Trinärität
entkoppelt beide Ebenen und macht den Widerspruch zu einer **zulässigen
Perspektivendifferenz**.

:::caution[Keine Wunderwaffe]
Die Anwendungen sind **konzeptionelle Demonstrationen**, keine validierten
Produkte. Jede Domäne braucht ihre eigene Invariante $\mathcal{I}$ — und die ist
oft der schwierigste Teil.
:::

## Wie man eine Anwendung baut

Ein wiederkehrendes Vorgehen:

1. **Kern identifizieren.** Welche Fakten sind unstreitig und unveränderlich?
2. **Invariante wählen.** Woran erkennt man, dass der Kern unverändert ist?
3. **Perspektiven modellieren.** Wer liest den Kern, und mit welcher Valenz?
4. **Admissibilität prüfen.** Welche Lesarten verändern den Kern?
5. **Konflikte klassifizieren.** Faktenstreit vs. Perspektivstreit.

Dieses Vorgehen ist domänenunabhängig. Es ist die methodische Essenz der
Trinärität.

## Weiterlesen

- [Neuro-symbolische KI](/docs/anwendungen/neuro-symbolische-ki)
- [Verteilte Systeme](/docs/anwendungen/verteilte-systeme)
- [Implementierung](/docs/implementierung/architektur)
