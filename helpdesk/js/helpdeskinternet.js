var welkom = alert("welkom medewerker!");

//vraag naam
var vraag1 = prompt("wat is de naam van de klant?");
while (vraag1 == "" || vraag1 == null) {
    var vraag1 = prompt("U heeft een naam nodig! Wat is de naam van de klant?")
};
document.write("naam klant: " + vraag1);
document.write("<br/>");

//vraag datum
var vraag2 = prompt("wat is de datum?");
while (vraag2 == "") { var vraag2 = prompt("U heeft nog geen datum ingevuld. Vul hier de datum in.") }
document.write("datum van het gesprek: " + vraag2);
document.write("<br/>");  

//vraag merk modem
var vraag3 = prompt("wat is het merk van de modem?");
while (vraag3 == "") {
    var vraag3 = prompt("we hebben een merk nodig. wat is het merk van de modem");
}
document.write("Modem merk: " + vraag3);
document.write("<br/>");

//vraag modelnummer modem
var vraag4 = prompt("Wat is het modelnummer van uw modem?");
while (vraag4 == "" || vraag4 == null) {
    var vraag4 = prompt("Sorry we hebben een modelnummer nodig. deze bevind zich op uw modem. vul hier uw modelnummer in:");
};
document.write("Modelnummer: " + vraag4);
document.write("<br/>");

//vraag klacht over internet
document.write("<fieldset> <legend>Internet<legend>");
var vraag5 = confirm("heeft de klant een klacht over internet?");
if (vraag5 === true) {
    document.write("<br> klacht over internet: ja");


    //vraag www.nu.nl
    var vraag6 = confirm("Kunt u browsen naar www.nu.nl?");
    if (vraag6 === true) {
        document.write("kan browsen naar www.nu.nl: ja");
        document.write("<br/>");
    }
    else {
        document.write("kan browsen naar www.nu.nl: nee")
        document.write("<br/>");
    }

    //vraag f5
    var vraag7 = confirm("laad de pagina snel als u op f5 drukt?");
    if (vraag7 === true) {
        document.write("pagina laad snel na f5: ja");
        document.write("<br/>");
    }
    else {
        document.write("pagina laad snel na f5: nee")
        document.write("<br/>");
    }
}
else {
    document.write("klachtover internet: nee");

}
document.write("</fieldset>")

//vraag klacht internet en bellen
var vraag8 = confirm("Heeft u een klacht over ons product internet en bellen?");
if (vraag8 === true) {
    document.write("klacht over internet en bellen: ja");

}
else {
    document.write("klacht over internet en bellen: nee")
}




