const comic0 = ["./img/comics/0/0-varios-nadas-0.png",
"./img/comics/0/0-varios-nadas-1.png",
"./img/comics/0/0-varios-nadas-2.png",
"./img/comics/0/0-varios-nadas-3.png"]

const comic1 = ["./img/comics/1/1-ladroes-de-tempo-0.png",
"./img/comics/1/1-ladroes-de-tempo-1.png",
"./img/comics/1/1-ladroes-de-tempo-2.png",
"./img/comics/1/1-ladroes-de-tempo-3.png",
"./img/comics/1/1-ladroes-de-tempo-4.png",
"./img/comics/1/1-ladroes-de-tempo-5.png"]

const comic2 = ["./img/comics/2/2-mijada-de-cachorro-na-praia-0.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-1.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-2.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-3.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-4.png",
"./img/comics/2/2-mijada-de-cachorro-na-praia-5.png"]

const comic3 = ["./img/comics/3/3-apatico-0.png",
"./img/comics/3/3-apatico-1.png",
"./img/comics/3/3-apatico-2.png",
"./img/comics/3/3-apatico-3.png",
"./img/comics/3/3-apatico-4.png",
"./img/comics/3/3-apatico-5.png"]

const comic4 = ["./img/comics/4/4-os-tanukis-show-de-bola-0.png",
"./img/comics/4/4-os-tanukis-show-de-bola-1.png",
"./img/comics/4/4-os-tanukis-show-de-bola-2.png",
"./img/comics/4/4-os-tanukis-show-de-bola-3.png",
"./img/comics/4/4-os-tanukis-show-de-bola-4.png",
"./img/comics/4/4-os-tanukis-show-de-bola-5.png",
"./img/comics/4/4-os-tanukis-show-de-bola-6.png",
"./img/comics/4/4-os-tanukis-show-de-bola-7.png"]

const comic5 = ["./img/comics/5/5-euzebio-the-frog-0.png",
"./img/comics/5/5-euzebio-the-frog-1.png",
"./img/comics/5/5-euzebio-the-frog-2.png",
"./img/comics/5/5-euzebio-the-frog-3.png",
"./img/comics/5/5-euzebio-the-frog-4.png",
"./img/comics/5/5-euzebio-the-frog-5.png",
"./img/comics/5/5-euzebio-the-frog-6.png",
"./img/comics/5/5-euzebio-the-frog-7.png"]

const comic6 = ["./img/comics/6/6-efeito-borboleta-0.png",
"./img/comics/6/6-efeito-borboleta-1.png",
"./img/comics/6/6-efeito-borboleta-2.png",
"./img/comics/6/6-efeito-borboleta-3.png",
"./img/comics/6/6-efeito-borboleta-4.png",
"./img/comics/6/6-efeito-borboleta-5.png",
"./img/comics/6/6-efeito-borboleta-6.png",
"./img/comics/6/6-efeito-borboleta-7.png"]

const comics = [comic0, comic1, comic2, comic3, comic4, comic5, comic6]

let i = 0;

let index = 0;

let comic = comics[index]

function makeImage() {
    let img = document.createElement('img')
    img.src = comic[i];
    document.getElementById('comicPage').appendChild(img);
 }
 

 function nextPage() {
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    i++;
    i = i % comic.length; 
    img.src = comic[i];
 }

 function previousPage() {
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    if (i > 0) {
      i--;
      i = i % comic.length; 
      img.src = comic[i];
    }
}

 function nextComic() {
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    index++;
    index = index % comics.length;
    comic = comics[index];
    img.src = comic[0];
 }

 function previousComic() {
    let img = document.getElementById('comicPage').getElementsByTagName('img')[0]
    if (index > 0) {
	    index--;
	    index = index % comics.length;
	    comic = comics[index];
	    img.src = comic[0];
    } else {
      index = comics.length;
    }
 }


 function goToComic(x) {
   window.location.assign(url="index.html");
   index = (x);
   comic = comics[index]
   img.src = comic[0];
 }