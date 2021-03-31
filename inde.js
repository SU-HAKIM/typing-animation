const textForType = ['awesome', 'fun', 'interesting']
let typedText = document.querySelector('.typed-text')

let indexOfArr = 0;
let indexOfText = 0;

function type() {
    if (indexOfText < textForType[indexOfArr].length) {
        typedText.textContent += textForType[indexOfArr].charAt(indexOfText)
        indexOfText++
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (indexOfText > 0) {
        typedText.textContent = textForType[indexOfArr].substring(0, indexOfText - 1)
        indexOfText--;
        setTimeout(erase, 100);
    } else {
        indexOfArr++
        if (indexOfArr >= textForType.length) {
            indexOfArr = 0
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    type()
})