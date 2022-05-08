let fruits = []
let cardsDOM = []
let isShow = []
let pair = []
let score = 0
let isPlaying = false

function init() {
    // add
    fruits.push('apel')
    fruits.push('lemon')
    fruits.push('jeruk')
    fruits.push('anggur')
    fruits.push('pisang')
    fruits.push('semangka')
    fruits = fruits.concat(fruits)

    // shuffle
    fruits = fruits.sort(() => Math.random() - 0.5)

    // draw & generate show card status
    let text = ''
    let fruitsListText = ''
    fruits.map((item, index) => {
        isShow.push(false)

        fruitsListText += `
            <img src="./image/${item}.png" alt="fruit" />
        `

        text += `
        <div class="card-grid">
            <div class="card" onclick="flip(${index})">
                <img src="./image/${'bayang'}.png" alt="fruits">
            </div>
        </div>`
    })
    document.querySelector('.game-area').innerHTML = text
    document.querySelector('.fruit-list').innerHTML = fruitsListText
    // indexing card DOM
    cardsDOM = Array.from(document.querySelectorAll('.card'))
}

function flip(id) {
    if (!isShow[id] && pair.length < 2 && isPlaying) {
        isShow[id] = true
        cardsDOM[id].style.transform = 'rotateY(180deg)'

        pair.push(id)

        let timeoutA = setTimeout(() => {
            cardsDOM[id].querySelector('img').src = `./image/${fruits[id]}.png`
            cardsDOM[id].style.background = 'white'
            // clearTimeout(timeoutA)
        }, 250)

        if (pair.length === 2 && fruits[pair[0]] === fruits[pair[1]]) {
            // BENAR
            cardsDOM[pair[0]].style.cursor = 'default'
            cardsDOM[pair[1]].style.cursor = 'default'
            pair = []
            score += 2
            updateScore()
            if (!isShow.includes(false)) {
                isPlaying = false
                gameFinished()
            }
        } else if (pair.length === 2 && fruits[pair[0]] !== fruits[pair[1]]) {
            // SALAH
            if (score > 0) score -= 1
            updateScore()

            let timeoutB = setTimeout(() => {
                pair.map(item => {
                    isShow[item] = false
                    cardsDOM[item].style.transform = 'rotateY(0deg)'
                    let timeoutC = setTimeout(() => {
                        cardsDOM[item].querySelector('img').src = `./image/bayang.png`
                        cardsDOM[item].style.background = 'orange'
                    }, 250)
                })
                pair = []
            }, 750)
        }
        // clearTimeout(timeoutB)


    }
}

function updateScore() {
    document.querySelector('.score').innerHTML = `Score : ${score}`
}

function startGame() {
    isPlaying = true
    document.querySelector('.mask').style.display = 'none'
}

function restartGame() {
    fruits = []
    cardsDOM = []
    isShow = []
    pair = []
    score = 0
    isPlaying = false
    updateScore()
}

function gameFinished() {
    document.querySelector('.mask').style.display = 'block'
    document.querySelector('.mask').innerHTML = 'Congratulations!!!'
}


document.querySelector('.btn-start').addEventListener('click', function (e) {
    if (!isPlaying) {
        this.innerHTML = 'RESTART'
        restartGame()
        startGame()
        init()
    } else {
        console.log('restart')
        restartGame()
        init()
    }
})

init()