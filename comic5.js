const comic5 = ["./img/comics/5/5-euzebio-the-frog-0.png",
"./img/comics/5/5-euzebio-the-frog-1.png",
"./img/comics/5/5-euzebio-the-frog-2.png",
"./img/comics/5/5-euzebio-the-frog-3.png",
"./img/comics/5/5-euzebio-the-frog-4.png",
"./img/comics/5/5-euzebio-the-frog-5.png",
"./img/comics/5/5-euzebio-the-frog-6.png",
"./img/comics/5/5-euzebio-the-frog-7.png"]

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = comic5[index];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comic5.length; 
    img.src = comic5[index];
 }

 function previousPage(){
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index--;
    index = index % comic5.length; 
    img.src = comic5[index];
 }