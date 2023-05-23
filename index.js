// DOM 

const container = document.getElementById('container')

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const display = document.querySelector('.display')

const buttons = document.querySelectorAll('button')

buttons.forEach(

button => button.addEventListener('click', game)

)



// Score counters and Choice variables

let playerCount=0
let compCount=0
let playerSelection;
let computerSelection;

let arr = ['rock', 'paper', 'scissors']


// Function to choose a random option for computer

function getComputerChoice(){
    computerSelection = arr[Math.floor(Math.random() * 3)]
}

// main function

function game(e){

    playerSelection = e.target.className

   playerCount=0
     compCount=0
    
       
        computerSelection = ''
        getComputerChoice()
        console.log(computerSelection)
        playerSelection = e.target.className
        if (playerSelection === computerSelection){
            alert(`Draw!`)

            
        }

        else if(playerSelection === 'rock' && computerSelection ==='scissors'||
                playerSelection === 'paper' && computerSelection ==='rock'||
                playerSelection === 'scissors' && computerSelection ==='paper'){
                    playerCount++
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`)

                   
                    
                }

        else if(computerSelection === 'rock' && playerSelection ==='scissors'||
                computerSelection === 'paper' && playerSelection ==='rock'||
                computerSelection === 'scissors' && playerSelection ==='paper'){
                    compCount++
                    alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
                    
        }


    

    // function to display the winner 



        if(playerCount>=5){
      alert('Player is the champion')  
      
    }
    else if(compCount>=5){
        alert('Computer is the champion')
    


    
}

}

