---
slug: warum-trinaeritaet
title: Warum Trinärität? Ein Problem und eine Architektur
authors: [research]
tags: [trinaeritaet, formalisierung]
date: 2026-11-01
description: Der Ausgangspunkt des Forschungsprogramms — und warum ein dritter Wert allein noch keine Theorie ist.
---

# Warum Trinärität?

Der Ausgangspunkt ist ein alltägliches Phänomen: Zwei Menschen beschreiben
denselben Sachverhalt und kommen zu entgegengesetzten Bewertungen. Klassisch
behandeln wir das als Streit über die Wahrheit. Oft ist es aber ein Streit über
die **Perspektive**.

{/* truncate */}

## Das Problem

Ein flaches binäres System kennt nur zwei Zustände. Wenn zwei Akteure
denselben Fakt gegensätzlich bewerten, entsteht formal ein Widerspruch:

$$
A \land \neg A
$$

Das System hat drei unbefriedigende Auswege: Es bricht zusammen, es erzwingt
eine Entscheidung, oder es verliert eine Perspektive.

## Die Architektur

Die Trinärität schlägt eine vierte Möglichkeit vor: **Trennung der Ebenen**.

- Der **Kern** ($0$) ist die invariante Grundwahrheit.
- Die **Projektionen** ($\pm 1$) sind Bewertungen.
- Die **Invarianz-Bedingung** prüft, ob eine Bewertung den Kern verändert.

Solange eine Projektion den Kern nur liest, bleibt sie gültig — auch wenn sie
der anderen Projektion widerspricht.

## Warum das mehr ist als ein dritter Wert

Ein dritter Wahrheitswert allein wäre nur eine neue Notation. Der entscheidende
Beitrag ist die **Admissibilitätsbedingung**:

$$
\mathrm{Adm}(p) \iff \mathcal{I}(\rho(k)) = \mathcal{I}(k)
$$

Erst diese Bedingung macht aus der Struktur eine Theorie. Sie sagt, *welche*
Perspektiven zulässig sind — und welche den Kern verfälschen.

## Was noch fehlt

Die Theorie ist ein Programm, kein Ergebnis. Die entscheidende offene Frage ist
die Wahl der Invariante $\mathcal{I}$: Wer legt fest, was erhalten bleiben muss?

→ [Formale Definition](/docs/trinaeritaet/formale-definition)
→ [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
