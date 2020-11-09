const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const grayscale = document.querySelector('#grayscale');
const sepia = document.querySelector('#sepia');
const opacity = document.querySelector('#opacity');
const imge = document.querySelector('.img__item');
const btn = document.querySelector('.button');
const inputImg = document.querySelector('.img__link');

const defaults = {
    contrast: 100,
    brightness: 100,
    grayscale: 3,
    sepia: 4,
    opacity: 100
}

contrast.addEventListener('input', onChange);
brightness.addEventListener('input', onChange);
grayscale.addEventListener('input', onChange);
sepia.addEventListener('input', onChange);
opacity.addEventListener('input', onChange);

btn.addEventListener('click', btnClick)

inputImg.addEventListener('change', updateImage)

function onChange() {
    btn.disabled = false;
    imge.style.filter = `
    sepia(${sepia.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    grayscale(${grayscale.value}%)
    opacity(${opacity.value}%)
    `
}

function btnClick() {

    imge.style.filter = `
    sepia(${defaults.sepia}%)
    contrast(${defaults.contrast}%)
    brightness(${defaults.brightness}%)
    grayscale(${defaults.grayscale}%)
    opacity(${defaults.opacity}%)
    `

    contrast.value = defaults.contrast;
    brightness.value = defaults.brightness;
    grayscale.value = defaults.grayscale;
    sepia.value = defaults.sepia;
    opacity.value = defaults.opacity;
    btn.disabled = true;
}

function updateImage() {
    imge.src = inputImg.value
}