let text = document.getElementById("text");

function speak() {
    let textVal = text.value; // Dynamically get the value each time
    if (textVal !== "") {
        try {
            let speech = new SpeechSynthesisUtterance(textVal);
            window.speechSynthesis.speak(speech);
        } catch (e) {
            console.log(e);
            alert("Sorry, Cannot convert to speech");
        }
    } else {
        alert("Text should not be empty!");
    }
}

document.getElementById("speak").addEventListener("click", () => {
    speak();
    text.value = ""; // Clear the input field
});