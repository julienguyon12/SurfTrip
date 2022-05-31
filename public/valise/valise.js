const valiseDetail = [
  {
    id: 1,
    pEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 2,
    pEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 3,
    tpEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 4,
    pEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 5,
    pEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
  {
    id: 6,
    pEquipement: `lorem wedhu wedhjd fj`,
    pconseil: `lorem wedhFu wedhjd fsdaFVwesfj`,
    img: '../img/valise/equipementsurf.JPG',
  },
];
var i = 0; //compteur pour recuperation id
var n = 0; //compteurs eventListeners() pour eviter boucle
var p = 0;
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
                            <h5 class="valise-title">Mes vetements</h5>
                            <img src="../img/valise/vetement.JPG" alt="" class="valise-image">
                        </div>
                        <div id="sac" class="contenu-valise">
                            <h5 class="valise-title">Mon sac</h5>
                            <img src="../img/valise/sac.JPG" alt="" class="valise-image">
                        </div>
                        <div id="electronique" class="contenu-valise">
                            <h5 class="valise-title">Mon materiel electronique</h5>
                            <img src="../img/valise/electronique.JPG" alt="" class="valise-image">
                        </div>
                        <div id="chaussures" class="contenu-valise">
                            <h5 class="valise-title">Mes chaussures</h5>
                            <img src="../img/valise/chaussure.JPG" alt="" class="valise-image">
                        </div>
                        <div id="equipement" class="contenu-valise">
                            <h5 class="valise-title">Mon equipement surf</h5>
                            <img src="../img/valise/equipementsurf.JPG" alt="" class="valise-image">
                        </div>
                        <div id="accessoires" class="contenu-valise">
                            <h5 class="valise-title">Mes accessoires</h5>
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
                          <h5 class="titre-valise-detail">Mon équipement</h5>
                          <p class="p-valise-detail">${valiseDetail[i].pEquipement}</p>
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
                        <h5 class="titre-valise-detail">Mon équipement</h5>
                        <p class="p-valise-detail">${valiseDetail[i].pEquipement}</p>
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
  console.log(p);
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

window.addEventListener('DOMContentLoaded', function () {
  eventListeners();
});
