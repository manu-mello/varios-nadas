const comic6 = ["./img/comics/6/6-efeito-borboleta-0.png",
"./img/comics/6/6-efeito-borboleta-1.png",
"./img/comics/6/6-efeito-borboleta-2.png",
"./img/comics/6/6-efeito-borboleta-3.png",
"./img/comics/6/6-efeito-borboleta-4.png",
"./img/comics/6/6-efeito-borboleta-5.png",
"./img/comics/6/6-efeito-borboleta-6.png",
"./img/comics/6/6-efeito-borboleta-7.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic6[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic6.length; 
    img.src = comic6[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic6.length; 
    img.src = comic6[index];
 }