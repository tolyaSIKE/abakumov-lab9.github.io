let userScore = 0;
let botScore = 0;
let maxScore = 3;
let userName = '';
function gameStart() {
    let errorMessage = document.getElementById('error-text');
    userName = document.getElementById('user-name').value;
    if (userName == '') {
        errorMessage.innerHTML = "Будь ласка, введіть своє ім'я!";
    } else {
        errorMessage.innerHTML = '';
        document.getElementById('message').innerText = "Грає: " + userName;
    }
}
function generateRandomNumbers() {
    let errorMessage = document.getElementById('error-text');
    if (userName == '') {
        errorMessage.innerHTML = "Не можемо почати гру, поки ви не введете своє ім'я!";
        return;
    }
    errorMessage.innerHTML = '';
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const botNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById('user-number').innerText = userNumber;
    document.getElementById('bot-number').innerText = botNumber;
    if (userNumber > botNumber) {
        userScore++;
        document.getElementById('user-score').innerText = userScore;
    } else if (botNumber > userNumber) {
        botScore++;
        document.getElementById('bot-score').innerText = botScore;
    }
    whoWinner();
}
function whoWinner() {
    if (userScore == maxScore) {
        document.getElementById('error-text').innerHTML = "Гравець " + userName + " переміг!";
        gameReset();
    } else if (botScore == maxScore) {
        document.getElementById('error-text').innerHTML = "Комп'ютер переміг!";
        gameReset();
    }
}
function gameReset() {
    userScore = 0;
    botScore = 0;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('bot-score').innerText = botScore;
    document.getElementById('user-number').innerText = 0;
    document.getElementById('bot-number').innerText = 0;
}