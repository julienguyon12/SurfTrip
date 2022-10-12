const valiseDetail = [
  {
    id: 1,
    title: `Mes vêtements`,
    item1: `2 shorts`,
    item2: `1 jean`,
    item3: `3 t-shirts`,
    item4: `2 pulls`,
    item5: `1 veste de pluie `,
    item6: `3 paires de chaussettes`,
    item7: `5 caleçons `,
    item8: `1 serviette microfibre`,
    item9: ``,
    item10: ``,
    item11: ``,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Le plus important en faisant son sac c'est de ne pas trop se charger. Si le sac est trop lourd les déplacements seront pénibles et vous serez déjà assez chargé avec l'équipement surf. Si il vous manque quelque chose vous pourrez toujours acheter sur place et ramener des souvenirs. `,
    img: '../img/valise/vetement.JPG',
  },
  {
    id: 2,
    title: `Mon sac`,
    item1: `Sac Forclaz 70L + 1 sac 20L`,
    item2: `1 sac à dos de ville`,
    item3: `Saccoche de protection d'ordinateur `,
    item4: ``,
    item5: ``,
    item6: ``,
    item7: ``,
    item8: ``,
    item9: ``,
    item10: ``,
    item11: ``,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Il est important d'avoir un bon sac avec beaucoup de rangements. En effet la plupart du temps dans les dortoirs vous ne pourrez pas vous éparpiller. Il est donc important d'avoir un sac pratique. J'ai choisi un grand sac de 70L afin de pouvoir faire mon sac rapidement sans toujours rouler mes vêtements et pour ramener des souvenirs. `,
    img: '../img/valise/sac.JPG',
  },
  {
    id: 3,
    title: `Mes accessoires électronique`,
    item1: `Ordinateur`,
    item2: `Enceinte portative`,
    item3: `Ecouteurs`,
    item4: `Telephone`,
    item5: `Adaptateur internationale`,
    item6: `Clef usb`,
    item7: ``,
    item8: ``,
    item9: ``,
    item10: ``,
    item11: ``,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Selon vos hobbies l'équipement électronique peut peser lourd. Il est donc important de bien l'anticiper. L'ordinateur est loin d'etre indispensable il est plutot encombrant et peu securisant. Je suis partie sans et l'ai acheté pendant mon voyage quand j'ai décidé de me reconvertir dans le developpement web. De manière générale l'électronique est moins cher à l'étranger j'ai ainsi également acheté mon enceinte et mes écouteurs sur place.`,
    img: '../img/valise/electronique.JPG',
  },
  {
    id: 4,
    title: `Mes chaussures`,
    item1: `1 paire de randos`,
    item2: `1 paire de baskets`,
    item3: `1 pair de tongs`,
    item4: ``,
    item5: ``,
    item6: ``,
    item7: ``,
    item8: ``,
    item9: ``,
    item10: ``,
    item11: ``,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Pensez à prendre de bonnes chaussures de marche. Les bonnes chaussures sont difficiles à trouver surtout que dans de nombreux pays le 43 est considéré comme une grande taille.`,
    img: '../img/valise/chaussure.JPG',
  },
  {
    id: 5,
    title: `Mon équipement`,
    item1: `Planche de surf`,
    item2: `Board bag`,
    item3: `Wax`,
    item4: `Stick solaire`,
    item5: `Résine Solarez `,
    item6: `Papier pons`,
    item7: `Fibre de verre`,
    item8: `Squeegee`,
    item9: `Leash`,
    item10: `Derrives`,
    item11: `Pochette type surf system`,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Ne pas oublier de prendre un bon stick solaire, en effet il est souvent difficile d'en trouver dans des endroits reculés. Egalement le kit de réparations est fortement recommandé sachant qu'il est presque impossible de trouver de la résine en dehors des grandes villes. Pour la planche de surf j'ai choisi l'option d'acheter sur place afin d'éviter de payer des frais de compagnie aerienne ainsi que la casse.`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 6,
    title: `Pharmacie`,
    item1: `Saccoche`,
    item2: `Hammac compacte`,
    item3: `Sac à viande`,
    item4: `Cadenas à code`,
    item5: `Couteau suisse`,
    item6: `Frontale`,
    item7: `Livre`,
    item8: `Anti moustique`,
    item9: ``,
    item10: ``,
    item11: ``,
    item12: ``,
    item13: ``,
    item14: ``,
    item15: ``,
    pconseil: `Les cadenas à codes sont tres pratiques. La plupart des auberges de jeunesses ont des lockers mais pas de cadenas. Egalement les petites saccoches discrètes sont indispensables pour garder sur soi passport et une partie de son argent en particulier dans les transports. Le couteau suisse, trés utile pour ouvrir les bouteilles de vins.`,
    img: '../img/valise/accessoire.JPG',
  },
];
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const accroche = document.getElementById('accroche');
const accroche2 = document.getElementById('accroche2');
var i = 0; //compteur pour recuperation id
var n = 0; //compteurs eventListeners() pour eviter boucle
var p = 0;
window.addEventListener('load', () => {
  accroche.classList.add('loaded');
  accroche2.classList.add('loaded');
});
function creerValiseInterieur() {
  var sectionValise = document.getElementById('section-valise');
  const retourValise = document.getElementById('btn-retour');
  if (retourValise === null) {
    sectionValise.innerHTML += `<div class="container-valise-interieur " id="container-valise-interieur">
                    <div class="flex-icon-retour" id="btn-retour">
                        <div class="icon-retour" >
                            <div class="arrow">
                            </div>
                        </div>
                    </div>
                    <div class="container-valise-image zoom" >
                        
                        <div id="vetement" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>es <span>v</span>êtements</h5>
                            <img src="../img/valise/vetement.JPG" alt="" class="valise-image">
                        </div>
                        <div id="sac" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>on <span>s</span>ac</h5>
                            <img src="../img/valise/sac.JPG" alt="" class="valise-image">
                        </div>
                        <div id="electronique" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>on <span>m</span>atériel <span>e</span>lectronique</h5>
                            <img src="../img/valise/electronique.JPG" alt="" class="valise-image">
                        </div>
                        <div id="chaussures" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>es <span>c</span>haussures</h5>
                            <img src="../img/valise/chaussure.JPG" alt="" class="valise-image">
                        </div>
                        <div id="equipement" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>on <span>é</span>quipement <span>s</span>urf</h5>
                            <img src="../img/valise/equipementsurf.JPG" alt="" class="valise-image">
                        </div>
                        <div id="accessoires" class="contenu-valise">
                            <h5 class="valise-title"><span>M</span>es <span>a</span>ccessoires</h5>
                            <img src="../img/valise/accessoire.JPG" alt="" class="valise-image">
                        </div>
                    </div>
                </div>`;
    setTimeout(translater, 1);
  } else {
    n += 1;
    setTimeout(translater, 1);
  }
}
function translater() {
  var valiseGlobale = document.getElementById('container-valise-globale');
  var sectionValise = document.getElementById('container-valise-interieur');
  valiseGlobale.classList.add('translatsection');
  sectionValise.classList.add('translatsection');
  if (n < 1) {
    eventListeners();
  }
}

