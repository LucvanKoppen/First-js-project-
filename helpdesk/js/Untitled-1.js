var j = 0;
if(vraag6 = false){
    j++
}
if(vraag7 = false){
    j++
}
if(vraag9 = true){
    j++
}
if(vraag10 = true){
    j++
}if(vraag11 = true){
    j++
}if(vraag14 = true){
    j++
}if(vraag15 = true){
    j++
}if(vraag16 = true){
    j++
}


if (j == 0){
    document.write("<br/> Er zijn geen klachten. datum:", vraag2,);
}
else{
    document.write("<br/> Er zijn ", j , " klachten op ",vraag2,);
}