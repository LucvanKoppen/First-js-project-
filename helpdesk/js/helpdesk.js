//welkom medewerker
var welkom = alert("welkom medewerker!");

//vraag naam
var vraag1 = prompt("wat is de naam van de klant?");
while (vraag1 == "" || vraag1 == null) {
    var vraag1 = prompt("U heeft een naam nodig! Wat is de naam van de klant?")
};
//vraag datum
var vraag2 = prompt("wat is de datum?");
while (vraag2 == "") { var vraag2 = prompt("U heeft nog geen datum ingevuld. Vul hier de datum in.") }
//vraag merk modem
var vraag3 = prompt("wat is het merk van de modem?");
while (vraag3 == "") {
    var vraag3 = prompt("we hebben een merk nodig. wat is het merk van de modem");
}
//vraag modelnummer modem
var vraag4 = prompt("Wat is het modelnummer van uw modem?");
while (vraag4 == "" || vraag4 == null) {
    var vraag4 = prompt("Sorry we hebben een modelnummer nodig. deze bevind zich op uw modem. vul hier uw modelnummer in:");
};
//vraag klacht over internet
var vraag5 = confirm("heeft de klant een klacht over internet?");
if (vraag5 == true) {
    var vraag6 = confirm("Kunt u browsen naar www.nu.nl?");
    var vraag7 = confirm("laad de pagina snel als u op f5 drukt?");
}
//vraag klacht internet en bellen
var vraag8 = confirm("Heeft u een klacht over ons product internet en bellen?");
if (vraag8 == true) {
    var vraag9 = confirm("Hoort u een kiestoon?");
    var vraag10 = confirm("Kunt u uzelf bellen op bijvoorbeeld een mobiel nummer?");
    var vraag11 = confirm("Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft?")
}
//vraag klacht internet en bellen en televisie
var vraag12 = confirm("Heeft u een klacht over ons product: Internet, Bellen en Televisie?");
if (vraag12 == true){
    var vraag13 = prompt("Hoeveel televisie toestellen heeft u?");
    var vraag14 = confirm("Is uw splitter goed aangesloten?");
    var vraag15 = confirm("Is uw settopbox goed aangesloten?");
    var vraag16 = confirm("Worden er servers gevonden?");
}











//document.writes
//naam
document.write("<br> <h1> naam klant: " + vraag1+ "</h1>");


//datum
document.write("<br> datum van het gesprek: " + vraag2);

//merk
document.write("<br> Modem merk: " + vraag3);

//modelnummer
document.write("<br> Modelnummer: " + vraag4);

//internet
document.write("<fieldset> <legend>Internet</legend>");
if(vraag5 == true){
document.write("<br> klacht over internet: ja");

//www.nu.nl
if (vraag6 === true) {
    document.write("<br> kan browsen naar www.nu.nl: ja");
}
else {
    document.write("<br/> <a href='html/datainternet/internet-laden.html'> kan browsen naar www.nu.nl: nee</a>")
}

// f5
if (vraag7 === true) {
    document.write(" <br> pagina laad snel na f5: ja");
}
else {
    document.write("<br> <a href='html/datainternet/snelheid-laden.html'> pagina laad snel na f5: nee <a/>")
}
};

//probleem'n?
if (vraag7 + vraag6 < 2) {
    document.write("<br/> aantal klachten over product Internet: ", vraag7 + vraag6);
}
else {
    document.write("<br/> Er zijn geen klachten over ons product: internet. Alles werkt zoals het hoort.");
}


document.write("</fieldset>");











//internet en bellen
document.write("<fieldset> <legend> Internet en Bellen</legend>");
if (vraag8 == true){
//kiestoon
var i = 3
if(vraag9 == true){
    document.write("<br/> Hoort kiestoon: ja");
    i-- 
}
else{
    document.write("<br/> <a href='html/internetbellen/geen-kiestoon.html'>Hoort kiestoon: nee <a/>")
}

//vraag zelf bellen
if(vraag10 == true){
    document.write("<br/> Kan zichzelf bellen: ja");
    i--
}
else{
    document.write("<br/> <a href='html/internetbellen/gebeld-worden.html'> Kan zichzelf bellen: nee <a/>");
}

//vraag klacht bellen
if(vraag11 == true){
    document.write("<br/> Kan bellen om klacht in te dienen: ja");
    i--
}
else{
    document.write("<br/> <a href='html/internetbellen/uit-bellen.html'> Kan bellen om klacht in te dienen: nee <a/>");
}
}
//aantal klachten internet en bellen 
if(i == undefined|| i == 0){
    document.write("<br/> U heeft geen klachten uw product werkt prima.");
}
else{
    document.write("<br/> U heeft ",i, "klachten over ons product Internet en Bellen.");
}  




document.write("</fieldset>");









//Internet Bellen en Televisie
document.write("<fieldset> <legend>Internet, Bellen en Televisie</legend>");

//vraag klacht Internet, Bellen en Televisie
if (vraag12 == true){
    document.write("<br/> Klacht met product Internet, Bellen en Televisie: ja");
    document.write("<br/> Aantal televisie toestellen: ",vraag13);
    if(vraag14 == true){
        document.write("<br/> Splitter goed aangesloten: ja");
    }
    else{
    document.write("<br/> <a href='html/InternetBellenTelevisie/splitter-aangesloten.html'> Splitter goed aangesloten: nee <a/>");
    }
    if(vraag15 == true){
        document.write("<br/> settopbox goed aangesloten: ja");
    }
    else{
    document.write("<br/>  <a href='html/InternetBellenTelevisie/settopbox-aangesloten.html'> Settopbox goed aangesloten: nee <a/>");
    }
    if(vraag16 == true){
        document.write("<br/> Worden de zenders gevonden: ja");
    }
    else{
    document.write("<br/>  <a href='html/InternetBellenTelevisie/zenders-niet-gevonden.html'> Worden de zenders gevonden: nee");
    }

    if(vraag14 + vraag15 + vraag16 == 3){
        document.write("<br/> Er zijn geen klachten. Uw product werkt prima.");
    }
    else{
        document.write("<br/> Er zijn ",vraag14 + vraag15 + vraag16,"klachten over Internet, Bellen en Televisie." );
    }
}
else{
    document.write("<br/> Klacht met product Internet, Bellen en Televisie: nee"); 
}
document.write("</fieldset>");

var j = 0;
if(vraag6 == false){
    j++
}
if(vraag7 == false){
    j++
}
if(vraag9 == true){
    j++
}
if(vraag10 == true){
    j++
}if(vraag11 == true){
    j++
}if(vraag14 == true){
    j++
}if(vraag15 == true){
    j++
}if(vraag16 == true){
    j++
}


if (j == 0){
    document.write("<br/> Er zijn geen klachten. datum:", vraag2,);
}
else{
    document.write("<br/> Er zijn "+ j + " klachten op ",vraag2,);
}





