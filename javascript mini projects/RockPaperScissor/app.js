let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateCompChoice = () => {
  //rock , paper , scissor
  const options =["rock" ,"paper" , "scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () =>{
  console.log("game was draw.");
  msg.innerText = "Game was Draw .Play again";
  msg.style.backgroundColor = "white";
  msg.style.color = "black";
}

const showWinner = (userWin , userChoice , compChoice) => {
  if(userWin === true){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You Win! , Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor= "green";
    msg.style.color = "white";
  }else{
    console.log("you lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
}

const playGame = (userChoice) =>{
  console.log("user-choice = ",userChoice);
  //generate computer choice
  const compChoice = generateCompChoice();
  console.log("comp choice = ", compChoice);

  if(userChoice === compChoice){
    //drawgame
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      //scissor , //paper
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
      //rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin , compChoice, userChoice);
  }
}

choices.forEach((game) => {
  console.log(game);
  game.addEventListener("click",() => {
    const userChoice = game.getAttribute("id");
    console.log("choice was clicked",userChoice)
    playGame(userChoice);
  });
});