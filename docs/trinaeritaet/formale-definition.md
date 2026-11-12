---
title: Formale Definition
description: Axiome, Träger, Projektionen und die Admissibilitätsbedingung der Trinärität.
sidebar_position: 2
---

# Formale Definition

Dieses Kapitel macht die Trinärität explizit. Es ist bewusst schlank gehalten:
Ein gutes formales System zeichnet sich nicht durch viele Definitionen aus,
sondern durch wenige, die viel tragen.

:::caution[Status]
Die folgende Formalisierung ist **v0.1**. Sie ist konsistent konstruiert, aber
nicht als kanonisch zu betrachten. Offene Stellen sind markiert.
:::

:::tip[Maschinegeprüft]
Definitionen, Admissibilität und der Nicht-Kollaps-Satz sind in Lean 4
formalisiert und mit `lake build` geprüft. Die Referenzimplementierung liegt in
[`formal/`](https://github.com/403access/Philosophy-Trinary-System/tree/main/formal);
eine Übersicht der Sätze und Grenzen gibt
[Formale Verifikation](/docs/forschung/formale-verifikation).
:::

## 1. Der trinäre Träger

**Definition 1 (Träger).** Der trinäre Träger ist die Menge

$$
T := \{-1,\; 0,\; +1\}
$$

mit dem ausgezeichneten Zentrum $0$ und der Involution $\nu : T \to T$,

$$
\nu(+1) = -1, \qquad \nu(-1) = +1, \qquad \nu(0) = 0.
$$

$\nu$ ist die **Negation der Perspektive**: Sie kehrt die Valenz um, lässt aber
das Zentrum fest.

> Wichtig: $T$ ist **kein** Wahrheitswertraum im Sinne der Łukasiewicz-Logik.
> $0$ bedeutet hier nicht „unbestimmt“, sondern „Kern“.

## 2. Der Kern

**Definition 2 (Kernrahmen).** Ein Kernrahmen ist ein Tripel

$$
\mathfrak{K} = \langle K,\; \mathcal{I},\; \equiv_{\mathcal{I}} \rangle
$$

wobei

- $K$ eine Menge von Weltzuständen (Fakten) ist,
- $\mathcal{I} : K \to I$ eine Invariante in einen Invariantenraum $I$ abbildet,
- $k \equiv_{\mathcal{I}} k' :\Longleftrightarrow \mathcal{I}(k) = \mathcal{I}(k')$.

Die Invariante $\mathcal{I}$ ist das, was **erhalten bleiben muss**. Beispiele:

| Domäne | $K$ | $\mathcal{I}(k)$ |
| --- | --- | --- |
| Datenbank | Zustand des Event-Logs | Hash / Versionsvektor |
| Recht | festgestellter Sachverhalt | Menge der unstreitigen Fakten |
| Physik | Systemzustand | Erhaltungsgrößen (Energie, Ladung) |
| KI-Weltmodell | Faktenmenge | Menge deduktiv geschlossener Axiome |

## 3. Perspektiven

**Definition 3 (Perspektive).** Eine Perspektive auf $\mathfrak{K}$ ist ein
Tripel

$$
p = \langle k,\; \sigma,\; \rho \rangle
$$

mit

- $k \in K$ (der zugrunde liegende Kernzustand),
- $\sigma \in \{-1,+1\}$ (die Valenz),
- $\rho : K \to K$ (die Lesart / der Projektionsoperator).

Die **Kernpräsentation** ist der ausgezeichnete Fall $\rho = \mathrm{id}$; ihr
wird der Wert $0$ zugeordnet.

## 4. Admissibilität (Invarianz-Bedingung)

**Definition 4 (Zulässigkeit).** Eine Perspektive $p = \langle k,\sigma,\rho \rangle$
heißt **admissibel** genau dann, wenn

$$
\mathrm{Adm}(p) \;:\Longleftrightarrow\; \mathcal{I}(\rho(k)) = \mathcal{I}(k).
$$

In Worten: Eine Lesart ist zulässig, wenn sie die Invariante des Kerns nicht
verändert.

**Definition 5 (Wahrheit einer Perspektive).** Die Wahrheit einer Perspektive
ist *relativ* und definiert als

$$
\mathrm{True}(p) \;:\Longleftrightarrow\; \mathrm{Adm}(p).
$$

Das ist die präzise Fassung des Satzes: *„Wahrnehmungen bleiben wahr, sofern
sie die grundlegende Wahrheit nicht verändern.“*

## 5. Der trinäre Wert

**Definition 6 (Auswertung).** Die Auswertungsfunktion $v$ ordnet jeder
Perspektive einen trinären Wert zu:

$$
v(p) =
\begin{cases}
0 & \text{falls } \rho = \mathrm{id} \quad (\text{Kernpräsentation}),\\[4pt]
\sigma & \text{falls } \rho \neq \mathrm{id} \text{ und } \mathrm{Adm}(p),\\[4pt]
\bot & \text{sonst} \quad (\text{unzulässig / Kernmutation}).
\end{cases}
$$

