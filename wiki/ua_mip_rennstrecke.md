---
layout: page
title: Übungsaufgabe MIP - Rennstrecke
---

## Lösungen werden per mail eingereicht.

Ein über Kanal 2 des AD-Wandlers angeschlossenes Pedometer misst die Geschwindigkeit des vorbeifahrenden Autos mit folgender Formel.
Dabei wird die interne Referenzspannung von 5 Volt eingesetzt.

```
t in km pro stunde.
t = 10kmh/V * 5.5
```

Die messung wird über die Serielle Schnittstelle über den empfang von dem Byte 0x8a freigegeben.
Da die Freigabe einige Meter entfernt steht, muss nach freigabe 2 sekunden gewartet werden bevor die Geschwindigkeit gemessen werden kann.

Verwenden sie dafür Timer1.

### Aufgabe A
Erstellen Sie dass Programm und Testen sie es im Simulator.

### Aufgabe B
Welcher Vorteiler setzten sie für die Zeitmessung ein und warum?

### Aufgabe C
Warum kann Timer0 nicht eingesetzt werden? (Mehrere gründe möglich)

## EXTRA: Achtung der Teil ist schwerer und daher nicht pflicht!

Nachdem der Wert ermittelt wird, soll dass Ergebniss so schnell wie möglich an die Rennleitung geschickt werden.
Diese kann den Wert über ein LCD Display ablesen.

### Aufgabe D
Entwickeln sie dass Programm und Testen sie es im Simulator.
Modifizieren sie dafür gegebenfalls ihr Programm aus **Aufgabe A**.
