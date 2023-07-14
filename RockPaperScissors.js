let r = window.document.getElementsByClassName('rock')
let p = window.document.getElementsByClassName('paper')
let s = window.document.getElementsByClassName('scissors')
let choice;
let computerChoice = ['rock','paper','scissors']
let resp = window.document.getElementById('resp')
let escolhaUsuario;
let escolhaComputador;
const buttons = document.querySelectorAll('.hand')
let selectedButton = null;
let round = window.document.getElementById('round')

let playerPoints = window.document.getElementById('playerPoints')
let computerPoints = window.document.getElementById('computerPoints')

let playerScore = 0;
let computerScore = 0



let roundCounter = 1



buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        if(selectedButton){
            selectedButton.classList.remove('handselected')
        }
    button.classList.add('handselected');
    selectedButton = button;
         
    })
  
})



function computerPlay (){
    let indiceSorteado = Math.floor(Math.random()* computerChoice.length)
   
    let stringSorteada = computerChoice[indiceSorteado];
   
    return stringSorteada;
   }

console.log(computerPlay())

function armazenarEscolha(opcao) {
    choice = opcao
    console.log(`Escolha selecionada: ${choice}`)
    return choice;
}


 
function resultadoDoJogo (){
    
    let escolhaUsuario = armazenarEscolha(choice)
    let escolhaComputador = computerPlay()
    
    roundCounter = roundCounter + 1

    if (escolhaUsuario === escolhaComputador){
    resp.innerHTML = `<strong>DRAW</strong> ${escolhaUsuario} ${escolhaComputador}`
    } 
    else if (escolhaUsuario === 'rock' && escolhaComputador ==='paper')
    {   computerScore = computerScore + 1 
        resp.innerHTML = `<strong> LOST</strong> <br>Player: \u{270A} ${escolhaUsuario}<br> Computer: \u{1F91A} ${escolhaComputador}<br><br>  paper beats rock  ` 
    } 
    else if (escolhaUsuario === 'rock' && escolhaComputador ==='scissors')
    {  playerScore = playerScore + 1
        resp.innerHTML = `<strong> WIN</strong> <br>Player: \u{270A}${escolhaUsuario}<br> Computer: \u{270C} ${escolhaComputador}<br><br> rock beats scissors`
    } 
    else if (escolhaUsuario === 'paper' && escolhaComputador ==='scissors')
    {   computerScore = computerScore + 1 
        resp.innerHTML = `<strong> LOST</strong> <br>Player: \u{1F91A} ${escolhaUsuario}<br> Computer: \u{270C} ${escolhaComputador}<br><br> scissors beats paper` 
    } 
    else if (escolhaUsuario === 'paper' && escolhaComputador ==='rock')
    {   playerScore = playerScore + 1
        resp.innerHTML = `<strong> WIN</strong> <br>Player: \u{1F91A} ${escolhaUsuario}<br> Computer: \u{270A} ${escolhaComputador}<br><br> paper beats rock` 
    } 
    else if (escolhaUsuario === 'scissors' && escolhaComputador ==='rock')
    {   computerScore = computerScore + 1 
        resp.innerHTML = `<strong> LOST</strong> <br>Player: \u{270C} ${escolhaUsuario}<br> Computer: \u{270A} ${escolhaComputador}<br><br> rock beats scissors` 
    } 
    else if (escolhaUsuario === 'scissors' && escolhaComputador ==='paper')
    {   playerScore = playerScore + 1
        resp.innerHTML = ` <strong>WIN</strong> <br>Player: \u{270C} ${escolhaUsuario}<br> Computer: \u{1F91A} ${escolhaComputador}<br> <br>scissors beats paper` 
    } 

    
      round.innerHTML  = ` Round: ${roundCounter}`
      playerPoints.innerHTML = `Player : ${playerScore}`
      computerPoints.innerHTML = `Computer ${computerScore}`

}




//buttons.forEach(btn => btn.classList.remove('hand'))
//button.classList.add("handselected")