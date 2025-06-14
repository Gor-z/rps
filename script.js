let humanScore = 0
let computerScore = 0


const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        return 'Rock'
    }else if(choice == 1){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}

const getHumanChoice = () => {
    let choice = prompt('Chooce: Rock, Paper or Scissors!')
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLocaleLowerCase();
}


const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
       console.log('Tie!')
    }else if(humanChoice == 'Rock' && computerChoice == 'Scissors'
          || humanChoice == 'Scissors' && computerChoice == 'Paper'
          || humanChoice == 'Paper' && computerChoice == 'Rock'
    ){
        humanScore ++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }else{
        computerScore ++
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)