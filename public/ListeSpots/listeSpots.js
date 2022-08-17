const spinner = document.getElementById('spinner');
const titreSpans = document.querySelectorAll('h1 span');
const nicaragua = document.getElementById('nicaragua');
const panama = document.getElementById('panama');
const costa = document.getElementById('costa');
const ecuateur = document.getElementById('ecuateur');
const perou = document.getElementById('perou');
const indo = document.getElementById('indo');
const btnGauche = document.getElementById('btn-gauche');
const btnDroit = document.getElementById('btn-droit');
const sectionSpot = document.getElementById('section-spot');
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
var cardSelect = 0;
var angle = 0;
var i = 0; //compteur

//increment angle de 60 deg
function ajouterAngle() {
  angle = angle + 60;
  //compteur pour cacher l'element au fond
  if (i < 5) {
    i += 1;
  } else {
    i = 0;
  }
  tourner();
  return angle;
}

//decrement angle de 60 deg
function retirerAngle() {
  angle = angle - 60;
  //compteur pour cacher l'element au fond
  if (i <= 0) {
    i = 5;
  } else {
    i -= 1;
  }
  tourner();
  return angle;
}

// applique l'angle
function tourner() {
  spinner.setAttribute(
    'style',
    '-webkit-transform: rotateY(' +
      angle +
      'deg); -moz-transform: rotateY(' +
      angle +
      'deg); transform: rotateY(' +
      angle +
      'deg);'
  );
  cacher();
}
//cache l'element en arriere plan
function cacher() {
  if (i === 0) {
    costa.classList.remove('cacher');
    ecuateur.classList.add('cacher');
    perou.classList.remove('cacher');
  } else if (i === 1) {
    ecuateur.classList.remove('cacher');
    perou.classList.add('cacher');
    indo.classList.remove('cacher');
  } else if (i === 2) {
    perou.classList.remove('cacher');
    indo.classList.add('cacher');
    nicaragua.classList.remove('cacher');
  } else if (i === 3) {
    indo.classList.remove('cacher');
    nicaragua.classList.add('cacher');
    panama.classList.remove('cacher');
  } else if (i === 4) {
    nicaragua.classList.remove('cacher');
    panama.classList.add('cacher');
    costa.classList.remove('cacher');
  } else if (i === 5) {
    panama.classList.remove('cacher');
    costa.classList.add('cacher');
    ecuateur.classList.remove('cacher');
    indo.classList.add('hovered');
  }
  montrer();
}
//Applique la classe card sur l'element en premier plan
function montrer() {
  if (i === 0) {
    indo.classList.remove('hovered');
    nicaragua.classList.add('hovered');
    panama.classList.remove('hovered');
  } else if (i === 1) {
    nicaragua.classList.remove('hovered');
    panama.classList.add('hovered');
    costa.classList.remove('hovered');
  } else if (i === 2) {
    panama.classList.remove('hovered');
    costa.classList.add('hovered');
    ecuateur.classList.remove('hovered');
  } else if (i === 3) {
    costa.classList.remove('hovered');
    ecuateur.classList.add('hovered');
    perou.classList.remove('hovered');
  } else if (i === 4) {
    ecuateur.classList.remove('hovered');
    perou.classList.add('hovered');
    indo.classList.remove('hovered');
  } else if (i === 5) {
    perou.classList.remove('hovered');
    indo.classList.add('hovered');
    nicaragua.classList.remove('hovered');
  }
  selectPays();
}
//Reduction du click a l'element au premier plan
function selectPays() {
  if (i === 0) {
    cardSelect = document.getElementById('nicaragua');
  } else if (i === 1) {
    cardSelect = document.getElementById('panama');
  } else if (i === 2) {
    cardSelect = document.getElementById('costa');
  } else if (i === 3) {
    cardSelect = document.getElementById('ecuateur');
  } else if (i === 4) {
    cardSelect = document.getElementById('perou');
  } else if (i === 5) {
    cardSelect = document.getElementById('indo');
  }
  cardSelect.addEventListener('click', function () {
    afficherspot();
  });
}
//creer la page du pays ou seront insere les items spots par la suite
function afficherspot() {
  sectionSpot.innerHTML = `<h2 id="spotView">Mes Spots</h2>
    <div class="card-map"><img src="${listePays[i].cartespot}" alt="" class="img-carte"></div>
    <div class="container-spot zoom" id="containerSpot">
    </div>`;
  filtreSpot();
}
//filtre la liste des spots pour ne recuperer que les items du pays
function filtreSpot() {
  var pays = ''; // variable pour filtrer les pays
  pays = listePays[i].title;
  const spotPays = spot.filter(function (spotItem) {
    if (spotItem.pays === pays) {
      return spotItem;
    }
  });
  creationItem(spotPays);
}
// affiche dans le fichier html les items spots
function creationItem(spotItems) {
  const containerSpot = document.getElementById('containerSpot');
  let listeItems = spotItems.map(function (item) {
    return `<div class="card-item ${item.class}" id="item1">
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
  document.getElementById('spotView').scrollIntoView({ behavior: 'smooth' });
}
//menu burger
function toggleMenu() {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });
}
toggleMenu();
function eventListeners() {
  btnDroit.addEventListener('click', function () {
    ajouterAngle();
  });
  btnGauche.addEventListener('click', function () {
    retirerAngle();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  cacher();
  eventListeners();
  //animation du titre
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(titreSpans, 1, { opacity: 0, ease: 'power2.out' }, 0.5);
  TL.play();
});
