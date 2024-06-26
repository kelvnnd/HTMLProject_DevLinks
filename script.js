function toggleMode() {    
    const html = document.documentElement
/*
    if (element.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
*/
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatark-light.png')
    } else {
        img.setAttribute('src', './assets/avatar-dark.png')
    }
}