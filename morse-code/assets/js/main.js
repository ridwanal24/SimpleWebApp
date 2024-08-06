const typingBox = document.querySelector('.typing-box')
const resultBox = document.querySelector('.result-box')
const resultBoxError = document.querySelector('.error-text')

typingBox.addEventListener('keyup', (e) => {
    const value = e.target.value
    resultBox.value = textToMorse(value)
})

function textToMorse(text) {
    let undecodeCharCount = 0

    text = text.toLowerCase()

    const morseText = text.split('').map(item => {

        if (morseSource[item] === undefined) {
            undecodeCharCount += 1

            return item
        }

        if (undecodeCharCount < 1) {
            resultBox.classList.remove('result-box-error')
            resultBoxError.classList.add('display-none')
        } else {
            resultBox.classList.add('result-box-error')
            resultBoxError.classList.remove('display-none')
        }

        return morseSource[item]
    }).join(' ').trim()

    return morseText
}