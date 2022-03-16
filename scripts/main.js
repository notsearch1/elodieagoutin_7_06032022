import{FilterFactory}from './factory/FilterFactory.js'
const list=document.querySelector('.list-wrapper')
const btnSearchGroup=document.querySelector('.btn-search-group')
const arrow=document.querySelectorAll('.fa-angle-down')
const searchBtn=document.querySelector('.btn-search')
const input= document.querySelector('.btn-search input')
// const utensilsBtn=document.getElementById('utensils')
// const appliancesBtn=document.getElementById('appliances')

let factory= new FilterFactory



arrow.forEach((i)=>i.addEventListener("click",(e)=>{
    e.target.parentNode.classList.toggle('btn-opened')
    btnSearchGroup.classList.toggle('group-opened')
    list.classList.toggle('list')
    e.target.classList.toggle('rotate')
    const liWrapper=document.querySelector('.list-wrapper')
    let liItem=document.querySelector(".list-block")
    if (liItem !== null){
        liWrapper.removeChild(document.querySelector('.list-block'))
    }
    let elementId=e.target.previousElementSibling.id
    switch(elementId){
        case 'ingredients':
            factory.displayElements(elementId)    
            list.style.backgroundColor="#0d6efd"
        break
            
        case 'appliances':
            factory.displayElements(elementId)
            list.style.backgroundColor="#68D9A4"
        break

        case 'utensils':
            factory.displayElements(elementId)
            list.style.backgroundColor="#dc3545"
        break

        default:
            console.log('format inconnu')

    }
    
}


))


