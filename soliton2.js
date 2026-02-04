// Function to convert km/hr to m/s
function convert() {
    // 1. HTML elements-ah variables-la store panrom
    const kmInput = document.getElementById("kmInput");
    const resultText = document.getElementById("resultText");
    const resultBox = document.getElementById("resultBox");

    // 2. Input value-ah number-ah mathurom
    const kmValue = parseFloat(kmInput.value);

    // 3. Validation: Number illa na error message kaatum
    if (isNaN(kmValue)) {
        alert("give valid element");
        return;
    }

    // 4. Physics Logic: 1 km/hr = 5/18 m/s
    // Explanation: (1000 meters / 3600 seconds) = 5/18
    const msValue = (kmValue * 5) / 18;

    // 5. Result-ah website-la display panrom
    // .toFixed(2) use panna decimal points correct-ah varum
    resultText.innerHTML = `Speed: <strong>${msValue.toFixed(2)} m/s</strong>`;

    // 6. Result box-ah visibility on panrom
    resultBox.style.display = "block";
    resultBox.style.marginTop = "20px";
    resultBox.style.padding = "10px";
    resultBox.style.backgroundColor = "#f1c0ccff";
    resultBox.style.borderRadius = "10px";

}
    function calculateOhm() {
    let v = parseFloat(document.getElementById("voltageInput").value);
    let i = parseFloat(document.getElementById("currentInput").value);
    const resText = document.getElementById("ohmresultText");
    const resBox = document.getElementById("ohmresultBox");

    if (isNaN(v) || isNaN(i)) {
        alert("Rendu values-aiyum fill pannunga!");
        return;
    }

    if (i === 0) {
        alert("Current 0-ah irukka koodadhu (Division by zero error!)");
        return;
    }

    const r = v / i;

    resText.innerHTML = `Resistance (R): <strong>${r.toFixed(2)} Ω (Ohms)</strong>`;
    resBox.style.display = "block";
    resBox.style.marginTop = "20px";
    resBox.style.padding = "10px";
    resBox.style.backgroundColor = "#f8b096ff"; 
    resBox.style.borderRadius = "10px";
}
