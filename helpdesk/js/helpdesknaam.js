var welkom = alert("welkom medewerker!");


 var vraag1 = prompt("wat is de naam van de klant?");
while (vraag1 == ""|| vraag1 == null) {
    var vraag1 = prompt("U heeft een naam nodig! Wat is de naam van de klant?")
};
document.write("naam klant: " + vraag1);
document.write("<br/>");

var vraag2 = prompt("wat is de datum?");
while (vraag2 == ""){ var vraag2 = prompt("U heeft nog geen datum ingevuld. Vul hier de datum in.")}
 document.write("datum van het gesprek: " + vraag2);
 document.write("<br/>");

 var vraag3 = prompt("wat is het merk van de modem?");
 while (vraag3 == "") {
     var vraag3 = prompt("we hebben een merk nodig. wat is het merk van de modem");
 }
 document.write("Modem merk: "+ vraag3);
 document.write("<br/>");

 var vraag4 = prompt("Wat is het modelnummer van uw modem?");
 while (vraag4 == ""|| vraag4 == null) {
   var  vraag4 = prompt("Sorry we hebben een modelnummer nodig. deze bevind zich op uw modem. vul hier uw modelnummer in:");
 };
 document.write("Modelnummer: "+ vraag4);
 document.write("<br/>");
