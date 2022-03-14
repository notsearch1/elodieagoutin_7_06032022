import{FilterFactory}from './factory/FilterFactory.js'
const list=document.querySelector('.list')
const btnSearchGroup=document.querySelector('.btn-search-group')
const arrow=document.querySelector('.fa-angle-down')
const searchAllBtn=document.querySelectorAll('.btn-search')
const input= document.querySelector('.btn-search input')
// const utensilsBtn=document.getElementById('utensils')
// const appliancesBtn=document.getElementById('appliances')

let factory= new FilterFactory
factory.displayIngredients()
factory.displayUstensils()

searchAllBtn.forEach((btn)=>btn.addEventListener("click",(e)=>{
    console.log(e.target)
    e.target.classList.toggle('btn-opened')
    input.classList.toggle('semi-radius')
    btnSearchGroup.classList.toggle('group-opened')
    list.classList.toggle('list')
    arrow.classList.toggle('rotate')
}


))


