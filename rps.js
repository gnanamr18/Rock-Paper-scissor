const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
    const rpsChoice = ['ROCK','PAPER','SCISSOR']
    const randomNumber =Math.floor(Math.random()*3)
    return rpsChoice[randomNumber]
}
function getResult(PlayerChoice, computerChoice){
    let score;
    if(PlayerChoice == computerChoice){
        score = 0
    }
    else if(PlayerChoice=='ROCK' && computerChoice=='SCISSOR'){
        score = 1}
    else if(PlayerChoice=='PAPER' && computerChoice=='ROCK'){
        score = 1}
    else if(PlayerChoice=='SCISSOR' && computerChoice=='PAPER'){
        score = 1}
    else {
        score = -1
    }
return score 
}

function showResult(score, PlayerChoice, computerChoice){
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('computer-score')
    if (score == -1){
      resultDiv.innerText="YOU LOOSE"}
    else if (score == 0){
        resultDiv.innerText="IT'S A TIE"}
    else{
        resultDiv.innerText="YOU WIN!"}
handsDiv.innerText = `PLAYER: ${PlayerChoice} vs COMPUTER: ${computerChoice}`
playerScoreDiv.innerText = `PLAYER SCORE IS : ${totalScore['playerScore']}`
// computerScoreDiv.innerText = `COMPUTER SCORE IS : ${totalScore['computerScore']}`
}


function onClickRps(PlayerChoice){
    console.log({PlayerChoice})
    const computerChoice =getComputerChoice()
    console.log({computerChoice})
    const score = getResult(PlayerChoice,computerChoice)
    totalScore['playerScore'] += score
    // totalScore['computerScore'] += score
    console.log({score})
    console.log(totalScore)
    showResult(score,PlayerChoice,computerChoice)
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () =>  endgame(totalScore)

}


function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick =()=>onClickRps(rpsButton.value)} )

}

function endgame(totalScore){
    totalScore ['playerScore'] =0
    totalScore ['computerScore'] = 0
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText =''
    handsDiv.innerText =''
    playerScoreDiv.innerText =''
}

playGame()