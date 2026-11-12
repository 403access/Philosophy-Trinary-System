---
title: Abgrenzung & USP
description: Was die Trinärität von bestehenden Modellen unterscheidet — und was nicht.
sidebar_position: 7
---

# Abgrenzung & USP

Eine Theorie ist nur so gut wie ihre Abgrenzung. Dieses Kapitel sagt präzise,
was an der Trinärität **neu** ist — und was nicht.

## Die Vergleichstabelle

| Dimension | Klassische / etablierte Modelle | Trinärität |
| --- | --- | --- |
| Status des Zentrums ($0$) | oft „undefiniert“, „unbekannt“ (Kleene) oder „mittlerer Grad“ (Łukasiewicz) | **invariante Grundwahrheit** als ontologischer Anker |
| Status der Pole ($\pm1$) | schließen sich gegenseitig aus (Widerspruch) | **Wahrnehmungsprojektionen**, die koexistieren und beide wahr sind |
| Gültigkeitsbedingung | statische Wahrheitstabellen | **Invarianz-Bedingung**: wahr, solange der Kern unverändert bleibt |
| Struktur | flach (drei gleichrangige Werte) | **hierarchisch / verschachtelt** (binäre Wahrnehmungsschicht auf einem Grundwert) |
| Implementierung | eigene Logik / Hardware | **binär verschachtelt**, auf Standardhardware lauffähig |

## Was neu ist

Drei Dinge, die in dieser Kombination in der etablierten Literatur nicht
existieren:

### 1. Der Kern als invarianter ontologischer Anker

Andere Systeme behandeln den dritten Wert als *epistemische Lücke*
(Unbestimmtheit, Vagheit, Fehler). Die Trinärität behandelt ihn als
*ontologische Instanz*: das, was der Fall ist.

### 2. Koexistierende, aber invarianzgebundene Perspektiven

Der Supervaluationismus erlaubt mehrere Präzisierungen, aber er hat keine
Theorie der Valenz. Der Bilateralismus hat Akzeptanz/Ablehnung, aber keinen
Weltkern. Die Trinärität verbindet beides.

### 3. Die Invarianz-Bedingung als expliziter Operator

Das ist der eigentliche technische Beitrag. Andere Ansätze haben implizite
Konsistenzbedingungen; die Trinärität macht sie zu einer berechenbaren
Funktion $\mathrm{Adm}(p)$.

## Was nicht neu ist

Ehrlichkeit gehört zur Wissenschaft. Folgendes ist **nicht** neu:

- Die Idee einer Triade (Peirce, Hegel, Neuplatonismus).
- Die Idee möglicher Welten und Perspektiven (Leibniz, Kripke).
- Die Idee mehrerer zulässiger Präzisierungen (Supervaluationismus).
- Die Idee relationaler Wahrheit (Rovelli, Quantenlogik).
- Die Idee binärer Verschachtelung (jede Baumstruktur).
- Die Idee, Widersprüche zu tolerieren (Parakonsistenz).

Die Trinärität ist eine **Neukombination** bekannter Bausteine — hoffentlich zu
etwas Neuem.

## Der USP in einem Satz

> Die Trinärität ist ein formales Modell, in dem ein invarianter Kern zwei
> entgegengesetzte, aber gleichermaßen zulässige Perspektiven trägt — und in dem
> Zulässigkeit als berechenbare Invariantzprüfung definiert ist.

## Die entscheidende offene Definition

Der ursprüngliche Entwurf hat eine Lücke benannt, die auch nach der
Formalisierung bleibt: die **Projektions- und Rückprojektionsfunktion**.

Also die genaue Regel, die prüft: *„Verändert Wahrnehmung $P$ den Kern $K$ —
ja oder nein?“*

In [Formale Definition](/docs/trinaeritaet/formale-definition) haben wir sie als
$\mathrm{Adm}(p) \Leftrightarrow \mathcal{I}(\rho(k))=\mathcal{I}(k)$ gefasst.
Aber das ist nur eine **Schema-Definition**. Die inhaltliche Arbeit — *welche*
Invariante in *welcher* Domäne gilt — bleibt offen.

Das ist kein Makel. Es ist der Punkt, an dem die Theorie entweder trägt oder
bricht.

## Abgrenzung zur Setun

Ein wichtiger historischer Kontrast: Der sowjetische Ternär-Computer **Setun**
(1958) versuchte, Trinärität auf der **Hardware-Ebene** zu erzwingen — drei
stabile Spannungsniveaus. Das scheiterte an der Ökonomie der binären
Siliziumindustrie.

Die Trinärität setzt auf der **semantischen Ebene** an. Sie ist eine
Architektur der Wissensrepräsentation, die auf binärer Hardware läuft.

> Die Setun hat die Trinärität in den Kupferdraht geprügelt. Die Trinärität
> gehört in die Bedeutungsschicht.

→ [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)

## Weiterlesen

- [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
- [Falsifizierbarkeit](/docs/forschung/falsifizierbarkeit)
- [Paper-Outline](/docs/forschung/paper-outline)
