const idPage = window.location.search; // recupere l'id de l'url(avec le ?)
const letId = idPage.slice(1); // enleve le point d'interogation pour recuperer l'id brut
const header = document.getElementById('header');
const carte = document.getElementById('carte');
const desc = document.getElementById('desc');
const niveau = document.getElementById('niveau');
const niveaudesc = document.getElementById('niveaudesc');
const qualite = document.getElementById('qualite');
const qualitedesc = document.getElementById('qualitedesc');
const frequentation = document.getElementById('frequentation');
const frequentationdesc = document.getElementById('frequentationdesc');
const paysage = document.getElementById('paysage');
const paysagedesc = document.getElementById('paysagedesc');
const localisme = document.getElementById('localisme');
const localismedesc = document.getElementById('localismedesc');
const accessibilite = document.getElementById('accessibilite');
const accessibilitedesc = document.getElementById('accessibilitedesc');
const maree = document.getElementById('maree');
const saison = document.getElementById('saison');
const fond = document.getElementById('fond');
const astuce = document.getElementById('astuce');
const loger = document.getElementById('loger');
const manger = document.getElementById('manger');
const sortir = document.getElementById('sortir');
const asideImg = document.getElementById('asideImg');
const imageGalerie = document.getElementById('imgGalerie');
var longGalerie = spot[letId].imgGalerie.length;
// initialise le texte a ecrire, chaque item de l'array est une nouvelle ligne
var aText = new Array(`${spot[letId].title}`, `${spot[letId].pays}_`);
var iSpeed = 100; // vitesse ecriture
var iIndex = 0; // demarrage ecriture
var iArrLength = aText[0].length; // longueur array
var iScrollAt = 20;
var iTextPos = 0; // initialise la position du texte
var sContents = '';
var iRow;
// affiche aleatoirement les images polaroides dans la partie droite de la page
function randomPic() {
  var arrayPic = imgAside;
  var max = arrayPic.length;
  var randomPic = 0;
  for (let iPic = 0; iPic < 10; iPic++) {
    randomPic = Math.floor(Math.random() * max);
    max = max - 1;
    asideImg.innerHTML += `<li class="li1"><img src="${imgAside[randomPic].img}" class="img6">
          <p class="p6">${imgAside[randomPic].title}</p>
        </li>`;
    arrayPic.splice(randomPic, 1);
  }
}

function afficherSpot() {
  header.setAttribute(
    'style',
    'background-image: url(' + spot[letId].imgHeader + ');'
  );
  carte.innerHTML = `<img src="${spot[letId].cartespot}" alt="" class="img1">`;
  desc.innerHTML = `<p class="p7">${spot[letId].description}</p>`;
  niveau.innerHTML = `${spot[letId].niveau}`;
  niveaudesc.innerHTML = `<p>${spot[letId].niveauDescription}</p>`;
  qualite.innerHTML = `${spot[letId].qualite}`;
  qualitedesc.innerHTML = `<p>${spot[letId].qualiteDescription}</p>`;
  frequentation.innerHTML = `${spot[letId].frequentation}`;
  frequentationdesc.innerHTML = `<p>${spot[letId].frequentationDescription}</p>`;
  paysage.innerHTML = `${spot[letId].paysage}`;
  paysagedesc.innerHTML = `<p>${spot[letId].paysageDescription}</p>`;
  localisme.innerHTML = `${spot[letId].localisme}`;
  localismedesc.innerHTML = `<p>${spot[letId].localismeDescription}</p>`;
  accessibilite.innerHTML = `${spot[letId].accessibilite}`;
  accessibilitedesc.innerHTML = `<p>${spot[letId].accessibiliteDescription}</p>`;
  maree.innerHTML = `Le meilleur moment pour surfer est: ${spot[letId].maree}`;
  saison.innerHTML = `La meilleure saison surf se situe entre ${
    spot[letId].saison[0]
  } et ${spot[letId].saison[spot[letId].saison.length - 1]} `;
  fond.innerHTML = `${spot[letId].fond}`;
  astuce.innerHTML = `${spot[letId].astuce}`;
  loger.innerHTML = `${spot[letId].loger}`;
  manger.innerHTML = `${spot[letId].manger}`;
  sortir.innerHTML = `${spot[letId].sortir}`;
  for (let imgg = 0; imgg < longGalerie; imgg++) {
    imageGalerie.innerHTML += `<img src="${spot[letId].imgGalerie[imgg]}" alt="" class="itemimg" >`;
  }
  filtreSpotCoeur();
  filtreSpotAutour();
}
function filtreSpotAutour() {
  var pays = ''; // variable pour filtrer les pays pour faire apparaitre les spots du meme pays
  var number = 0;
  var number = spot[letId].id;
  pays = spot[letId].pays;
  var spotPic = [];
  spotPic.push(spot);
  spotPic[0].splice(number, 1); //elimine le spot actuel
  const spotPays = spotPic[0].filter(function (spotItem) {
    if (spotItem.pays === pays) {
      return spotItem;
    }
  });
  creationItemAutour(spotPays);
}
// affiche dans le fichier html les items spots
function creationItemAutour(spotItems) {
  const containerSpot = document.getElementById('containerSpot');
  let listeItems = spotItems.map(function (item) {
    return `<div class="contenant ${item.class}" id="item1">
        <a class="bloc_lien" href="${item.lien}"></a>
        <div class="texte_centrer">${item.title}</div>
      </div>
      <style>
        .${item.class} {
          background: url(${item.imgitem});
          background-size: cover;
          background-repeat: no-repeat;
        }
      </style>`;
  });
  listeItems = listeItems.join('');
  containerSpot.innerHTML = listeItems;
}
function filtreSpotCoeur() {
  var coeur = ''; // variable pour filtrer les pays pour faire apparaitre les spots du meme pays
  var number = 0;
  var number = spot[letId].id;
  coeur = spot[letId].coeur;
  const spotCoeur = spot.filter(function (spotItem) {
    if (spotItem.title === coeur) {
      return spotItem;
    }
  });
  creationItemCoeur(spotCoeur);
}
// affiche dans le fichier html les items spots
function creationItemCoeur(spotItems) {
  const containerSpot = document.getElementById('coeur');
  let listeItems = spotItems.map(function (item) {
    return `
        <a class="bloc_lien" href="${item.lien}"></a>
        <div class="texte_centrer">${item.title}</div>
      </div>
      <style>
        .coeur {
          background: url(${item.imgitem});
          background-size: cover;
          background-repeat: no-repeat;
        }
      </style>`;
  });
  listeItems = listeItems.join('');
  containerSpot.innerHTML = listeItems;
}
//horizontal scroll
const slider = document.getElementById('imgGalerie');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
//Ecriture titre
function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById('typedtext');

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br>';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout('typewriter()', 100);
    }
  } else {
    setTimeout('typewriter()', iSpeed);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  afficherSpot();
  randomPic();
  //animation du titre
  typewriter();
});
