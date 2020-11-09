const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const grayscale = document.querySelector('#grayscale');
const sepia = document.querySelector('#sepia');
const opacity = document.querySelector('#opacity');
const btN = document.querySelector('.button');
const imgTer = document.querySelector('.img__item');
const inputImage = document.querySelector('.img__link');

console.log( contrast.value)
const defaultT = {
    contrast: 100,
    brightness: 100,
    grayscale: 3,
    sepia: 4,
    opacity: 100
}

contrast.addEventListener('input', onIpput)
brightness.addEventListener('input', onIpput)
grayscale.addEventListener('input', onIpput)
sepia.addEventListener('input', onIpput)
opacity.addEventListener('input', onIpput)

btN.addEventListener('click', cleanFilter)

inputImage.addEventListener('change', inmNew)

function onIpput() {
    btN.disabled = false;
    imgTer.style.filter = `
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    grayscale(${grayscale.value}%)
    sepia(${ sepia.value}%)
    opacity(${opacity.value}%)
    `
}

function cleanFilter() {
    btN.disabled = true;

    imgTer.style.filter = `
    contrast(${defaultT.contrast}%)
    brightness(${defaultT.brightness}%)
    grayscale(${defaultT.grayscale}%)
    sepia(${defaultT.sepia}%)
    opacity(${defaultT.opacity}%)
    `
    contrast.value = defaultT.contrast;
    brightness.value = defaultT.brightness;
    grayscale.value = defaultT.grayscale;
    sepia.value = defaultT.sepia;
    opacity.value = defaultT.opacity;

}

function inmNew() {
    imgTer.src = inputImage.value
}