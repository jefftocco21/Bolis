const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    //toggle open class to turn menu icon into x and vice versa
    btn.classList.toggle('open')

    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

window.addEventListener('mouse', () => {
    btn = document.getElementById('menu-btn')
    if(event.target != btn) {
        
    }
})