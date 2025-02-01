let winningPatterns = [

    ["rock", "paper", "lose"],
    ["rock", "scissor", "win"],
    ["rock", "rock", "draw"],
    ["paper", "rock", "win"],
    ["paper", "scissor", "lose"],
    ["paper", "paper", "draw"],
    ["scissor", "rock", "lose"],
    ["scissor", "paper", "win"],
    ["scissor", "scissor", "draw"]

];


let choices = document.querySelectorAll(".choice");

// get the input


choices.forEach((choice) => {

    choice.addEventListener("click", () => {

      if (choice == choices[0]) {

        selectedChoice = "rock";

      } else if (choice == choices[1]) {

        selectedChoice = "paper";

      } else if (choice == choices[2]) {

        selectedChoice = "scissor";

      }

      checkWinner();

    });
});


// // Check winner

function checkWinner(){
    

    for (let patterns of winningPatterns) {
    
      let computerChoice = computerMove();

        if (selectedChoice === patterns[0] && computerChoice === patterns[1]) {

            resultMessage(patterns[2], computerChoice);
            scoreIncrement(patterns[2]);
        
            break;
      }
    }
}



// // Computer Move


function computerMove() {
 
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  let options = ["rock", "paper", "scissor"];

  return options[computerChoice - 1];
}


// socre increment

let playerScore = 0;
let computerScore = 0;

function scoreIncrement(result){

  let score = document.querySelectorAll(".score");

  if(result == "win"){

    playerScore++;
    score[0].innerText = playerScore;
  }else if (result == "lose"){

    computerScore++;
    score[1].innerText = computerScore;
  }
  
}


// Print Message

let Message = document.querySelector(".result");

function resultMessage(result, computerChoice){
  
  Message.style.width = "400px";

  if(result == "win"){

    win(Message, computerChoice);
  }else if (result == "lose"){

    lose(Message, computerChoice);
  }else if(result == "draw"){

    draw(Message, computerChoice);
  }
}


function win(Message, computerChoice){

  Message.innerText = `You won, computer choose ${computerChoice}`;

  Message.classList.add("won");
  Message.classList.remove("lose");
  Message.classList.remove("draw");

  winSound();
}

function lose(Message, computerChoice){

  Message.innerText = `You lose, computer choose ${computerChoice}`;
  Message.classList.add("lose");
  Message.classList.remove("won");
  Message.classList.remove("draw");

  loseSound();
}

function draw(Message, computerChoice){

  Message.innerText = `Draw, computer choose ${computerChoice}`;
  Message.classList.add("draw");
  Message.classList.remove("won");
  Message.classList.remove("lose");

  drawSound();
}


// sound effects

let winAudio = new Audio("Audio/win.wav");
let loseAudio = new Audio("Audio/lose.mp3");
let drawAudio = new Audio("Audio/draw.wav");


function winSound(){

  winAudio.play();
}

function loseSound(){

  loseAudio.play();
}


function drawSound() {
 
  drawAudio.play();
}