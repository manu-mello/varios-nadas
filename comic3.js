const comic3 = ["./img/comics/3/3-apatico-0.png",
"./img/comics/3/3-apatico-1.png",
"./img/comics/3/3-apatico-2.png",
"./img/comics/3/3-apatico-3.png",
"./img/comics/3/3-apatico-4.png",
"./img/comics/3/3-apatico-5.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic3[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic3.length; 
    img.src = comic3[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic3.length; 
    img.src = comic3[index];
 }