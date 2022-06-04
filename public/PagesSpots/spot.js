const listePays = [
  {
    id: 0,
    title: `Nicaragua`,
    cartespot: '../img/cartes/nicaragua/cartespotnicaragua.png',
  },
  {
    id: 1,
    title: `Panama`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
  },
  {
    id: 2,
    title: `Costa rica`,
    cartespot: '../img/cartes/costarica/cartespotcosta.png',
  },
  {
    id: 3,
    title: `Equateur`,
    cartespot: '../img/cartes/equateur/cartespotequateur.png',
  },
  {
    id: 4,
    title: `Pérou`,
    cartespot: '../img/cartes/perou/cartespotperou.png',
  },
  {
    id: 5,
    title: `Indonésie`,
    cartespot: '../img/cartes/indo/cartespotindo.png',
  },
];
const spot = [
  {
    id: 0,
    title: `Panga drops`,
    cartespot: '../img/cartes/nicaragua/cartespotnicaragua.png',
    pays: `Nicaragua`,
    imgitem: `../img/pangadrop/IMG_1724.PNG`,
    class: `pangadrop`,
  },
  {
    id: 1,
    title: `Popoyo`,
    cartespot: '../img/cartes/nicaragua/cartespotnicaragua.png',
    pays: `Nicaragua`,
    imgitem: `../img/popoyo/couv.jpg`,
    class: `popoyo`,
  },
  {
    id: 2,
    title: `Penon`,
    cartespot: '../img/cartes/nicaragua/cartespotnicaragua.png',
    pays: `Nicaragua`,
    imgitem: `../img/penon/IMG_1536.JPG`,
    class: `penon`,
  },
  {
    id: 3,
    title: `Maderas`,
    cartespot: `../img/cartes/nicaragua/cartespotnicaragua.png`,
    pays: `Nicaragua`,
    imgitem: `../img/maderas/couv1.jpg`,
    class: `maderas`,
  },
  {
    id: 4,
    title: `Colorado`,
    lien: '../PagesSpots/playacolorado/index.html',
    cartespot: `../img/cartes/nicaragua/cartespotnicaragua.png`,
    pays: `Nicaragua`,
    imgHeader: `../img/imgcolorado/IMG_1729.PNG`,
    description: `Playa colorado se situe au sud du Nicaragua. C'est une vague de classe internationale, ses tubes
        sont reconnue dans le monde entier. Le spot peut supporter des houles de plus de 2m le tout avec un vent
        offshore toute année.Très prisé des américains ces derniers ont construit un resort et un aéroport afin de s'y
        rendre lorsque les conditions sont favorables. `,
    imgitem: `../img/imgcolorado/IMG_1850.png`,
    class: `colorado`,
  },
  {
    id: 5,
    title: `411`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/411/vignette.JPG`,
    class: `quatre`,
  },
  {
    id: 6,
    title: `Corto Circuito`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/cortocircuito/vignette.jpg`,
    class: `corto`,
  },
  {
    id: 7,
    title: `Dinosor`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/dinosor/vignette.png`,
    class: `dinosor`,
  },
  {
    id: 8,
    title: `Morillo`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/morillo/vignette.jpg`,
    class: `morillo`,
  },
  {
    id: 9,
    title: `Playa Venao`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/playavenao/vignette.jpg`,
    class: `venao`,
  },
  {
    id: 10,
    title: `Santa Catalina`,
    cartespot: '../img/cartes/panama/cartespotpanama.png',
    pays: `Panama`,
    imgitem: `../img/santacatalina/vignette.jpg`,
    class: `santa`,
  },
];
const header = document.getElementById('header');
const desc = document.getElementById('desc');
// initialise le texte a ecrire, chaque item de l'array est une nouvelle ligne
var aText = new Array('Playa Colorado', 'Nicaragua_');
var iSpeed = 100; // vitesse ecriture
var iIndex = 0; // demarrage ecriture
var iArrLength = aText[0].length; // longueur array
var iScrollAt = 20;

var iTextPos = 0; // initialise la position du texte
var sContents = '';
var iRow;

function afficherSpot() {
  header.setAttribute(
    'style',
    'background-image: url(' + spot[4].imgHeader + ');'
  );
  desc.innerHTML = `<p class="p7">${spot[4].description}</p>`;
}

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
  //animation du titre
  typewriter();
});
