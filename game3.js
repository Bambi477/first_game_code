const machineStorage=['rock','papper','scissor'];
totalScore = 0;
totalTimes = 5;

//获取计算机的选择
function getComputerChoice(){
  
  let choice = Math.floor(Math.random()*machineStorage.length);
  
  return machineStorage[choice];

}

//请求你的答案
function humanSelection(){
  let standAnswer = prompt("Welcome to this gaem :Rock Papper Scissor,just pick one!")
  

  return standAnswer.toLowerCase();
}
//将你选择的答案和计算机进行比较，在console输出结果
function getCompare (playerSelection,computerSelection){
  if (playerSelection===computerSelection){
    totalScore=totalScore+1;
    return console.log("It's a tie");

  }
  else if (computerSelection=='rock'&& playerSelection=='scissor'){
    totalScore= totalScore-3;
  return console.log("You lose!");
  }
  else if (computerSelection=='papper'&&playerSelection=='rock'){
    totalScore= totalScore-3;
    return console.log("You lose!");
  }
  else if (computerSelection=='scissor'&&playerSelection=='papper'){
    totalScore=totalScore-3;
  return console.log("You lose!")
  }
  else{
    totalScore=totalScore+2;
    return console.log('You win! Congrates!')
    
  }


}


//主程序，即最终要运行的文件
function playRound(){
  let playerSelection = humanSelection();
  let computerSelection = getComputerChoice();
  
   
  getCompare(playerSelection,computerSelection);
  totalTimes--;
  if (playerSelection==null){
    alert("You cancelled the game");
    console.log("You canceled the game!")
    return;
  }
  if (totalTimes<=0){
    alert(`The game is over ,your score is: ${totalScore}`)
  }
  
  
  
  return console.log(`You now have ${totalTimes} times left`)

  
  

}



playRound();
playRound();
playRound();
playRound();
playRound();
console.log(`Your total score is ${totalScore}`);





