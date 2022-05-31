// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img = document.getElementById("person-img");
const auteur = document.getElementById("author");
const travail = document.getElementById("job");
const texte = document.getElementById("info");

let itemInit = 3;

window.addEventListener("DOMContentLoaded", function() {
  
  const  item = reviews[itemInit];
  img.src = item.img;
  auteur.textContent = item.name;
  travail.textContent = item.job;
  texte.textContent = item.text; 
  
  console.log(author);
});
function suivant (){
  if (itemInit < 3){
    nouvelAvis(++itemInit);
  } else {
    itemInit = 0;
    nouvelAvis(itemInit);
  }
}
function precedent (){
  if (0 < itemInit ){
    nouvelAvis(--itemInit);
  } else {
    itemInit = 3;
    nouvelAvis(itemInit);
  }
}
function random (){
  itemInit = Math.floor(Math.random() * 4);
  nouvelAvis(itemInit);
}
function nouvelAvis(x){
  const  item1 = reviews[x];
  img.src = item1.img;
  auteur.textContent = item1.name;
  travail.textContent = item1.job;
  texte.textContent = item1.text; 
  
}
