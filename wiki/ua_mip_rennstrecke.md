---
layout: page
title: Übungsaufgabe MIP - Rennstrecke
---

## Lösungen werden per mail eingereicht.

Ein über Kanal 2 des AD-Wandlers angeschlossenes Pedometer misst die Geschwindigkeit   
eines vorbeifahrenden Autos mit folgender Formel.

Es wird die interne Referenzspannung von 5 Volt eingesetzt.

```
t in km pro stunde.
t = 10kmh/V * 5.5
```

Die Messung wird über die Serielle Schnittstelle bei Empfang des Bytes 0x8a freigegeben.   
Da die Lichtschranke einige Meter entfernt steht, muss nach der Freigabe, 2 Sekunden gewartet werden   
bevor die Geschwindigkeit gemessen werden kann.

Verwenden sie hierfür den Timer1.

### Aufgabe A
Erstellen Sie dass Programm und Testen Sie es im Simulator.

### Aufgabe B
Welcher Vorteiler setzten Sie für die Zeitmessung ein und warum?

### Aufgabe C
Warum kann Timer0 nicht eingesetzt werden? (Mehrere Gründe möglich)

## EXTRA: Achtung der Teil ist schwerer und daher nicht pflicht!

Nachdem der Wert ermittelt worden ist, soll dass Ergebniss so schnell wie möglich  
an die Rennleitung geschickt werden.

Diese kann den Wert über ein LCD Display ablesen.

### Aufgabe D
Entwickeln Sie dass Programm und Testen Sie es im Simulator.
Modifizieren Sie hierfür gegebenfalls ihr Programm aus **Aufgabe A**.
