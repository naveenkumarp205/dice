let whoWins=document.querySelector('h1');
let dice=document.querySelectorAll('.dice');
let diceLeftImg=document.querySelector('.img1');
let diceRightImg=document.querySelector('.img2');
console.log(dice);

let Random1Number1=Math.floor(Math.random()*6)+1;
let Random1Number2=Math.floor(Math.random()*6)+1;
function player1(){
    if(Random1Number1===1){
        diceLeftImg.setAttribute("src","./images/dice1.png")
    }
    else if(Random1Number1===2){
        diceLeftImg.setAttribute("src","./images/dice2.png")
    }
    else if(Random1Number1===3){
        diceLeftImg.setAttribute("src","./images/dice3.png")
    }
    else if(Random1Number1===4){
        diceLeftImg.setAttribute("src","./images/dice4.png")
    }
    else if(Random1Number1===5){
        diceLeftImg.setAttribute("src","./images/dice5.png")
    }
    else if(Random1Number1===6){
        diceLeftImg.setAttribute("src","./images/dice6.png")
    }
}
function player2(){
    if(Random1Number2===1){
        diceRightImg.setAttribute("src","./images/dice1.png")
    }
    else if(Random1Number2===2){
        diceRightImg.setAttribute("src","./images/dice2.png")
    }
    else if(Random1Number2===3){
        diceRightImg.setAttribute("src","./images/dice3.png")
    }
    else if(Random1Number2===4){
        diceRightImg.setAttribute("src","./images/dice4.png")
    }
    else if(Random1Number2===5){
        diceRightImg.setAttribute("src","./images/dice5.png")
    }
    else if(Random1Number2===6){
        diceRightImg.setAttribute("src","./images/dice6.png")
    }
}
window.onload(
    playerWin()||
    player1()||
    player2()
);

function playerWin(){
    if(Random1Number1==Random1Number2){
        whoWins.innerHTML="Draw"
    }
    else if(Random1Number1 > Random1Number2){
        whoWins.innerHTML="Player 1 Wins";
    }
    else if(Random1Number1 < Random1Number2){
        whoWins.innerHTML="Player 2 Wins";
    }
    else{
        whoWins.innerHTML="Refresh Page";
    }
}
