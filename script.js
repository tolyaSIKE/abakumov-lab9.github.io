let userScore = 0;
let botScore = 0;
let maxScore = 3;
let currentRound = 1;
let userName = '';

const cards = [
    { name: 'Валет', value: 2, image: 'clubs/Jclub.jpg' },
    { name: 'Валет', value: 2, image: 'diamonds/Jdiamond.jpg' },
    { name: 'Валет', value: 2, image: 'hearts/Jheart.jpg' },
    { name: 'Валет', value: 2, image: 'spades/Jspade.jpg' },
    { name: 'Дама', value: 3, image: 'clubs/Qclub.jpg' },
    { name: 'Дама', value: 3, image: 'diamonds/Qdiamond.jpg' },
    { name: 'Дама', value: 3, image: 'hearts/Qheart.jpg' },
    { name: 'Дама', value: 3, image: 'spades/Qspade.jpg' },
    { name: 'Король', value: 4, image: 'clubs/Kclub.jpg' },
    { name: 'Король', value: 4, image: 'diamonds/Kdiamond.jpg' },
    { name: 'Король', value: 4, image: 'hearts/Kheart.jpg' },
    { name: 'Король', value: 4, image: 'spades/Kspade.jpg' },
    { name: '6', value: 6, image: 'clubs/6club.jpg' },
    { name: '6', value: 6, image: 'diamonds/6diamond.jpg' },
    { name: '6', value: 6, image: 'hearts/6heart.jpg' },
    { name: '6', value: 6, image: 'spades/6spade.jpg' },
    { name: '7', value: 7, image: 'clubs/7club.jpg' },
    { name: '7', value: 7, image: 'diamonds/7diamond.jpg' },
    { name: '7', value: 7, image: 'hearts/7heart.jpg' },
    { name: '7', value: 7, image: 'spades/7spade.jpg' },
    { name: '8', value: 8, image: 'clubs/8club.jpg' },
    { name: '8', value: 8, image: 'diamonds/8diamond.jpg' },
    { name: '8', value: 8, image: 'hearts/8heart.jpg' },
    { name: '8', value: 8, image: 'spades/8spade.jpg' },
    { name: '9', value: 9, image: 'clubs/9club.jpg' },
    { name: '9', value: 9, image: 'diamonds/9diamond.jpg' },
    { name: '9', value: 9, image: 'hearts/9heart.jpg' },
    { name: '9', value: 9, image: 'spades/9spade.jpg' },
    { name: '10', value: 10, image: 'clubs/10club.jpg' },
    { name: '10', value: 10, image: 'diamonds/10diamond.jpg' },
    { name: '10', value: 10, image: 'hearts/10heart.jpg' },
    { name: '10', value: 10, image: 'spades/10spade.jpg' },
    { name: 'Туз', value: 11, image: 'clubs/Aclub.jpg' },
    { name: 'Туз', value: 11, image: 'diamonds/Adiamond.jpg' },
    { name: 'Туз', value: 11, image: 'hearts/Aheart.jpg' },
    { name: 'Туз', value: 11, image: 'spades/Aspade.jpg' },
];

function gameStart() {
    const errorMessage = document.getElementById('error-text');
    userName = document.getElementById('user-name').value;
    if (userName.trim() == '') {
        errorMessage.innerHTML = "Не можемо почати гру, поки ви не введете своє ім'я!";
    } else {
        errorMessage.innerHTML = '';
        document.getElementById('message').innerText = "Грає: " + userName;
        document.getElementById('user-name').disabled = true;
        document.querySelector('button[onclick="gameStart()"]').disabled = true;
    }
}

function generateRandomCards() {
    if (userName.trim() == '') {
        document.getElementById('error-text').innerHTML = "Спочатку введіть своє ім'я!";
        return;
    }
    if (currentRound > maxScore) {
        return;
    }
    const userCard = cards[Math.floor(Math.random() * cards.length)];
    const botCard = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('user-card').style.backgroundImage = 'url(' + userCard.image + ')';
    document.getElementById('bot-card').style.backgroundImage = 'url(' + botCard.image + ')';
    userScore += userCard.value;
    botScore += botCard.value;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('bot-score').innerText = botScore;
    document.getElementById('round-info').innerText = "Спроба " + currentRound + " з " + maxScore;
    currentRound++;
    if (currentRound > maxScore) {
        whoWinner();
    }
}

function whoWinner() {
    let resultMessage;
    if (userScore > botScore) {
        resultMessage = "Гравець " + userName + " переміг!";
    } else if (botScore > userScore) {
        resultMessage = "Комп'ютер переміг!";
    } else {
        resultMessage = "Нічия!";
    }
    document.getElementById('error-text').innerHTML = resultMessage;
    document.getElementById('new-game-button').style.display = 'block';
    document.getElementById('generate-button').disabled = true;
}

function gameReset() {
    userScore = 0;
    botScore = 0;
    currentRound = 1;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('bot-score').innerText = botScore;
    document.getElementById('user-card').style.backgroundImage = '';
    document.getElementById('bot-card').style.backgroundImage = '';
    document.getElementById('round-info').innerText = "Спроба 1 з " + maxScore;
    document.getElementById('error-text').innerHTML = '';
    document.getElementById('new-game-button').style.display = 'none';
    document.getElementById('generate-button').disabled = false;
    document.getElementById('user-name').disabled = false;
    document.querySelector('button[onclick="gameStart()"]').disabled = false;
}