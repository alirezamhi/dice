let diceButton = document.querySelector(".dice-buttom");
let resetButton = document.querySelector(".reset-buttom");
let imagA = document.querySelector(".image-a");
let imagB = document.querySelector(".image-b");
let scoreA = document.querySelector(".score-a");
let scoreB = document.querySelector(".score-b");
let winnerA = document.querySelector(".winner-a");
let winnerB = document.querySelector(".winner-b");
let defaultScoreA = 0 ;
let defaultScoreB = 0 ;

diceButton.addEventListener("click" , ()=>{
    winnerA.innerHTML="";
    winnerB.innerHTML="";
    if(defaultScoreA == 5){
        alert("player 1 wine")
    }else if (defaultScoreB == 5){
        alert("player 2 wine")
    }else{
        let a = Math.floor(Math.random() *6 ) +1;
        let b = Math.floor(Math.random() *6 ) +1;
        imagA.setAttribute("src", `./image/${a}.jpg`);
        imagB.setAttribute("src", `./image/${b}.jpg`);
        if(a>b){
            defaultScoreA+=1;
            scoreA.innerHTML=defaultScoreA;
            winnerA.innerHTML="You wine";
        }else if(a<b){
            defaultScoreB+=1;
            scoreB.innerHTML=defaultScoreB;
            winnerB.innerHTML="You wine";
        }else if(a==b){
            winnerB.innerHTML="equal";
            winnerA.innerHTML="equal";
        }
    }
});
resetButton.addEventListener("click" , ()=>{
    winnerA.innerHTML="";
    winnerB.innerHTML="";
    scoreB.innerHTML=0;
    scoreA.innerHTML=0;
    defaultScoreA = 0 ;
    defaultScoreB = 0 ;
    imagA.setAttribute("src", "");
    imagB.setAttribute("src", "");
});

