let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".btn1");
let newBtn=document.querySelector(".btn2");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count===9 && !isWinner0){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const noResult=()=>{
    msg.innerText=`No Result`;
    msgContainer.classList.remove("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

         if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
            
                showWinner(pos1Val);
            }
        
         }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);