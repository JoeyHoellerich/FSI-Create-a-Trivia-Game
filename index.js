let score = 0;

let UserName = window.prompt("What is your name?");

for (let i = 0; i < questions.length; i++){
    let answer = window.prompt(questions[i].text);
    if (answer == questions[i].correctAnswer){
        score = score + 10;
        window.alert("CORRECT! You have scored 10 points!\nCurrent Score: " + String(score))
    } else {
        window.alert("OOOOOHHH, so close!, The correct answer is: " + questions[i].correctAnswer + "\nCurrent Score: " + String(score));
    }
}

let games;
let serializedGames = localStorage.getItem('games');
if (serializedGames == null){
    games = [];
} else {
    games = JSON.parse(serializedGames);
}

let game = {
    user: UserName,
    score: score
}

games.push(game);

serializedGames = JSON.stringify(games);
localStorage.setItem('games', serializedGames);


let ending = document.querySelector("h1");
ending.innerHTML = "Thanks for Playing! Your final score was: " + String(score);

highScore = games[0].score;
highName = games[0].user;
for (let i = 0; i < games.length; i++){
    if(games[i].score > highScore){
        highScore = games[i].score;
        highName = games[i].user;
    }
}

let showScore = document.querySelector("#score");
showScore.innerText = highScore;

let showName = document.querySelector("#name");
showName.innerText = highName;

personalScore = score;
personalName = UserName;
for (let i = 0; i < games.length; i++){
    if(games[i].score > personalScore && games[i].user == UserName){
        personalScore = games[i].score;
    }
}

let showPersonal = document.querySelector("#personalScore");
showPersonal.innerText = String(personalScore);