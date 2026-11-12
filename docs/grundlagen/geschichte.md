---
title: Geschichte
description: Von Frege und Russell über den Wiener Kreis bis zu Kripke, Lewis und Montague.
sidebar_position: 2
---

# Geschichte der mathematischen Philosophie

Die Disziplin hat ihre Wurzeln im späten 19. und frühen 20. Jahrhundert, als
Logiker und Philosophen versuchten, die Grundlagen der Mathematik und der
Sprache zu präzisieren. Ihre Geschichte ist eine Abfolge von **Präzisierungen**
— und von Krisen, die neue Präzisierungen erzwungen haben.

## Zeitleiste

```text
1879  Frege, Begriffsschrift            → moderne Prädikatenlogik
1884  Frege, Grundlagen der Arithmetik  → Logizismus
1901  Russells Paradoxie                → Krise der Mengenlehre
1903  Russell, Principles of Mathematics
1910  Whitehead & Russell, Principia Mathematica → Typentheorie
1921  Leśniewski, Mereologie            → alternative Ontologie
1929  Wiener Kreis (Mach, Schlick, Carnap, Neurath)
1931  Gödel, Unvollständigkeitssätze    → Grenzen der Formalisierung
1934  Carnap, Logische Syntax der Sprache
1959  Kripke, Semantik der Modallogik   → mögliche Welten
1970  Montague, universelle Grammatik
1973  Lewis, Counterfactuals
1982  Kripke, Wittgenstein on Rules
2000+ Neuro-symbolische KI, VSA, Lean/Coq
```

## Logizismus: Frege und Russell

**Gottlob Frege** (1848–1925) entwickelte in der *Begriffsschrift* (1879) die
erste vollständige Prädikatenlogik. Sein Programm war der **Logizismus**: Die
Arithmetik soll auf reine Logik zurückgeführt werden, sodass mathematische
Wahrheiten analytisch sind.

Frege definierte die natürliche Zahl über den Begriff der *Anzahl*:

$$
n = \{F \mid \text{es gibt genau } n \text{ Dinge, die unter } F \text{ fallen}\}
$$

**Bertrand Russell** entdeckte 1901, dass dieses Programm in eine Paradoxie
führt. Betrachte die Menge aller Mengen, die sich nicht selbst enthalten:

$$
R = \{x \mid x \notin x\}
$$

Frage: Ist $R \in R$? Beide Antworten führen zum Widerspruch. Russells
**Typentheorie** (in *Principia Mathematica*, 1910) löste das Problem durch eine
Hierarchie von Typen: Eine Menge kann nur Elemente *niedrigeren* Typs enthalten.

:::note[Die Lehre]
Selbst die strengste Formalisierung schützt nicht vor Widersprüchen. Jedes
formale System braucht eine explizite Metatheorie — genau der Gedanke, der
später zur Trinärität führt: *Kern und Perspektive müssen getrennt sein.*
:::

## Der Wiener Kreis und Carnap

Der **Wiener Kreis** (ab 1929) um Rudolf Carnap, Moritz Schlick und Otto
Neurath verfolgte ein radikales Programm: Philosophie sollte zur
*Wissenschaftslogik* werden. Metaphysische Sätze galten als Scheinprobleme, weil
sie sich nicht verifizieren lassen.

**Carnap** (*Logische Syntax der Sprache*, 1934) zeigte, dass formale Sprachen
selbst Gegenstand der Untersuchung werden können: Man kann Syntax und Semantik
trennen und die Wahl eines Sprachrahmens explizit machen. Das ist die frühe
Form der Einsicht, dass **Struktur** und **Interpretation** verschiedene Ebenen
sind.

## Die Wende zur Modal- und Intensional-Logik

Die klassische Logik behandelt Wahrheit als zeitlos und kontextunabhängig. Das
reicht nicht für Begriffe wie *Notwendigkeit*, *Wissen* oder *Pflicht*.

**Saul Kripke** lieferte 1959 mit der **Kripke-Semantik** den entscheidenden
Formalismus: Ein modaler Ausdruck wird relativ zu einer Menge möglicher Welten
und einer Erreichbarkeitsrelation bewertet.

$$
\Box p \text{ ist wahr in } w \iff \forall v\,(wRv \Rightarrow p \text{ ist wahr in } v)
$$

**David Lewis** (*Counterfactuals*, 1973) und **Richard Montague** (1970)
erweiterten dies zu einer intensionalen Semantik, die auch natürliche Sprache
behandelbar machte. Damit war es möglich, philosophische Modalitäten
mathematisch streng zu behandeln.

## Moderne Schnittstellen

Heute berührt die mathematische Philosophie direkt die Informatik und die
künstliche Intelligenz:

- **Vektor-symbolische Architekturen (VSA)** und *Hyperdimensional Computing*
  fragen, wie symbolische Strukturen in hochdimensionalen Vektorräumen
  abgebildet werden können.
- **Automatisierte Theorembeweiser** wie Lean und Coq prüfen philosophische
  Argumente — vom ontologischen Gottesbeweis Gödels bis zu ethischen Dilemmata —
  auf logische Konsistenz.
- **Formale Epistemologie** modelliert rationale Akteure mit Credences und
  Entscheidungsregeln.

→ [Die Trinäritäts-Theorie](/docs/trinaeritaet/einfuehrung) setzt genau an
dieser Schnittstelle an: Sie verbindet die Trennung von Kern und Perspektive
(Carnap/Kripke) mit der Idee koexistierender, aber invarianzgebundener
Projektionen (Supervaluationismus, Bilateralismus).

## Weiterlesen

- [Formale Logik](/docs/grundlagen/formale-logik)
- [Mereologie](/docs/grundlagen/mereologie)
- [Modallogik](/docs/grundlagen/modalitaet)
