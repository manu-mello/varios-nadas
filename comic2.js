const comic2 = ["./img/comics/2/2-mijada-de-cachorro-na-praia-0.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-1.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-2.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-3.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-4.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-5.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic2[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic2.length; 
    img.src = comic2[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic2.length; 
    img.src = comic2[index];
 }