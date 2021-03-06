---
layout: page
title: Übungsaufgabe WAN - PHPLogon - Lösungen
---

## Lösungen werden per E-Mail eingereicht.

**Hilfsmittel:** Keine!

Beantworten Sie die Fragen Schriftlich, in kurzen Sätzen.   
Sie haben dafür 90 Minuten Zeit.   
Codebeispiele bitte auf einem **extra** Blatt anfertigen.    

**Frage:** Warum muss man dem action-Attribut des Formulars einen Wert zuweisen?

**Antwort:**
Damit der Browser weiß, wohin er die Daten schicken soll.
<br /><br /><br />
**Frage:** Welchen Wert muss man dem action-Attribut des Formulars zuweisen?

**Antwort:**
Die Zieladresse wohin die Daten geschickt werden soll.
<br /><br /><br />
**Frage:** Welche Übertragungsmethoden gibt es?

**Antwort:**
Es gibt POST und GET.
GET hängt dabei die Werte an die Adresse an, POST tut dies nicht.
<br /><br /><br />
**Frage:** Warum soll man POST zur Übertragung der Daten nutzen?

**Antwort:**
Weil dass Sicherer ist, da die Daten nicht wie bei GET an die Adresse  
angehängt werden.
<br /><br />
**Frage:** Erstellen Sie ein Versteckes Input-Element mit dem Namen "spieler".

**Antwort:**

```html
<input type="hidden" value="" name="spieler" />
```

<br />
**Frage:** Wie kann vor dem absenden, dass Formular validieren?

**Antwort:**
Indem ich Normale Buttons anstatt Submit-Buttons verwende, und    
und dass Formular nach dem Prüfen mittels

```javascript
document.getElementById ("NAME").submit ()  
```

absende.
<br />
**Frage:** Wie speichern Sie dass Password in der Datenbank?

**Antwort:**
Auf gar keinen Fall in Klartext, ich würde einen Salt (Hashsumme) verwenden.
<br /><br /><br />
**Frage:** Erstellen Sie eine Funktion welches Passwörter sicher speichert.

**Antwort:**

```php
function save_password ($db, $password)
{
	$hash = password_hash ('$password', PASSWORD_DEFAULT);
	$query = "INSERT INTO passwoerter VALUES ('$hash')";
	$res = mysqli_query ($db, $query);
}
```

**Frage:** Was ist md5?

**Antwort:**
MD5 ist ein Algorithmus zum berechnen einer Checksumme.
<br /><br /><br />
**Frage:** Wozu dient mysqli_error?

**Antwort:**
Die Funktion gibt die Fehlermeldung zurück.
<br /><br /><br />
**Frage:** Erstellen Sie eine Funktion welche eine Tabelle einer Datenbank füllt.

**Antwort:**

```php
function insert_data ($db, $username, $password)
{
	$loginname = mysqli_real_escape_string ($db, '§username');
	$hash = password_hash ('$password', PASSWORD_DEFAULT);
	$query = "INSERT INTO benutzer VALUES ('$loginname', '$hash')";
	$res = mysqli_query ($db, $query);
}
```

**Frage:** Wie bekommen Sie die Werte des HTML Formulars in PHP?

**Antwort:**
Bei der Methode POST verwendet man

```php
_POST['FELDNAME']
```

für GET

```php
_GET['FELDNAME']
```

**Frage:** Wie leiten Sie in PHP den Nutzer auf eine andere Webseite um?

**Antwort:**
Ich nutze die header Funktion.

```php
header ("Location: http://...");
```

**Frage:** Wozu dient in PHP die Funktion die?

**Antwort:**
Um Fehler abzufangen.
<br /><br /><br />
**Frage:** Was ist gefährlich an mysqli_...  or die (...);

**Antwort:**
Wenn zum Beispiel eine SELECT-Abfrage eine leere Menge aufgrund einer   
leeren Tabelle zurück gibt ist dass kein Fehler.
die prüft aber nur ob NULL zurückgeben wird und bei NULL ist  
es ein Fehler.

**Frage:** Wann darf die verwendet werden?

**Antwort:**
Wenn der zurückgegebene Wert nur im Fehlerfall NULL oder false haben kann.
<br /><br /><br />
**Frage:** Wie extrahieren Sie Daten aus einer SELECT-Abfrage in PHP?

**Antwort:**

```php
function save_password ($db, $username)
{
	$loginname = mysqli_real_escape_string ($db, '§username');
	$query = "SELECT password FROM users WHERE username = '$loginname'";
	$res = mysqli_query ($db, $query);
	$row = mysqli_fetch_assoc ($res);
	
	if (!$row)
	{
		return "Username nicht vorhanden!";
	}
	else
	{
		return $row['password'];
	}
}
```

**Frage:** Wie kann man in PHP Debuggen? (Funktion)

**Antwort:**
Mithilfe der Funktion

```php
var_dump($variable);
```
<br /><br /><br />
Alles beantwortet? - Gut vorbereitet!
