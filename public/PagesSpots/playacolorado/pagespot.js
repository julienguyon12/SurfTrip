// initialise le texte a ecrire, chaque item de l'array est une nouvelle ligne
var aText = new Array('Playa Colorado', 'Nicaragua_');
var iSpeed = 100; // vitesse ecriture
var iIndex = 0; // demarrage ecriture
var iArrLength = aText[0].length; // longueur array
var iScrollAt = 20;

var iTextPos = 0; // initialise la position du texte
var sContents = '';
var iRow;

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

typewriter();
