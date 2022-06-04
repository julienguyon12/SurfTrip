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

//carousel
// function moveToSelected(element) {
//   if (element == 'next') {
//     var selected = $('.selected').next();
//   } else if (element == 'prev') {
//     var selected = $('.selected').prev();
//   } else {
//     var selected = element;
//   }
//   var next = $(selected).next();
//   var prev = $(selected).prev();
//   var prevSecond = $(prev).prev();
//   var nextSecond = $(next).next();

//   $(selected).removeClass().addClass('selected');

//   $(prev).removeClass().addClass('prev');
//   $(next).removeClass().addClass('next');

//   $(nextSecond).removeClass().addClass('nextRightSecond');
//   $(prevSecond).removeClass().addClass('prevLeftSecond');

//   $(nextSecond).nextAll().removeClass().addClass('hideRight');
//   $(prevSecond).prevAll().removeClass().addClass('hideLeft');
// }

// // Eventos teclado
// $(document).keydown(function (e) {
//   switch (e.which) {
//     case 37: // left
//       moveToSelected('prev');
//       break;

//     case 39: // right
//       moveToSelected('next');
//       break;

//     default:
//       return;
//   }
//   e.preventDefault();
// });

// $('#carousel div').click(function () {
//   moveToSelected($(this));
// });

// $('#prev').click(function () {
//   moveToSelected('prev');
// });

// $('#next').click(function () {
//   moveToSelected('next');
// });
