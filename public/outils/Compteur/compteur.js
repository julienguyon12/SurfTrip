var compteurVal = 0;
function augmente(){
    compteurF(++compteurVal);
    console.log(compteurVal)
}
function diminue(){
    compteurF(--compteurVal);
}
function reset(){
    compteurVal = 0;
    compteurF(compteurVal);
}

function compteurF(compteurVal){
    document.getElementById("compteur").innerHTML = compteurVal;
}