document.addEventListener('DOMContentLoaded', () => {


    const startBtn = document.querySelector('#start-btn')
    const intro = document.querySelector('.intro')
    const game = document.querySelector('.game-gone')
    const slot = document.querySelectorAll('.grid div')
    let turn = document.querySelector('#h2')
    let turned = 1
    let result = document.querySelector('#result')

    startBtn.addEventListener('click', startGame)
//start game
    function startGame(){
        game.classList.remove('game-gone')
        game.classList.add('card')
        intro.classList.add('intro-gone')
        intro.classList.remove('intro')
    }   

//Click on slot
        for(let i = 0; i < slot.length; i++){
            slot[i].onclick = () => {
            if(slot[i].classList.contains('player-one') || 
                slot[i].classList.contains('player-two')){
                alert('cant go here') 
            }else if(turned == 1){
                slot[i].classList.add('player-one')
                slot[i].classList.remove('player-two')
                slot[i].classList.remove('slot')
                turned = 2
                turn.innerHTML = turned
                }else if(turned == 2){
                slot[i].classList.add('player-two')
                slot[i].classList.remove('player-one')
                slot[i].classList.remove('slot')
                turned = 1
                turn.innerHTML = turned
            }
            getResult()
        }
    }
    //check who won
    const winningPlayer = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [2, 5, 8],
        [2, 4, 6],
        [6, 7, 8],
        [1, 4, 7],
        [3, 4, 5]
    ]
    function getResult(){
        for (let y = 0; y < winningPlayer.length; y++){
            const square1 = slot[winningPlayer[y][0]]
            const square2 = slot[winningPlayer[y][1]]
            const square3 = slot[winningPlayer[y][2]]
        //Check if player one won
        if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one')
        ){
            result.innerHTML = 'X WON!'
        }
        //Check if player two won
        if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two')
        ){
            result.innerHTML = 'O WON!'
        } 
    }
    }
})