function sortirValiseInterieur() {
  var sectionValise = document.getElementById('container-valise-interieur');
  var valiseGlobale = document.getElementById('container-valise-globale');
  sectionValise.classList.remove('translatsection');
  valiseGlobale.classList.remove('translatsection');
}
function creerValiseInterieurDetail() {
  var sectionValise = document.getElementById('section-valise');
  var retourValiseInterieur = document.getElementById('btn-retour-detail');
  if (retourValiseInterieur === null) {
    sectionValise.innerHTML += `<div class="boite-valise-detail" id="boite-valise-detail">
                    <div class="flex-icon-retour" id="btn-retour-detail">
                        <div class="icon-retour" >
                            <div class="arrow">
                            </div>
                        </div>
                    </div>
                    <div class="boite-valise" id="boite-valise">
                      <img src="${valiseDetail[i].img}" alt="" class="image-valise-detail">
                      <div class="container-equipement">
                          <h5 class="titre-valise-detail">${valiseDetail[i].title}</h5>
                          <div class="container-liste-equipement">
                            <div>${valiseDetail[i].item1}</div>
                            <div>${valiseDetail[i].item2}</div>
                            <div>${valiseDetail[i].item3}</div>
                            <div>${valiseDetail[i].item4}</div>
                            <div>${valiseDetail[i].item5}</div>
                            <div>${valiseDetail[i].item6}</div>
                            <div>${valiseDetail[i].item7}</div>
                            <div>${valiseDetail[i].item8}</div>
                            <div>${valiseDetail[i].item9}</div>
                            <div>${valiseDetail[i].item10}</div>
                            <div>${valiseDetail[i].item11}</div>
                            <div>${valiseDetail[i].item12}</div>
                            <div>${valiseDetail[i].item13}</div>
                            <div>${valiseDetail[i].item14}</div>
                            <div>${valiseDetail[i].item15}</div>
                          </div>
                      </div>
                      <div class="container-conseil">
                          <h5 class="titre-valise-detail">Mon conseil</h5>
                          <p class="p-valise-detail">${valiseDetail[i].pconseil}</p>
                      </div>
                    <div>
                </div>`;
    setTimeout(translaterGlobale200, 1);
  } else {
    var sectionBoite = document.getElementById('boite-valise');
    sectionBoite.innerHTML = `
                    <img src="${valiseDetail[i].img}" alt="" class="image-valise-detail">
                    <div class="container-equipement">
                        <h5 class="titre-valise-detail">${valiseDetail[i].title}</h5>
                          <div class="container-liste-equipement">
                            <div>${valiseDetail[i].item1}</div>
                            <div>${valiseDetail[i].item2}</div>
                            <div>${valiseDetail[i].item3}</div>
                            <div>${valiseDetail[i].item4}</div>
                            <div>${valiseDetail[i].item5}</div>
                            <div>${valiseDetail[i].item6}</div>
                            <div>${valiseDetail[i].item7}</div>
                            <div>${valiseDetail[i].item8}</div>
                            <div>${valiseDetail[i].item9}</div>
                            <div>${valiseDetail[i].item10}</div>
                            <div>${valiseDetail[i].item11}</div>
                            <div>${valiseDetail[i].item12}</div>
                            <div>${valiseDetail[i].item13}</div>
                            <div>${valiseDetail[i].item14}</div>
                            <div>${valiseDetail[i].item15}</div>
                          </div>
                    </div>
                    <div class="container-conseil">
                        <h5 class="titre-valise-detail">Mon conseil</h5>
                        <p class="p-valise-detail">${valiseDetail[i].pconseil}</p>
                    </div>
                `;
    p += 1;
    setTimeout(translaterGlobale200, 1);
  }
}
function translaterGlobale200() {
  var valiseGlobale = document.getElementById('container-valise-globale');
  var sectionValise = document.getElementById('container-valise-interieur');
  var sectionValiseDetail = document.getElementById('boite-valise-detail');
  valiseGlobale.classList.add('translatsection-valise');
  sectionValise.classList.add('translatsection-valise');
  sectionValiseDetail.classList.add('translatsection-valise');
  if (p < 1) {
    eventListeners();
  }
}
function sortirValiseInterieurDetail() {
  var sectionValise = document.getElementById('container-valise-interieur');
  var valiseGlobale = document.getElementById('container-valise-globale');
  var sectionValiseDetail = document.getElementById('boite-valise-detail');
  sectionValise.classList.remove('translatsection-valise');
  valiseGlobale.classList.remove('translatsection-valise');
  sectionValiseDetail.classList.remove('translatsection-valise');
  // eventListeners();
}

