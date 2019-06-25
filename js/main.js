let botScore=0,
    playerScore=0;
    
document.getElementById("rock").onclick=playerChoseRock;
document.getElementById("scissors").onclick=playerChoseScissors;
document.getElementById("paper").onclick=playerChosePaper;

function playerChoseRock(){
	let cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"Kamień");
}

function playerChoseScissors(){
	var cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"Nożyce");
}

function playerChosePaper(){
	let cpuChose=getRandomResult();
	checkWhoWon(cpuChose,"Papier");
}

function getRandomResult(){
	let randomNumber=Math.random();
	let cpuChose="Kamień";
	if(randomNumber<.3){
		cpuChose="Nożyce";
	}
	else if(randomNumber<.6){
		cpuChose="Papier";
	}
	
	return cpuChose;
}

function checkWhoWon(cpuChose,playerChose){
	if(cpuChose==playerChose){
		displayPlayersChoice("Wybrałeś: " + playerChose);
		displayBotsChoice("Komputer wybrał: " + cpuChose);
		displayCompleteMessage("Remis. Jeszcze raz!");
	}
	else if(
		(cpuChose=="Nożyce" && playerChose=="Papier") ||
		(cpuChose=="Papier" && playerChose=="Kamień") ||
        (cpuChose=="Kamień" && playerChose=="Nożyce")
		){
		displayPlayersChoice("Wybrałeś: " + playerChose);
		displayBotsChoice("Komputer wybrał: " + cpuChose);
		increaseBotScore();
	}
	else{
		displayPlayersChoice("Wybrałeś: " + playerChose);
		displayBotsChoice("Komputer wybrał: " + cpuChose);
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