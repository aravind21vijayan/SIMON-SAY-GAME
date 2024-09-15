let gameseq = [];
let userseq = [];
let started =false;
let level=0;
let highscore = 0;

let h3 = document.querySelector("h3");

let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has Started");
        levelup();
    }
    started=true;

});



function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`; 

    let radnum = Math.floor(Math.random()*4);
    let radcol = ["yellow","red","blue","green"];
    let radobj = radcol[radnum];
    
    let col = document.querySelector(`.${radobj}`);
    gameseq.push(radobj);
    console.log(gameseq);
    gameflash(col);
    

};

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 400);

};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 150);

};

function checkcolor(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(), 1000);
        }
    }
    else{
        if(level > highscore){
            h3.innerText = `HIGHEST SCORE : ${level}`;
        }
        h2.innerHTML=`Game Over !! Your Score is <b>${level}</b><br>Please enter any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"}
            ,500);
        reset();
    }

}

function reset(){
    started=false;
    gameseq = [];
    userseq = [];
    level=0;

}

function btnpress(){
    let btn = this;
    userflash(btn);
    userseq.push(btn.getAttribute("id"));
    checkcolor(userseq.length-1);

};

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