function eventListeners() {
  const listeValise = document.getElementById('image-valise');
  const retourValise = document.getElementById('btn-retour');
  const vetement = document.getElementById('vetement');
  const sac = document.getElementById('sac');
  const electronique = document.getElementById('electronique');
  const chaussures = document.getElementById('chaussures');
  const equipement = document.getElementById('equipement');
  const accessoires = document.getElementById('accessoires');
  var retourValiseDetail = document.getElementById('btn-retour-detail');
  listeValise.addEventListener('click', function () {
    creerValiseInterieur();
  });
  listeValise.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      creerValiseInterieur();
    }
  });
  if (retourValise != null) {
    retourValise.addEventListener('click', function () {
      sortirValiseInterieur();
    });
    retourValise.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sortirValiseInterieur();
      }
    });
    vetement.addEventListener('click', function () {
      i = 0;
      creerValiseInterieurDetail();
    });
    vetement.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        creerValiseInterieurDetail();
      }
    });
    sac.addEventListener('click', function () {
      i = 1;
      creerValiseInterieurDetail();
    });
    sac.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        i = 1;
        creerValiseInterieurDetail();
      }
    });
    electronique.addEventListener('click', function () {
      i = 2;
      creerValiseInterieurDetail();
    });
    electronique.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        i = 2;
        creerValiseInterieurDetail();
      }
    });
    chaussures.addEventListener('click', function () {
      i = 3;
      creerValiseInterieurDetail();
    });
    chaussures.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        i = 3;
        creerValiseInterieurDetail();
      }
    });
    equipement.addEventListener('click', function () {
      i = 4;
      creerValiseInterieurDetail();
    });
    equipement.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        i = 4;
        creerValiseInterieurDetail();
      }
    });
    accessoires.addEventListener('click', function () {
      i = 5;
      creerValiseInterieurDetail();
    });
    accessoires.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        i = 5;
        creerValiseInterieurDetail();
      }
    });
  }
  if (retourValiseDetail != null) {
    retourValiseDetail.addEventListener('click', function () {
      sortirValiseInterieurDetail();
    });
    retourValise.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sortirValiseInterieurDetail();
      }
    });
  }
}
//menu burger
function toggleMenu() {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });
}
toggleMenu();
window.addEventListener('DOMContentLoaded', function () {
  eventListeners();
});
