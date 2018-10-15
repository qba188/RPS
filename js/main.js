var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerChoseRock;
document.getElementById("scissors").onclick=playerChoseScissors;
document.getElementById("paper").onclick=playerChosePaper;
function playerChoseRock(){
	var cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"rock");
}

function playerChoseScissors(){
	var cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"scissors");
}

function playerChosePaper(){
	var cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"paper");
}

function getRandomResult(){
	var randomNumber=Math.random();
	var cpuChose="rock";
	if(randomNumber<.3){
		cpuChose="scissors";
	}
	else if(randomNumber<.6){
		cpuChose="paper";
	}
	
	return cpuChose;
}

function checkWhoWon(cpuChose,playerChose){
	if(cpuChose==playerChose){
		displayPlayersChoice("Wybrałeś " + playerChose);
		displayBotsChoice("Komputer wybrał " + cpuChose);
		displayCompleteMessage("No i macie remis. Jeszcze raz!");
	}
	else if(
		(cpuChose=="scissors" && playerChose=="paper") ||
		(cpuChose=="scissors" && playerChose=="l") ||
		(cpuChose=="paper" && playerChose=="rock") ||
		(cpuChose=="paper" && playerChose=="s") ||
		(cpuChose=="rock" && playerChose=="scissors") ||
		(cpuChose=="s" && playerChose=="rock") ||
		(cpuChose=="s" && playerChose=="rock") ||
		(cpuChose=="l" && playerChose=="s") ||
		(cpuChose=="l" && playerChose=="paper")
		){
		displayPlayersChoice("Wybrałeś " + playerChose);
		displayBotsChoice("Komputer wybrał " + cpuChose);
		increaseBotScore();
	}
	else{
		displayPlayersChoice("Wybrałeś " + playerChose);
		displayBotsChoice("Komputer wybrał " + cpuChose);
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Niestety przegrałeś");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Wygrałeś");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displayPlayersChoice(msg){
	document.getElementById("playerScore").innerHTML=msg;

}

function displayBotsChoice(msg){
	document.getElementById("botScore").innerHTML=msg;
}
