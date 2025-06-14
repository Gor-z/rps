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