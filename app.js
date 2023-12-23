let boxes = document.querySelectorAll('.box')
let reset = document.getElementById('reset')
let newGame = document.getElementById('new')
let msgContainer = document.querySelector('.msg')
let msg = document.querySelector('#message')
let count = 0

let turnX = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnX = true
    enableBoxes()
    msgContainer.classList.add('hide')
    count = 0
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText = 'X'
            turnX = false
        }
        else{
            box.innerText = 'O'
            turnX = true
        }
        box.disabled = true
        count ++
        checkWinner()
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes()
}

const checkWinner = () =>{
    if (count === 9){
        msg.innerText = 'The Game is a Draw';
        msgContainer.classList.remove('hide')
    }
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

newGame.addEventListener('click',resetGame)
reset.addEventListener('click',resetGame)