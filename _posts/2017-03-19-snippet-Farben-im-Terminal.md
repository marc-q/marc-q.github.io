---
title: Snippet – Farben im Terminal
layout: post
category: Programmieren
---

Ich hab mich heute mal wieder mit der Farbausgabe im Terminal mittels Escapesequenzen beschäftigt und   
möchte das dabei entstandene Programm anderen zur Verfügung stellen.

**Achtung**
Nicht alle Terminals unterstützen die Farbausgabe, daher überprüft man eigentlich noch ob die Funktionalität   
vorhanden ist. Dies habe ich hierfür jedoch Ausgelassen. Mit dem GNOME-Terminal sollte es jedoch funktionieren.

### Die Escapesequenz

```
\033[38;5;Xm
```

| Element | Funktion |
| ------- | -------- |
| \033 | Markiert den Start einer Escapesequenz. Da *\e* nicht bei allen Terminals funktioniert wird *\033* verwendet. |
| [38 | Signalisiert das die Vordergrundfarbe geändert werden soll. (Erweiterte Vordergrundfarbe; da 30-37 die 16-Bit Standardfarben sind) |
;5 | Das Format der nachfolgenden Farbinformation. ;5 bedeutet hierbei das es sich um ein 8-Bit Format handelt (~3-Bit pro Farbe). |
;Xm | Das 8-Bit Argument X enthält die Farbinformation. |

### Der Code

```c
/* Copyright 2016 Marc Volker Dickmann */
/* Prints some nice colors! */
#include <stdio.h>

int main (int argc, char *argv[])
{
	int r, g, b, i;
	
	r = g = b = i = 0;
	do
	{
		i++;
		b++;
		
		if (b > 7)
		{
			g++;
			b = 0;
		}
		
		if (g > 7)
		{
			r++;
			g = 0;
		}
		
		printf ("\033[38;5;%im#\033[0m%c", (r & 0x3) << 6 | (g & 0x7) << 3 | (b & 0x7), (i % 16 == 0 ? '\n' : ' '));
	} while (r <= 3);
	
	printf ("\n");
	return 0;
}
```