$\bot$ ist **kein** dritter Wahrheitswert, sondern ein Fehlerzustand: Die
Perspektive verletzt die Integrität und wird abgewiesen.

## 6. Axiome

**T1 — Zentrum.** Der Wert $0$ ist eindeutig:
$v(p)=0 \Longleftrightarrow \rho=\mathrm{id}$. (Wörtlich „genau eine Perspektive
mit $\rho=\mathrm{id}$“ wäre falsch, weil $k$ und $\sigma$ variieren; siehe
[Formale Verifikation](/docs/forschung/formale-verifikation).)

**T2 — Involution.** $\nu \circ \nu = \mathrm{id}$ und $\nu(0)=0$.

**T3 — Invarianz.** Für jede admissibile Perspektive gilt
$\mathcal{I}(\rho(k))=\mathcal{I}(k)$.

**T4 — Koexistenz.** Sind $p_+ = \langle k,+1,\rho_+\rangle$ und
$p_- = \langle k,-1,\rho_-\rangle$ admissibel, so dürfen beide zugleich
akzeptiert werden.

**T5 — Nicht-Mutation.** Gilt $\mathcal{I}(\rho(k)) \neq \mathcal{I}(k)$, so ist
$p$ unzulässig, unabhängig von $\sigma$.

**T6 — Nicht-Trivialität.** Es gibt mindestens einen Kernzustand und zwei
admissible Perspektiven entgegengesetzter Valenz.

## 7. Der Nicht-Kollaps-Satz

**Satz (Nicht-Kollaps).** Seien $p_+$ und $p_-$ admissible Perspektiven
entgegengesetzter Valenz auf demselben Kern $k$. Dann bilden sie keinen
klassischen Widerspruch.

*Beweis.* Die Wahrheitsbedingung einer Perspektive ist $\mathrm{Adm}(p)$, also
$\mathcal{I}(\rho(k))=\mathcal{I}(k)$. Diese Bedingung ist für $p_+$ und $p_-$
unabhängig erfüllbar, weil sie sich auf die Invariante bezieht, nicht auf den
Wahrheitswert von $\sigma$. Ein Widerspruch im klassischen Sinn läge vor, wenn
$p_+$ und $\neg p_-$ dieselbe Proposition behaupteten. Das tun sie nicht: Sie
behaupten eine *Bewertung* relativ zum selben Fakt. $\square$

:::note[Was der Satz nicht sagt]
Der Satz zeigt nur, dass das Modell **konsistent konstruiert** ist. Er zeigt
nicht, dass es auf jede philosophische Frage anwendbar ist. Die
Anwendbarkeit ist eine separate, empirische Frage.
:::

Die Lean-Fassung präzisiert den Satz als **Erfüllbarkeitssatz**: Es gibt einen
konkreten Kernrahmen, in dem zwei zulässige Perspektiven entgegengesetzter
Valenz koexistieren und verschiedene Werte erhalten (`noncollapse`). Mehr
behauptet der Satz nicht — siehe
[Formale Verifikation](/docs/forschung/formale-verifikation).

## 8. Beispielinstanz

Sei $K = \{\text{offen}, \text{gesperrt}\}$ und
$\mathcal{I}(k) = k$ (die Invariante ist der Fakt selbst).

- Kern: $k = \text{gesperrt}$, Wert $0$.
- Alice: $\rho_A(k) = k$, $\sigma=-1$ → Wert $-1$, admissibel.
- Bob: $\rho_B(k) = k$, $\sigma=+1$ → Wert $+1$, admissibel.
- Carol: $\rho_C(k) = \text{offen}$ → $\mathcal{I}(\rho_C(k)) \neq \mathcal{I}(k)$
  → $\bot$, unzulässig.

Das Modell leistet genau die gewünschte Trennung.

## 9. Offene Stellen

1. **Struktur von $I$.** Welche Invarianten sind zulässig? Reicht ein Hash, oder
   braucht es eine inhaltliche Theorie?
2. **Metrik auf $K$.** Für Anwendungen (VSA, Urteilskraft) braucht man eine
   Distanz $d(\rho(k),k)$.
3. **Dynamik.** Wie ändert sich der Kern über Zeit, ohne Willkür?
4. **Quantifikation.** Wie verhält sich das Modell zu $n$-Akteuren und
   $n$-Perspektiven?

→ [Invarianz-Bedingung](/docs/trinaeritaet/invarianz)
→ [Offene Fragen](/docs/forschung/offene-fragen)

## Weiterlesen

- [Invarianz-Bedingung](/docs/trinaeritaet/invarianz)
- [Binäre Verschachtelung](/docs/trinaeritaet/binaere-verschachtelung)
- [Kritik & Grenzen](/docs/trinaeritaet/kritik-grenzen)
