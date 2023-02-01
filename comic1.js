const comic1 = ["./img/comics/1/1-ladroes-de-tempo-0.png",
"./img/comics/1/1-ladroes-de-tempo-1.png",
"./img/comics/1/1-ladroes-de-tempo-2.png",
"./img/comics/1/1-ladroes-de-tempo-3.png",
"./img/comics/1/1-ladroes-de-tempo-4.png",
"./img/comics/1/1-ladroes-de-tempo-5.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic1[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic1.length; 
    img.src = comic1[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic1.length; 
    img.src = comic1[index];
 }