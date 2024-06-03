


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

const Rock_choice = document.querySelector('#rock')
const Paper_choice = document.querySelector('#paper')
const Scissor_choice = document.querySelector('#scissors')


let get_human_choice = function(){
    let hum_choi;
    Rock_choice.addEventListener('click', () => {hum_choi = 'rock'})
    Paper_choice.addEventListener('click', () =>{hum_choi = 'paper'})
    Scissor_choice.addEventListener('click', () => {hum_choi = 'scissors'})
    let x;
    setTimeout((hum_choi) => {x=hum_choi}, 5000)
    
    return x;
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

            break;
        case (outcome == 'l'):
            compscore = compscore +1;

            break;
        default:
            break;

    }
    

}

let play_game = function(Play_round, hum, com){

    Play_round(hum(), com());
    Play_round(hum(), com());
    Play_round(hum(), com());
    Play_round(hum(), com());
    Play_round(hum(), com());

    console.log(`Final Scores - You: ${humanscore}, Computer: ${compscore}`)
    
    switch(true){
        case (compscore ==humanscore):
            console.log('you have drawed with the computer.'
            );
            break;
        case (compscore>humanscore):
            console.log('you have lost to the computer. Better luck next time.')
            break;
        case (compscore<humanscore):
            console.log('you have beaten the computer, Congradulations')
    }
}

play_game(playRound,get_human_choice, computer_choice) 