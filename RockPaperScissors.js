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
    
    
    if (escolhaUsuario === escolhaComputador){
    resp.innerHTML = `DRAW ${escolhaUsuario} ${escolhaComputador}`
    } 
    else if (escolhaUsuario === 'rock' && escolhaComputador ==='paper')
    {
        resp.innerHTML = ` LOST <br>Player: \u{270A} ${escolhaUsuario}<br> Computer: \u{1F91A} ${escolhaComputador}<br><br>  paper beats rock  ` 
    } 
    else if (escolhaUsuario === 'rock' && escolhaComputador ==='scissors')
    {
        resp.innerHTML = ` WIN <br>Player: \u{270A}${escolhaUsuario}<br> Computer: \u{270C} ${escolhaComputador}<br><br> rock beats scissors`
    } 
    else if (escolhaUsuario === 'paper' && escolhaComputador ==='scissors')
    {
        resp.innerHTML = ` LOST <br>Player: \u{1F91A} ${escolhaUsuario}<br> Computer: \u{270C} ${escolhaComputador}<br><br> scissors beats paper` 
    } 
    else if (escolhaUsuario === 'paper' && escolhaComputador ==='rock')
    {
        resp.innerHTML = ` WIN <br>Player: \u{1F91A} ${escolhaUsuario}<br> Computer: \u{270A} ${escolhaComputador}<br><br> paper beats rock` 
    } 
    else if (escolhaUsuario === 'scissors' && escolhaComputador ==='rock')
    {
        resp.innerHTML = ` LOST <br>Player: \u{270C} ${escolhaUsuario}<br> Computer: \u{270A} ${escolhaComputador}<br><br> rock beats scissors` 
    } 
    else if (escolhaUsuario === 'scissors' && escolhaComputador ==='paper')
    {
        resp.innerHTML = ` WIN <br>Player: \u{270C} ${escolhaUsuario}<br> Computer: \u{1F91A} ${escolhaComputador}<br> <br>scissors beats paper` 
    } 
}




//buttons.forEach(btn => btn.classList.remove('hand'))
//button.classList.add("handselected")