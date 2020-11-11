document.getElementById("my-button").addEventListener("click", buttonPress)

function buttonPress() {
    console.log("Goodbye")
    document.getElementById("headline").innerHTML = "Goodbye!"
    
}