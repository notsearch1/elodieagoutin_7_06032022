import {recipes} from '../../data/recipes.js';


export class Filter{
    constructor(){
        this.btnSearch=document.querySelector('.btn-search')
    }
    getByIngredient(){
        let tabIngredients=[]
        let y
        for(let recipe of recipes){
            let ingredients=recipe.ingredients
                for(y=0; y<ingredients.length; y++){
                    tabIngredients.push(ingredients[y].ingredient)
                }  
        }
        const lowercased = tabIngredients.map(ingredient => ingredient.toLowerCase());
        let uniqueSet=lowercased.filter((item, index)=>{return lowercased.indexOf(item) === index})
        console.log(uniqueSet)
        return uniqueSet
    }
    
    getByUstensil(){
        let tabUstensils=[]
        let tab=[]
        let i
        let y=0
        
        for(let recipe of recipes){
            tabUstensils.push(recipe.ustensils)
        }
    
        tab[0]=tabUstensils[0].concat(tabUstensils[1])
    
        for(i=0; i<=tabUstensils.length; i++){
            if(y<tabUstensils.length-1){
                y=i+1
                tab[y]=tab[i].concat(tabUstensils[y])
            }
        }   
        const uniqueSet= new Set(tab[y])
        const backToArray=[...uniqueSet]
        return backToArray
    }
    
    getByAppliance(){
        let tabAppliance=[]  
        for(let recipe of recipes){
            tabAppliance.push(recipe.appliance)
        }
    
        
        const uniqueSet= new Set(tabAppliance)
        const backToArray=[...uniqueSet]
        console.log(backToArray)
    }
}

