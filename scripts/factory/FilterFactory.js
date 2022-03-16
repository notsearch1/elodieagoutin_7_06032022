import{Filter}from '../utils/filter.js'

export class FilterFactory{
    constructor(){

    }

    displayElements(elementId){
        const listWrapper=document.querySelector('.list-wrapper')
        const ul=document.createElement('ul') 
        ul.classList.add('list-block') 
        let elements=this.filterElements(elementId)
        for(let element of elements){
            const li=document.createElement('li')
            li.textContent=element
            li.classList.add('list-item')
            ul.appendChild(li)
        }
        listWrapper.appendChild(ul)
    }


    filterElements(elementId){
        let filter= new Filter()
        if(elementId == 'ingredients'){
        let elements=filter.getByIngredient()
        return elements
    }else if(elementId =='utensils'){
        let elements=filter.getByUstensil()
        return elements
    }else if(elementId ==='appliances'){
        let elements=filter.getByAppliance()
        return elements
    }else{
        throw 'Unknown'
    }
    }
    
    
    



}