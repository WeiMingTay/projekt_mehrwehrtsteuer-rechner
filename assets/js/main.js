
let netto = document.getElementById("netto");
let brutto = document.getElementById("brutto");
let antwort = document.getElementById("antwort");
let antwort2 = document.getElementById("antwort2");
let steuer = document.getElementById("steuer");
let ergebnis = document.getElementById("ergebnis");
let zahl = document.getElementById("zahl");


function auswahl() {
    if (netto.checked) {
       antwort.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
       antwort2.innerHTML = "Bruttobetrag";
    } else if (brutto.checked) {
        antwort.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
        antwort2.innerHTML = "Nettobetrag";
    }
}

function auswahl2() {
    if (mwst19.checked) {
        let mwst = 1.19;
    } else if (mwst7.checked) {
        let mwst = 1.07;
    }
}

function rechnen() {
    if (netto.checked && mwst19.checked) {
        steuer = zahl.value * 0.19;
        ergebnis = zahl.value * 1.19;
        document.getElementById("steuer").innerHTML = (steuer.toFixed(2).replace(".", ",") + " €");
        document.getElementById("ergebnis").innerHTML = (ergebnis.toFixed(2).replace(".", ",") + " €");
        console.log(steuer.toFixed(2).replace(".", ",") + " €");
        console.log(ergebnis.toFixed(2).replace(".", ",") + " €");
        
    } else if (netto.checked && mwst7.checked) {
        steuer = zahl.value * 0.07;
        ergebnis = zahl.value * 1.07;
        document.getElementById("steuer").innerHTML = (steuer.toFixed(2).replace(".", ",") + " €");
        document.getElementById("ergebnis").innerHTML = (ergebnis.toFixed(2).replace(".", ",") + " €");
        console.log(steuer.toFixed(2).replace(".", ",") + " €");
        console.log(ergebnis.toFixed(2).replace(".", ",") + " €");
        
    } else if (brutto.checked && mwst19.checked) {
        steuer = zahl.value / 119 * 19;
        ergebnis = zahl.value / 1.19;
        document.getElementById("steuer").innerHTML = (steuer.toFixed(2).replace(".", ",") + " €");
        document.getElementById("ergebnis").innerHTML = (ergebnis.toFixed(2).replace(".", ",") + " €");
        console.log(steuer.toFixed(2).replace(".", ",") + " €");
        console.log(ergebnis.toFixed(2).replace(".", ",") + " €");

    } else if (brutto.checked && mwst7.checked) {
        steuer = zahl.value / 107 * 7;
        ergebnis = zahl.value / 1.07;
        document.getElementById("steuer").innerHTML = (steuer.toFixed(2).replace(".", ",") + " €");
        document.getElementById("ergebnis").innerHTML = (ergebnis.toFixed(2).replace(".", ",") + " €");
        console.log(steuer.toFixed(2).replace(".", ",") + " €");
        console.log(ergebnis.toFixed(2).replace(".", ",") + " €");
    }

}