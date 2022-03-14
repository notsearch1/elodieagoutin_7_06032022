import{Filter}from '../utils/filter.js'

export class FilterFactory{
    constructor(){

    }


    displayIngredients(){
        const listIngredients=document.querySelector('.list')
        let filter= new Filter()
        let ingredients=filter.getByIngredient()
        for(let ingredient of ingredients){
            console.log(ingredient)
            const listItem=document.createElement('li')
            listItem.textContent=ingredient
            listItem.classList.add('list-item')
            listIngredients.appendChild(listItem)
        }
    }

    displayUstensils(){
        const list=document.querySelector('.list')
        let filter= new Filter()
        let ustensils=filter.getByUstensil()
        console.log(ustensils)
        for(let ustensil of ustensils){
            console.log(ustensil)
            const listItem=document.createElement('li')
            listItem.textContent=ustensil
            listItem.classList.add('list-item')
            list.appendChild(listItem)
        }
    }





}