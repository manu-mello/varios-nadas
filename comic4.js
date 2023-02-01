const comic4 = ["./img/comics/4/4-os-tanukis-show-de-bola-0.png",
"./img/comics/4/4-os-tanukis-show-de-bola-1.png",
"./img/comics/4/4-os-tanukis-show-de-bola-2.png",
"./img/comics/4/4-os-tanukis-show-de-bola-3.png",
"./img/comics/4/4-os-tanukis-show-de-bola-4.png",
"./img/comics/4/4-os-tanukis-show-de-bola-5.png",
"./img/comics/4/4-os-tanukis-show-de-bola-6.png",
"./img/comics/4/4-os-tanukis-show-de-bola-7.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic4[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic4.length; 
    img.src = comic4[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic4.length; 
    img.src = comic4[index];
 }