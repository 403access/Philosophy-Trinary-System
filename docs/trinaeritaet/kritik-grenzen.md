---
title: Kritik & Grenzen
description: Die stärksten Einwände gegen die Trinärität — und was sie leisten muss, um zu bestehen.
sidebar_position: 8
---

# Kritik & Grenzen

Wissenschaftliche Reife zeigt sich nicht daran, wie gut eine Theorie sich
verteidigt, sondern daran, wie präzise sie ihre eigenen Schwachstellen benennt.
Dieses Kapitel sammelt die stärksten Einwände.

## Einwand 1: Trivialität

> *„Jedes System mit einem Tag und zwei Werten ist trivial konsistent. Du hast
> nur ein Label hinzugefügt.“*

Das ist der ernsthafteste Einwand. Wenn der Kern nur ein Etikett ist, dann ist
die Trinärität lediglich eine Notation für $(k, \sigma)$ — ohne explanatorischen
Mehrwert.

**Antwort:** Der Mehrwert liegt nicht in der Struktur allein, sondern in der
**Invarianz-Bedingung**. Erst $\mathcal{I}$ macht aus der Notation eine Theorie:
Sie sagt, *welche* Perspektiven zulässig sind. Ohne eine inhaltliche Theorie von
$\mathcal{I}$ bleibt der Einwand berechtigt.

**Status:** offen. Die Theorie muss zeigen, dass $\mathcal{I}$ nicht beliebig
wählbar ist.

## Einwand 2: Unterbestimmtheit der Invariante

> *„Wer legt fest, was der Kern ist? Das ist Willkür.“*

Die Invariante $\mathcal{I}$ ist ein **normativer Akt**. In der Physik gibt es
Erhaltungsgrößen; in der Ethik nicht. Wenn $\mathcal{I}$ beliebig ist, ist das
Modell beliebig.

**Antwort:** Die Trinärität behauptet nicht, dass $\mathcal{I}$ objektiv
gegeben ist. Sie behauptet, dass man $\mathcal{I}$ **explizit machen** muss.
Das ist ein methodischer Fortschritt: Statt über „Wahrheit“ zu streiten,
streitet man über eine wohldefinierte Invariante.

**Status:** teilweise beantwortet. Es fehlt eine Theorie der Invariantenwahl.

## Einwand 3: Wahrheitspluralismus

> *„Wenn beide Perspektiven wahr sind, was bedeutet ‚wahr‘ dann noch?“*

Wenn $+1$ und $-1$ beide „wahr“ sind, scheint der Wahrheitsbegriff zu
kollabieren. Das ist der klassische Einwand gegen Relativismus.

**Antwort:** Die Trinärität unterscheidet **zwei Wahrheitsbegriffe**:

1. **Kernwahrheit** — objektiv, invariant.
2. **Perspektivwahrheit** — relativ, aber durch Admissibilität gebunden.

Das ist ein *Pluralismus*, kein Relativismus: Perspektiven sind nicht beliebig,
sondern zulässig oder unzulässig.

**Status:** braucht eine ausgearbeitete Wahrheitstheorie. Derzeit ist die
Unterscheidung programmatisch.

## Einwand 4: Falsifizierbarkeit

> *„Welche Beobachtung würde die Theorie widerlegen?“*

Eine Theorie, die alles erklärt, erklärt nichts. Wenn jede Perspektive
„zulässig“ sein kann, ist die Theorie nicht falsifizierbar.

**Antwort:** Die Theorie ist falsifizierbar, wenn man konkrete Invarianten
angibt. Beispiel: In einem verteilten System ist $\mathcal{I}$ der Event-Log.
Wenn lokale Sichten konvergieren, ohne den Log zu verändern, stützt das die
Theorie; wenn sie ihn verändern müssen, widerlegt es sie.

**Status:** Die Falsifikationskriterien sind in
[Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit) ausgearbeitet.

## Einwand 5: Kategorienfehler

> *„Ontologie und Epistemologie werden vermischt.“*

Der Kern ist ontologisch (was ist der Fall), die Projektionen sind epistemisch
(wie wird es wahrgenommen). Ist es zulässig, beides in einem formalen Objekt zu
vereinen?

**Antwort:** Die Trinärität *trennt* beide Ebenen gerade. Der Vorwurf trifft
eher flache Modelle, die Fakt und Bewertung vermischen. Die Trinärität ist die
Antwort auf den Kategorienfehler, nicht seine Wiederholung.

**Status:** verteidigbar, aber die Trennung muss formal sauber bleiben.

## Einwand 6: Skalierung

> *„Was passiert bei $n$ Akteuren und $n$ Perspektiven?“*

Die Definition erlaubt beliebig viele Perspektiven, aber die Invarianz-Prüfung
wird teuer. Bei $n$ Akteuren muss man $n$ Lesarten gegen den Kern prüfen.

**Antwort:** Das ist ein Implementierungsproblem, kein fundamentales. Es gibt
effiziente Verfahren (Hashing, Merkle-Bäume, CRDTs).

**Status:** technisch lösbar.

## Einwand 7: Kern-Revision

> *„Was, wenn sich der Kern legitim ändert?“*

Die Theorie behandelt den Kern als invariant. Aber Fakten ändern sich: Eine
Brücke wird repariert, ein Gesetz wird geändert.

**Antwort:** Man braucht eine **Theorie der Kern-Revision**: Wann ist eine
Änderung des Kerns legitim? Das ist ein offenes Forschungsfeld.

**Status:** offen und wichtig.

## Einwand 8: Der normative Kern

> *„Die Invarianz-Bedingung ist selbst normativ — sie setzt voraus, was erhalten
> werden soll.“*

Ja. Die Trinärität ist keine wertfreie Logik. Sie ist ein **normatives
Modell**. Das ist kein Fehler, aber es muss explizit sein.

**Status:** anerkannt.

## Was die Theorie leisten muss

Um zu bestehen, muss die Trinärität mindestens zeigen:

1. **Nicht-Trivialität:** Es gibt Invarianten, die nicht beliebig sind.
2. **Anwendbarkeit:** Mindestens eine Domäne, in der das Modell bessere
   Vorhersagen oder Entscheidungen liefert als Alternativen.
3. **Falsifizierbarkeit:** Klare Kriterien, wann die Theorie scheitert.
4. **Anschlussfähigkeit:** Formale Verbindung zu etablierten Systemen
   (Mereologie, Modallogik, Supervaluationismus).
5. **Implementierbarkeit:** Ein lauffähiger Prototyp, der die Struktur
   demonstriert.

Punkte 4 und 5 sind bereits angelegt. Punkte 1–3 sind die eigentliche Arbeit.

## Fazit

Die Trinärität ist **kein fertiges System**. Sie ist ein
Forschungsprogramm mit einer klaren Architektur und offenen Fundamenten. Genau
das macht sie wissenschaftlich interessant — und angreifbar.

> Eine Theorie, die nicht scheitern kann, ist keine Theorie.

→ [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit)
→ [Offene Fragen](/docs/forschung/offene-fragen)
