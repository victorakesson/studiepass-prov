Lägg till en knapp på sidan och ge den ett `id="my-button"`.

När du trycker på knappen ska:
* `Goodbye!` loggas i konsolen
* Texten `Hello!` bytas till `Goodbye!`

Starta servern som visar sidan genom **Go Live**.

*(OBS: Du behöver gå in på `localhost:5500/4` eftersom `index.html` ligger i en undermapp.)*


<details>
<summary>Ledtråd 1</summary>

````javascript
// 1: Hämta ut knappen med id `my-button` i scriptet. Hur gör du det?

// 2: Lyssna på eventet `"click"` på knappen. Använd `addEventListener`

// 3: I funktionen, logga till consolen.

// 4: I funktionen, hämta ut elementet som hör till "Hello!". 
// Sätt propertyn `innerText` på elementet till "Goodbye!"
````
</details>

<br/>
<br/>

## Frivillig fortsättning

Gör så att bakgrundsfärgen på bodyn byts till en annan färg, *när du trycker på "Enter".*

<details>
<summary>Ledtråd 2</summary>

Lyssna efter `keyUp`-eventet direkt på `document`-objektet.
</details>
