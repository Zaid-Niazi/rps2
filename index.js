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

function game(){
   playerCount=0
     compCount=0
    
    for (let i =0; i<5; i++){
        playerSelection = ''
        computerSelection = ''
        getComputerChoice()
        console.log(computerSelection)
        playerSelection = prompt('Choose').toLowerCase()
        if (playerSelection === computerSelection){
            
            
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


    }

    displayWinner()

    // function to display the winner 

    function displayWinner(){

        if(playerCount>compCount){
            alert('Player is the Champion!')
        }else{alert('Computer Wins The Game!')}

    }



    
}