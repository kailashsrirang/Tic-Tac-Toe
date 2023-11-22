let gameBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]
// gameBoard.forEach((value,index)=>{
//     console.log(value)
//     value.forEach((elem,i)=>{
//         console.log(elem)
//     })
// })
// console.log(document.querySelector('.js'))
let btnNum = 0
let move = 'X'
let winner = ''
let xScore = 0
let oScore = 0

document.querySelector('.js-play-game').addEventListener('click', () => {
    gameBoard = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']]
    let btnTitle = document.querySelector('.js-play-game').innerHTML
    if (btnTitle === 'Play Game') {
        document.querySelector('.js-play-game').innerHTML = 'Reset Game'
        // document.querySelector('.js-status').innerHTML=''////////////
        updateDisplay()
        playGame()
    } else {
        // document.querySelector('.js-play-game').innerHTML='Play Game'
        displayScore()
        updateDisplay()
        // document.querySelector('.js-status').innerHTML=''
        winner = ''
        document.querySelector('.js-winner').innerHTML = ''
        // playGame()
    }
})

// document.querySelector('.js-reset-score').addEventListener('click',()=>{

// })

function playGame() {

    const title = document.querySelector('.js-play-game').innerHTML
    if (title === 'Play Game') {
        document.querySelector('.js-reset-score-div')
            .innerHTML = '<button class="js-reset-score reset-score">Reset Score</button>'///add a clear game button that resets everythingg and deletes the reset scor ebutton
        document.querySelector('.js-reset-score').addEventListener('click', () => {
            xScore = 0
            oScore = 0
            document.querySelector('.js-winner').innerHTML = ''
            displayScore()
            winner = ''
            gameBoard = [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']]
            updateDisplay()
        })
        document.querySelector('.js-btn-1').addEventListener('click', () => {
            btnNum = 1
            addMove(btnNum)
        })
        document.querySelector('.js-btn-2').addEventListener('click', () => {
            btnNum = 2
            addMove(btnNum)
        })
        document.querySelector('.js-btn-3').addEventListener('click', () => {
            btnNum = 3
            addMove(btnNum)
        })
        document.querySelector('.js-btn-4').addEventListener('click', () => {
            btnNum = 4
            addMove(btnNum)
        })
        document.querySelector('.js-btn-5').addEventListener('click', () => {
            btnNum = 5
            addMove(btnNum)
        })
        document.querySelector('.js-btn-6').addEventListener('click', () => {
            btnNum = 6
            addMove(btnNum)
        })
        document.querySelector('.js-btn-7').addEventListener('click', () => {
            btnNum = 7
            addMove(btnNum)
        })
        document.querySelector('.js-btn-8').addEventListener('click', () => {
            btnNum = 8
            addMove(btnNum)
        })
        document.querySelector('.js-btn-9').addEventListener('click', () => {
            btnNum = 9
            addMove(btnNum)
        })
    }
}



function addMove(btnNum) {
    console.log(winner, 'move')
    if (winner === '') {
        if (btnNum < 4) {
            if (gameBoard[0][btnNum - 1] === '-') {
                gameBoard[0][btnNum - 1] = move
            }
            else {
                return
            }
        } else if (btnNum < 7) {
            if (gameBoard[1][btnNum - 4] === '-') {
                gameBoard[1][btnNum - 4] = move
            }
            else {
                return
            }
        } else {
            if (gameBoard[2][btnNum - 7] === '-') {
                gameBoard[2][btnNum - 7] = move
            }
            else {
                return
            }
        }
        console.log('move change')
        if (move === 'X') {
            move = 'O'
        } else {
            move = 'X'
        }
        document.querySelector('.js-status').innerHTML = (`<p>NEXT TURN: ${move}</p>`)
        updateDisplay()
        // console.log(checkRows())
        if (checkCols() || checkRows() || checkDiag()) {
            document.querySelector('.js-winner').innerHTML = `<p>The Winner is ${winner}!</p>`
            console.log(xScore, oScore)
            displayScore()

        }
        // console.log(gameBoard)
    }
}

function updateDisplay() {
    console.log("display")
    gameBoard.forEach((element, index) => {
        // console.log(index)
        if (index === 0) {
            // console.log(element)
            element.forEach((value, i) => {
                // console.log(value,i,document.querySelector(`.js-btn-${i+1}`).innerHTML)
                document.querySelector(`.js-btn-${i + 1}`).innerHTML = value
            })

        } else if (index === 1) {
            element.forEach((value, i) => {
                document.querySelector(`.js-btn-${i + 4}`).innerHTML = value
            })

        } else {
            element.forEach((value, i) => {
                document.querySelector(`.js-btn-${i + 7}`).innerHTML = value
            })

        }
    }
    )
    if (document.querySelector('.js-play-game').innerHTML !== 'Play Game') {
        document.querySelector('.js-status').innerHTML = (`<p>NEXT TURN: ${move}</p>`)
    }
}

function checkRows() {
    let win = false
    gameBoard.forEach((value, index) => {

        let x = 0
        let o = 0
        value.forEach((elem) => {
            if (elem === 'X') {

                x += 1
            } else if (elem === 'O') {
                o += 1
            }
            // console.log(x,o)
            if (x === 3) {
                winner = 'X'
                xScore += 1
                win = true
                return
            } else if (o === 3) {
                oScore += 1
                winner = 'O'
                win = true
                return


            }
        })

    }

    )
    // console.log(win+'win')
    if (win === true) {
        // console.log('true')
        return true
    } else { return false }
}

function checkCols() {
    let x = 0
    let o = 0
    let index = 0
    for (let i = 0; i < 3; i++) {
        if (index !== 3) {
            // console.log(i,index)
            // console.log(gameBoard[i][index])
            if (gameBoard[i][index] === 'X') {
                x += 1
                // console.log('x',x)
            } else if (gameBoard[i][index] === 'O') {

                o += 1
                // console.log('o',o)
            }
            if (x === 3) {
                winner = 'X'
                xScore += 1
                return true
            } else if (o === 3) {
                oScore += 1
                winner = 'O'
                return true
            }
            else if (i == 2) {
                index += 1
                x = 0
                o = 0
                i = -1
            }
        }
        // console.log(x,o)
    }
    return false
}

function checkDiag() {
    let win = false
    let x = 0
    let o = 0
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][i] === 'X') {
            x += 1
        } else if (gameBoard[i][i] === 'O') {
            o += 1
        }
        if (x === 3) {
            winner = 'X'
            xScore += 1
            return true
        } else if (o === 3) {
            winner = 'O'
            oScore += 1
            return true;
        }
    }



    let xcount = 0
    let ocount = 0
    let row = 2
    for (let i = 0; i < 3; i++) {
        if (gameBoard[row][i] === 'X') {
            xcount += 1
            if (row !== 0) {
                row -= 1
            }
        } else if (gameBoard[row][i] === 'O') {
            ocount += 1
            if (row !== 0) {
                row -= 1
            }
        }
        if (xcount === 3) {
            winner = 'X'
            xScore += 1
            return true
        } else if (ocount === 3) {
            winner = 'O'
            oScore += 1
            return true
        }

    }
}

// function displayHome(){
gameBoard = [
    ['T', 'I', 'C'],
    ['T', 'A', 'C'],
    ['T', 'O', 'E']]

function displayScore() {
    if (xScore !== 0 || oScore !== 0) {
        document.querySelector('.js-xscore').innerHTML = `<p>X: ${xScore}</p>`
        document.querySelector('.js-oscore').innerHTML = `<p>O: ${oScore}</p>`
    }
    else {
        document.querySelector('.js-xscore').innerHTML = ''
        document.querySelector('.js-oscore').innerHTML = ''
    }
}

document.querySelector('.js-status').innerHTML = '<p></p> '
updateDisplay()

