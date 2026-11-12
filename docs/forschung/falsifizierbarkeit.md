---
title: Falsifizierbarkeit
description: Unter welchen Bedingungen die Trinärität scheitert — und warum das ihre Stärke ist.
sidebar_position: 3
---

# Falsifizierbarkeit

Wissenschaft sucht nicht nach Bestätigung, sondern nach den Punkten, an denen
eine Theorie bricht. Dieses Kapitel formuliert die Bedingungen, unter denen die
Trinärität **widerlegt** wäre.

> Eine Theorie, die nicht scheitern kann, ist keine Theorie. — Karl Popper

## Fünf Widerlegungskriterien

### F1 — Vakuum-Kriterium

**Wenn** sich jede beliebige Invariante $\mathcal{I}$ wählen lässt und das
Modell dadurch *alles* als zulässig klassifiziert, **dann** ist die Theorie
trivial und explanatorisch wertlos.

**Test:** Man konstruiert zwei widersprüchliche Invarianten und prüft, ob das
Modell beide akzeptiert. Wenn ja, ist es beliebig.

### F2 — Inkohärenz-Kriterium

**Wenn** es keine Invariante gibt, unter der zwei entgegengesetzte Perspektiven
koexistieren können, **dann** ist die Grundbehauptung falsch.

**Test:** Man sucht ein Minimalbeispiel, in dem $+1$ und $-1$ *notwendig*
denselben Kern verändern. Wenn jedes solche Beispiel zur Kernmutation führt,
bricht die Theorie.

### F3 — Nutzlosigkeits-Kriterium

**Wenn** die Trinärität in *keiner* Domäne bessere Ergebnisse liefert als eine
naive Baseline (z. B. einfache Tags, Wahrscheinlichkeiten, CRDT ohne
Interpretationsschicht), **dann** fehlt empirische Stützung.

**Test:** Benchmark in mindestens einer Domäne (verteiltes System, Mediation,
LLM-Evaluation).

### F4 — Konsistenz-Kriterium

**Wenn** die formale Definition inkonsistent ist — also einen Satz und seine
Negation ableitet — **dann** ist das System unbrauchbar.

**Test:** Formalisierung in Lean/Coq; maschinelle Konsistenzprüfung.

**Status:** Für den Kernkalkül **erledigt** (Lean 4, [`formal/`](https://github.com/403access/Philosophy-Trinary-System/tree/main/formal)).
Der Build läuft ohne `sorry` und ohne Warnungen; geprüft sind Träger,
Admissibilität, Auswertung, Nicht-Kollaps sowie die Grenzfälle konstanter und
injektiver Invarianten. Details und die gefundenen Korrekturen stehen in
[Formale Verifikation](/docs/forschung/formale-verifikation).

:::note[Was damit nicht gezeigt ist]
F4 ist ein Konsistenzkriterium, kein Anwendbarkeitskriterium. Der Beweis zeigt:
*Wenn* man die Definitionen akzeptiert, ist das Modell konsistent. Er zeigt
nicht, dass die Definitionen die richtigen sind.
:::

### F5 — Wahrheits-Kriterium

**Wenn** der Begriff der „Perspektivwahrheit“ auf einen bloßen Relativismus
zusammenfällt (jede Perspektive ist wahr, weil sie subjektiv ist), **dann**
verliert der Wahrheitsbegriff seine Funktion.

**Test:** Man prüft, ob unzulässige Perspektiven tatsächlich abgewiesen werden.
Wenn nie etwas abgewiesen wird, ist der Wahrheitsbegriff leer.

## Empirische Testdesigns

### Test 1: Verteiltes System

Zwei Replikate erzeugen lokale Sichten auf denselben Event-Log. Die Hypothese:
Die trinäritische Klassifikation erkennt Perspektivkonflikte, die ein
Last-Write-Wins-System fälschlich als Datenkonflikt behandelt.

**Metrik:** Rate korrekt klassifizierter Konflikte, Datenverlust, Latenz.

### Test 2: Mediation

Studienteilnehmer bewerten einen fiktiven Fall. Die Hypothese: Die
Kern/Perspektive-Trennung erhöht die Einigungsrate gegenüber einer
positionsbasierten Verhandlung.

**Metrik:** Einigungsrate, Zufriedenheit, wahrgenommene Fairness.

### Test 3: LLM-Evaluation

Ein Sprachmodell erhält kontroverse Aussagen. Die Hypothese: Ein
trinäritisch strukturierter Prompt reduziert Fakten-Halluzinationen bei
gleichzeitiger Beibehaltung normativer Perspektiven.

**Metrik:** Faktenrichtigkeit, Perspektivabdeckung, Konsistenz.

## Was die Theorie bereits leistet

| Kriterium | Status |
| --- | --- |
| F1 Vakuum | ⚠️ offen — Invariantenwahl muss begründet werden |
| F2 Inkohärenz | ✅ Nicht-Kollaps-Satz (maschinell geprüft) |
| F3 Nutzlosigkeit | ⚠️ Prototyp vorhanden, Evaluation ausstehend |
| F4 Konsistenz | ✅ Kernkalkül in Lean 4 geprüft (`formal/`) |
| F5 Wahrheit | ⚠️ Wahrheitstheorie programmatisch |

## Die ehrliche Bilanz

Die Theorie ist derzeit **nicht** falsifiziert — aber sie ist auch noch nicht
hinreichend getestet. Der wichtigste nächste Schritt ist F3: eine Domäne, in der
das Modell messbar besser ist als die Baseline.

:::tip[Wissenschaftliche Tugend]
Es ist besser, die eigene Theorie früh und präzise anzugreifen, als sie spät und
unscharf verteidigen zu müssen.
:::

→ [Offene Fragen](/docs/forschung/offene-fragen)
→ [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
