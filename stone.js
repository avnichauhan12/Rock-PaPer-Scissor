let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg")
const msgbox=document.querySelector(".msg-container")
const choices = document.querySelectorAll(".choice");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice)
    })
})
const Draw=()=>{
    
    msg.innerText="Game was Draw !"
    msg.style.backgroundColor="rgb(51, 24, 107)";
}
const playgame=(userChoice)=>{
    console.log("User Choice",userChoice);

    // computer choice
      const compChoice=genCompChoice();
      console.log("computer choice",compChoice);
      if(userChoice===compChoice){
        //Draw
        Draw();
      }
      else{
        let userWin=true;
        if(userChoice =="rock"){
            userWin=compChoice==="paper"?false:true
        }
        else if(userChoice == "paper"){
            // rock scissor
            userWin=(compChoice==="rock")?false:true
        }
        else{
            userWin=(compChoice==="rock")?false:true
        }
        showWinner(userWin,userChoice,compChoice);
      }

}
const genCompChoice=()=>{
    const option=["rock","paper","scissor"]
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const showWinner=(userWin,userChoice,compChoice)=>{
      if(userWin==true){
        userScore+=1;
        userscore.innerText=userScore;
        msg.innerText=`You win ! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor= "green";
      }
      else{
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You lose ! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor= "red";
      }
}