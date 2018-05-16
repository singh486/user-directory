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

//WRITE RENDERCOLOR FUNCTION WHEN ADDING THE COLORDIV

function renderColor(){
    const color = document.getElementById('form1').elements['favoriteColor'].value
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(item){
    const itemVal = document.getElementById('form1').elements[item].value
    const li = document.createElement('li')
    if(item == "userName"){
        li.textContent = `Name: ${itemVal}`
    }
    else if(item == "favoriteColor"){
        li.appendChild(renderColor())
    }
    else{
        li.textContent = `Age: ${itemVal}`
    }    
    return li
}

function renderList(){
    const list = document.createElement('ul')
    const colorItem = document.createElement('li')
    list.appendChild(renderListItem("userName"))
    list.appendChild(renderListItem("age"))
    colorItem.textContent = 'Favorite Color: '
    colorItem.appendChild(renderColor())
    list.appendChild(colorItem)
    return list
}

const changeHeaderButton = document.getElementById('headerChange')

function changeHeader(ev){
    ev.preventDefault()
    const f = ev.target
    //const age = f.age.value
    //const name = f.userName.value
    
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

    const user ={
        userName: f.userName.value,
        age: f.age.value,
        favoriteColor: renderColor(),
    }
    const labels = Object.keys(user)

    const list = document.createElement('ul')
    labels.forEach(function(label){
        const item = renderListItem(label)
        list.appendChild(item)
    })

    var past = document.getElementById('pastUsers')
    //past.innerHTML += `<p>${name}, ${age}</p>`
    past.appendChild(renderList())

    f.reset()
    //set cursor back to the name automatically
    f.userName.focus()
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