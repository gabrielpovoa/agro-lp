const menumobile = document.getElementById('mobile')
const menu = document.querySelector('.menu')

const countryOutput = document.getElementById('country-input')
const countryName = document.getElementById('country')

let countryNameResult = countryName.getAttribute('data-name')

countryOutput.innerHTML = countryNameResult

menumobile.onclick = () => {
    menu.classList.toggle('active')
}