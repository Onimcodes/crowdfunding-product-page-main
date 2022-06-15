 const Mahogany = document.querySelector('#Mahogany-special')
 const confirmOption1 = document.querySelector('.continue')
 const confirmOption2 = document.querySelector('.continue2')
const confirmOption3 = document.querySelector('.continue3')
const bamboo = document.querySelector('#bamboo-stand')

 const btn1 = document.querySelector('#btn-1')
 const btn2 = document.querySelector('#btn-2')
 const btn3 = document.querySelector('#btn-3')


 const full = document.querySelector('.full')
const Black = document.querySelector('#Black-edition')
 
 Mahogany.addEventListener('change', (e) => {
  const card1 =  e.target.parentElement.parentElement.parentElement
  card1.classList.toggle('glow')
  if(confirmOption3.classList.contains('d-none')){
    confirmOption3.classList.remove('d-none')
    confirmOption1.classList.add('d-none')
    confirmOption2.classList.add('d-none')

  }
 })
 Black.addEventListener('change', (e)=> {
    const card2 =  e.target.parentElement.parentElement.parentElement
    card2.classList.toggle('glow')
    if(confirmOption2.classList.contains('d-none')){
       
        confirmOption2.classList.remove('d-none')
        confirmOption1.classList.add('d-none')
        confirmOption3.classList.add('d-none')

    }
    else{
        return
    }

 })
 bamboo.addEventListener('change', (e)=>{
    const card3 =  e.target.parentElement.parentElement.parentElement
    card3.classList.toggle('glow')
    if(confirmOption1.classList.contains('d-none')){
        confirmOption1.classList.remove('d-none')
        confirmOption2.classList.add('d-none')
        confirmOption3.classList.add('d-none')

    }
    else{
        return
    }
 })
 btn1.addEventListener('click', (e)=> {
    full.style.width = btn1.getAttribute('data-done') + '%'
    full.style.opacity = 1
})

 btn2.addEventListener('click', (e)=> {
     full.style.width = btn2.getAttribute('data-done') + '%'
     full.style.opacity = 1
 })
 btn3.addEventListener('click', (e)=> {
    full.style.width = btn3.getAttribute('data-done') + '%'
    full.style.opacity = 1
})
 
 

//  navbar toggle function 
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.mobile-menu')
 const HamBurger = document.querySelector('#HamBurger')
 const nav = document.querySelector('#nav-ul')
const cancel = document.querySelector('.cancel')
 HamBurger.addEventListener('click', () => {
     menu.style.display = 'block'
     navbar.style.display = 'none'
 })

 cancel.addEventListener('click', () => {
     menu.style.display = 'none'
     navbar.style.display = 'block'
 })