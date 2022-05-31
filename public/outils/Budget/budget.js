class UI{
    constructor(){
        this.AlertBudgetForm = document.querySelector(".alert-section1");
        this.AlertDepenseForm = document.querySelector(".alert-section2");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetMontant = document.getElementById("budget-montant");
        this.budgetSubmit = document.getElementById("budget-submit");
        this.depenseForm = document.getElementById("depense-form");
        this.depenseNom = document.getElementById("depense-nom");
        this.depenseMontant = document.getElementById("depense-montant");
        this.depenseSubmit = document.getElementById("depense-submit");
        this.budgetTotal = document.getElementById("budget-total");
        this.depenseTotal = document.getElementById("depense-total");
        this.balance = document.getElementById("balance");
        this.budget = document.getElementById("budget");
        this.depense = document.getElementById("depense");
        this.bal = document.getElementById("bal");
        this.list = document.getElementById("list");
        this.itemList = [];
        this.itemId = 0; 
    }
    // envoie du budget
    submitBudgetForm(){
        const value = this.budgetMontant.value;
        if(value === '' || value < 0){
            this.AlertBudgetForm.classList.add("showItem");
            this.AlertBudgetForm.innerHTML = '<p> La valeur ne peut etre vide ou negative </p>';
            const self = this;
            setTimeout(function(){
                self.AlertBudgetForm.classList.remove("showItem");
            }, 4000);        
        }
        else{
            this.budgetTotal.textContent = value;
            this.budgetMontant.value = '';
            this.showBalance();
        }        
    }
// Modif balance
    showBalance(){
        const valueBudget = this.budgetTotal.textContent;
        const valueDepense = this.calculDepense();
        var valueBalance = parseInt(valueBudget) - valueDepense;
        this.balance.textContent = valueBalance;
        if(valueBalance<0){
            this.bal.classList.remove("showBlack" , "showGreen");
            this.bal.classList.add("showRed");
        }
        else{
            this.bal.classList.remove("showBlack" , "showRed");
            this.bal.classList.add("showGreen");
        }
    }
// Envoie des depense
    submitDepenseForm(){
        const depenseValue = this.depenseMontant.value;
        const depenseN = this.depenseNom.value;
        
        
        if(depenseValue === '' || depenseValue < 0 ){
            this.AlertDepenseForm.classList.add("showItem");
            this.AlertDepenseForm.innerHTML = '<p> La valeur ne peut etre vide ou negative </p>';
            const self = this;
            setTimeout(function(){
                self.AlertDepenseForm.classList.remove("showItem");
            }, 4000);            
        }
        else if (depenseN === ''){
            this.AlertDepenseForm.classList.add("showItem");
            this.AlertDepenseForm.innerHTML = '<p> Veuillez entrer un nom de depense </p>';
            const self = this;
            setTimeout(function(){
                self.AlertDepenseForm.classList.remove("showItem");
            }, 4000);
        }
        else{
            let montant = parseInt(depenseValue);
            this.depenseMontant.value = '';
            this.depenseNom.value = '';
            let depense = {
                id:this.itemId,
                titre:depenseN,
                montant:montant,
            }
            this.itemId++;
            this.itemList.push(depense);
            this.ajouterDepense(depense); 
            this.showBalance();
        }       
    }
    ajouterDepense(depense){
        const div = document.createElement('div');
        div.classList.add('depense');
        div.innerHTML = `<div class="containerflex"></div>
                            <h6 class="itemlist">${depense.titre}</h6>
                            <h6 class="itemlist">${depense.montant}</h6>
                            <button class="itemlist btnmodifier" data-id="${depense.id}"> modifier</button>
                            <button class="itemlist btnsupprimer" data-id="${depense.id}"> supprimer </button>
                        </div>`
                    
        this.list.appendChild(div)
        
    }    
// Calcul depense
    calculDepense(){
        let total = 0;
        if (this.itemList.length > 0){
            total = this.itemList.reduce(function(acc,curr){
                acc += curr.montant;
                return acc;
            },0);
            this.depenseTotal.textContent = total;
            return total;
            
        }
        else{
            this.depenseTotal.textContent = total;
            return total;
        }  
    }
// Modifier la liste
    editerListe(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement;
        // Retirer du dom la depense
        this.list.removeChild(parent);
        // Retirer de la liste la depense
        let depense = this.itemList.filter(function(item){
            return item.id == id;
        })
        let proList = this.itemList.filter(function(item){
            return item.id != id;
        })
        this.itemList = proList;
        this.depenseMontant.value = depense[0].montant;
        this.depenseNom.value = depense[0].titre;
        this.showBalance();

    }
    supprimerListe(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement;
        // Retirer du dom la depense
        this.list.removeChild(parent);
        // Retirer de la liste la depense
        let depense = this.itemList.filter(function(item){
            return item.id == id;
        })
        let proList = this.itemList.filter(function(item){
            return item.id != id;
        })
        this.itemList = proList;
        this.showBalance();
    }
}
function eventListeners (){
const budgetForm = document.getElementById("budget-form");
const depenseForm = document.getElementById("depense-form");
const list = document.getElementById("list");
const ui = new UI ();
budgetForm.addEventListener('submit' , function(event){
    event.preventDefault();
    ui.submitBudgetForm();
});
depenseForm.addEventListener('submit' , function(event){
    event.preventDefault();
    ui.submitDepenseForm();
});
list.addEventListener('click' , function(event){
    if(event.target.classList.contains('btnmodifier')){
        ui.editerListe(event.target);
    }
    else if(event.target.classList.contains('btnsupprimer')){
        ui.supprimerListe(event.target);
    }
});
}

document.addEventListener('DOMContentLoaded' , function(){
    eventListeners()
});
