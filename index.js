const button = document.querySelector('button.greeting')

function changeText(ev){
    ev.target.textContent = 'Clickity click'
}

const h1Button = document.getElementById('h1')
const header1 = document.getElementById('header1')
function changeH1(){
    header1.textContent = 'h1 has changed!'
}

const h2Button = document.getElementById('h2')
const header2 = document.getElementById('header2')
function changeH2(){
    header2.textContent = 'h2 has changed!'
}

const h3Button = document.getElementById('h3')
const header3 = document.getElementById('header3')
function changeH3(){
    header3.textContent = 'h3 has changed!'
}

const h4Button = document.getElementById('h4')
const header4 = document.getElementById('header4')
function changeH4(){
    header4.textContent = 'h4 has changed!'
}


const changeHeaderButton = document.getElementById('headerChange')
function changeHeader(ev){
    ev.preventDefault()
    var newTitle = document.getElementById('form1').elements[0].value
    var choice = document.getElementById('headerChoice')
    var chosen = choice.options[choice.selectedIndex].value;
    if(newTitle == ""){
        newTitle = 'You entered nothing!'
    }
    switch(chosen){
        case "h1":
            header1.textContent = newTitle
            break
        case "h2":
            header2.textContent = newTitle
            break
        case "h3":
            header3.textContent = newTitle
            break
        case "h4":
            header4.textContent = newTitle
            break
    }
    document.getElementById('form1').elements[0].value = ''
}

const backgroundButton = document.getElementById('colorChange')
function changeBackground(){
    var r = Math.ceil(Math.random()*255)
    var g = Math.ceil(Math.random()*255)
    var b = Math.ceil(Math.random()*255)
    var rgb = 'rgb('+r+','+g+','+b+')'
    document.body.style.background = rgb
}

const form = document.querySelector('#form1')
form.addEventListener('submit', changeHeader)

button.addEventListener('click', changeText)
h1Button.addEventListener('click', changeH1)
h2Button.addEventListener('click', changeH2)
h3Button.addEventListener('click', changeH3)
h4Button.addEventListener('click', changeH4)
//changeHeaderButton.addEventListener('click', changeHeader)
backgroundButton.addEventListener('click', changeBackground)