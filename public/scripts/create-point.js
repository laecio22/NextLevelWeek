/*document
        .querySelector("select[name=uf]")
        .addEventListener("change", () => {
         console.log("mudei");
})*/

function populateUFs(){
        const ufSelect = document
        .querySelector("select[name=uf]");
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then(states => {
           for (const state of states){
                ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
           }
           
        })
}

populateUFs();

function getCities(event){
        const citieSelect =  document
        .querySelector("select[name=city]")
        const stateInput =  document
        .querySelector("input[name=state]")

        const ufValue = event.target.value;
        const indexOfSelectedState = event.target.selectedIndex;
        stateInput.value = event.target.options[indexOfSelectedState].text;
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

        citieSelect.innerHTML = "<option value>Selecione a cidade</option>";
        citieSelect.disabled = true;

        fetch(url)
        .then( res => res.json())
        .then(cities => {
           for (const city of cities){
                citieSelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`
           }
           citieSelect.disabled = false;
           
        })
}

document
      .querySelector("select[name=uf]")
      .addEventListener("change", getCities)



//Itens de coleta
//pegar todos os lis

const itensCollect = document.querySelectorAll(".itens-grid li")

for(const item of itensCollect){
        item.addEventListener("click",handleSelectedItem)

}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems =[]
function handleSelectedItem (event){
        //adicionar ou remover uma classe
     const itemLi = event.target
     itemLi.classList.toggle("selected")
     const itemId = event.target.dataset.id;
     

     //verificar se existem items selecionados se sim pega os itens selcionados
     const alreadySelected = selectedItems.findIndex(item => {
             const itemFound = item === itemId
             return itemFound
     })
     // se ja estiver selecionado 

     if (alreadySelected >= 0){
        //,tirar da selacao
        const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != itemId//false
                return itemIsDifferent 
        })
        selectedItems = filteredItems
     } else {
          // se não estiver selecionado, adicionar a selecao
          selectedItems.push(itemId)
     }
     
     //atualizar o campo escondido com os itens selcionados
    collectedItems.value = selectedItems
}