
console.log('hello world');

let computer_choice = function(){
    let randfloat = Math.random();

    let choice;

    switch(true){
        case (randfloat<0.333):
            choice ='rock';
            break;
        case (randfloat<0.666):
            choice = 'paper';
            break;
        default:
            choice = 'scissors';
    }

    return choice;
}

let get_human_choice = function(){
    let hum_choi = prompt('Please type "rock", "paper", or "scissors".');
    return hum_choi.toLocaleLowerCase();
}

let humanscore = 0;
let compscore = 0;



let playRound = function(h, c){
    let outcome;
    console.log(`human: ${h}, computer: ${c}`)

    if (h == 'rock'){
        switch(true){
            case (c=='rock'):
                outcome='d';
                break;
            case (c=='paper'):
                outcome = 'l';
                break;
            
            case (c=='scissors'):
                outcome = 'w';
                break;
        }
    }

    else if (h == 'paper'){
        switch(true){
            case (c=='rock'):
                outcome='w';
                break;
            case (c=='paper'):
                outcome = 'd';
                break;
            
            case (c=='scissors'):
                outcome = 'l';
                break;
        }
    } 
    else{
        switch(true){
            case (c=='rock'):
                outcome='l';
                break;
            case (c=='paper'):
                outcome = 'w';
                break;
            
            case (c=='scissors'):
                outcome = 'd';
                break;
        }
    } 

    switch(true){
        case (outcome == 'w'):
            humanscore = humanscore+1;
            console.log(`You win, ${h} beats ${c}`);
            break;
        case (outcome == 'l'):
            compscore = compscore +1;
            console.log(`you lose, ${h} lost to ${c}`);
            break;
        case(outcome=='d'):
            console.log(`it's a draw, both selected ${h}`);
    }
    

}

playRound(get_human_choice(), computer_choice());
console.log(`Final scorecard: Human - ${humanscore}, Computer - ${compscore}`);