---
title: Einführung in die Trinärität
description: Ein invarianter Kern und zwei koexistierende Projektionen — die Grundidee.
sidebar_position: 1
---

# Einführung in die Trinärität

Die **Trinärität** ist der Versuch, ein altes philosophisches Motiv — die Dreiheit
von These, Antithese und Vermittlung — in ein präzises, überprüfbares Modell zu
übersetzen. Ihr Kern ist eine architektonische Entscheidung:

> **Fakt und Bewertung werden auf zwei Ebenen getrennt.**

Das klingt bescheiden, hat aber weitreichende Folgen. Denn die meisten
Konflikte — in der Logik, in Datenbanken, in der KI, zwischen Menschen — sind
keine Faktenkonflikte, sondern **Perspektivkonflikte**, die fälschlich als
Faktenkonflikte behandelt werden.

## Das Problem: Kollaps der Perspektive

In einem flachen binären System gibt es nur zwei Werte: wahr und falsch. Wenn
zwei Akteure denselben Sachverhalt gegensätzlich bewerten, entsteht formal ein
Widerspruch:

$$
A \;\land\; \neg A
$$

Das System hat drei Möglichkeiten:

1. Es **bricht zusammen** (explosive Inkonsistenz).
2. Es **erzwingt** eine willkürliche Entscheidung für eine Seite.
3. Es **verliert** eine der beiden Perspektiven.

Alle drei sind unbefriedigend. Die Trinärität schlägt eine vierte Möglichkeit
vor: **Beide Perspektiven bleiben gültig, weil sie sich nicht auf derselben
Ebene wie der Fakt befinden.**

## Die Architektur

```text
                 ┌─────────────────────────────┐
   Wahrnehmung   │   +1            −1          │   gut / schlecht
                 └────────────┬────────────────┘
                              │  Projektion
                 ┌────────────┴────────────────┐
   Kern          │             0               │   invariante Grundwahrheit
                 └─────────────────────────────┘
```

- **Der Kern ($0$)** ist die invariante Grundwahrheit: *Was ist der Fall?*
- **Die Projektionen ($+1$, $-1$)** sind Wahrnehmungen: *Wie wirkt es — gut
  oder schlecht?*
- **Die Invarianz-Bedingung** prüft: *Verändert eine Wahrnehmung den Kern?*

Solange eine Projektion den Kern nur *liest* und nicht *überschreibt*, bleibt
sie wahr — auch wenn sie der anderen Projektion widerspricht.

## Ein Beispiel

Der Sachverhalt: *„Die Brücke ist gesperrt.“*

| Akteur | Bewertung | Aussage | Zulässig? |
| --- | --- | --- | --- |
| Kern | $0$ | Die Brücke ist gesperrt. | — |
| Alice | $-1$ | Das ist schlecht: Pendler verlieren Zeit. | ✅ ja |
| Bob | $+1$ | Das ist gut: Die Altstadt wird ruhiger. | ✅ ja |
| Carol | $-1$ | Die Brücke ist *offen*. | ❌ nein |

Alice und Bob widersprechen sich in der **Bewertung**, nicht im **Fakt**. Carol
hingegen verändert den Kern — sie behauptet etwas anderes über die Welt. Genau
diese Unterscheidung macht das Modell operativ.

## Die zwei Ebenen sind binär verschachtelt

Ein zentraler Punkt: Die Trinärität ist **keine** mysteriöse dritte
Grundkategorie. Sie lässt sich als **binäre Verschachtelung** verstehen:

- Ebene 1: Ist die Aussage eine Kern-Aussage oder eine Perspektive?
- Ebene 2: Wenn Perspektive — positiv oder negativ?

Als zwei Bits:

| Zustand | Bit 1 (Ebene) | Bit 2 (Valenz) | Wert |
| --- | --- | --- | --- |
| Kern | 0 | – | $0$ |
| Perspektive positiv | 1 | 0 | $+1$ |
| Perspektive negativ | 1 | 1 | $-1$ |

Damit läuft die Theorie auf **gewöhnlicher binärer Hardware**. Sie ist eine
Architektur der *Bedeutung*, nicht der Transistoren.

→ [Binäre Verschachtelung im Detail](/docs/trinaeritaet/binaere-verschachtelung)

## Die offene Frage: Ist der Kern selbst binär?

Eine philosophisch entscheidende Weggabelung:

- **Lesart A — singulärer Kern:** Der Kern ist ein unveränderliches Faktum $F$.
  Die Projektionen spalten es in zwei Lesarten. Das ist eine echte
  *Projektionsgeometrie* (das Prisma-Bild).
- **Lesart B — binärer Kern:** Der Kern hat selbst einen Wahrheitswert
  $\{W, F\}$, und darüber liegt die Valenz $\{+,-\}$. Das ergibt eine
  $2 \times 2$-Struktur, die zur Trinärität quotientiert wird.

Beide Lesarten sind formal realisierbar. Welche trägt, ist eine der zentralen
offenen Fragen des Programms.

→ [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)

## Was die Theorie nicht behauptet

Um Missverständnisse zu vermeiden:

- Sie behauptet **nicht**, dass es keine objektive Wahrheit gibt. Im Gegenteil:
  Der Kern ist die objektive Instanz.
- Sie behauptet **nicht**, dass alle Perspektiven gleich gut sind. Zulässigkeit
  ist eine echte Bedingung.
- Sie behauptet **nicht**, dass Widersprüche generell harmlos sind. Nur
  *Perspektivwidersprüche* werden entkoppelt.
- Sie ist **keine** fertige Logik. Sie ist ein Forschungsprogramm mit offenen
  Definitionen.

## Der nächste Schritt

Die entscheidende offene Definition ist die **Projektions- und
Rückprojektionsfunktion**: die mathematische Regel, die prüft, ob eine
Wahrnehmung den Kern verändert.

→ [Formale Definition](/docs/trinaeritaet/formale-definition)
→ [Invarianz-Bedingung](/docs/trinaeritaet/invarianz)

## Weiterlesen

- [Formale Definition](/docs/trinaeritaet/formale-definition)
- [Verwandte Konzepte](/docs/trinaeritaet/verwandte-konzepte)
- [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
