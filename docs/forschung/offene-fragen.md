---
title: Offene Fragen
description: Die priorisierten Probleme, an denen das Forschungsprogramm arbeitet.
sidebar_position: 5
---

# Offene Fragen

Ein Forschungsprogramm ist nur so gut wie seine offenen Fragen. Diese Liste ist
nach Priorität geordnet.

## Priorität 0 — Fundament

### F0.1: Welche Invarianten sind zulässig?

Die Invarianz-Bedingung ist nur so gut wie die Wahl von $\mathcal{I}$. Braucht
es eine inhaltliche Theorie der Invarianten, oder reicht ein technisches Kriterium
(Hash, Konsistenz)?

**Warum kritisch:** Ohne Antwort ist die Theorie beliebig (siehe
[Kritik, Einwand 2](/docs/trinaeritaet/kritik-grenzen)).

### F0.2: Was ist „Perspektivwahrheit“?

Die Definition $\mathrm{True}(p) \Leftrightarrow \mathrm{Adm}(p)$ ist formal,
aber philosophisch unterbestimmt. Ist das ein Wahrheitsbegriff, ein
Rechtfertigungsbegriff, oder beides?

**Warum kritisch:** Der Wahrheitsbegriff ist der Kern der philosophischen
Behauptung.

### F0.3: Ist das System konsistent?

Der **Kernkalkül** ist in Lean 4 maschinell geprüft (`formal/`, siehe
[Formale Verifikation](/docs/forschung/formale-verifikation)). Offen bleibt die
Konsistenz *konkreter Invarianten* in einer Domäne sowie die Konvergenz der
verteilten Implementierung.

**Warum kritisch:** F4-Kriterium der [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit).

## Priorität 1 — Struktur

### F1.1: Singulärer oder binärer Kern?

Lesart A (singulärer Kern) vs. Lesart B (binärer Kern). Welche trägt?

→ [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)

### F1.2: Wie viele Perspektiven?

Die Definition erlaubt $n$ Perspektiven, aber die Theorie ist für zwei
entworfen. Was bedeutet eine dritte, vierte, $n$-te Perspektive?

### F1.3: Dynamik und Kern-Revision

Wann darf sich der Kern legitim ändern? Braucht man eine temporale Logik der
Kern-Revision?

### F1.4: Metrik und Urteilskraft

Für Anwendungen (VSA, Mediation) braucht man eine Distanz
$d(\rho(k),k)$. Welche Metrik ist philosophisch sinnvoll?

## Priorität 2 — Anschluss

### F2.1: Verhältnis zur Mereologie

Ist die Trinärität eine echte mereologische Theorie oder nur eine Analogie?

→ [Mereologie & Trinärität](/docs/trinaeritaet/mereologie-verbindung)

### F2.2: Verhältnis zur Modallogik

Lässt sich die Perspektive als modaler Operator rekonstruieren? Was gewinnt man
gegenüber Kripke-Semantiken?

### F2.3: Verhältnis zur Wahrscheinlichkeit

Ist die Valenz ein probabilistisches Konzept? Oder kategorial davon verschieden?

## Priorität 3 — Empirie

### F3.1: Benchmarks

Welche Domäne liefert den ersten überzeugenden Benchmark?

### F3.2: Kognitive Validierung

Lässt sich das Modell psychologisch testen (Dissonanz, Perspektivübernahme)?

### F3.3: Pädagogik

Kann die Kern/Perspektive-Trennung Lernende unterstützen, Widersprüche
auszuhalten?

## Was *nicht* offen ist

Einige Fragen sind bereits entschieden:

- Die Trinärität ist **keine** mehrwertige Logik im Sinne Łukasiewicz'.
- Sie ist **kein** Relativismus (die Invarianzbedingung ist echt).
- Sie ist **keine** Parakonsistenz (Widersprüche werden nicht toleriert, sondern
  Ebenen getrennt).
- Sie ist **keine** Hardware-Technologie (sie läuft auf binärer Hardware).

## Wie es weitergeht

Die Reihenfolge ist bewusst:

1. F0.3 (Konsistenz) — für den Kernkalkül erledigt (Lean 4,
   [Formale Verifikation](/docs/forschung/formale-verifikation)); offen bleibt
   die Konsistenz konkreter Invarianten.
2. F0.1 (Invarianten) — ohne inhaltliche Invariante ist die Theorie leer.
3. F0.2 (Wahrheit) — ohne Wahrheitsbegriff ist die Philosophie unklar.
4. F3.1 (Benchmark) — ohne Empirie ist die Theorie nicht gestützt.

→ [Roadmap](/roadmap)
→ [Forschungsprogramm](/docs/forschung/forschungsprogramm)
