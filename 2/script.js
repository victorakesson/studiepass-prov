
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: du har ingen strin i console log meddelandet i functionen samt inget som returnar functionen

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello(a) {
    return `Hello ${a}, how are you today? `
}
console.log(hello("Fredrik"))

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
