const buttonStart = document.querySelector('#button__start'); //кнопка запуска игры на 1 странице
const buttonNumberGames = document.querySelector('#page__1_input'); //выбор количества побед на 1 странице
const buttonRestart = document.querySelector('#button__restart'); //кнопка перезапуска игры 2 страницы

const scoreUser = document.querySelector('.page__2_score-user'); //счет пользователя
const scoreComputer = document.querySelector('.page__2_score-computer'); //счет компьютера
const scoreGameTotal = document.querySelector('.page__2_score-game2'); //всего играть игр

const userGesture = document.querySelector('.page__2_box-img-user'); //изображение пользователя
const compGesture = document.querySelector('.page__2_box-img-comp'); //изображение компьютера

const startGame = document.querySelector('.page__2_gesture');
const buttonStone = document.querySelector('#button__stone'); //кнопка камень
const buttonScissors = document.querySelector('#button__scissors'); //кнопка ножницы
const buttonPaper = document.querySelector('#button__paper'); //кнопка бумага

const tittle = document.querySelector('.page__2_box > span'); //сообщение кто победил в раунде
const button = document.querySelector('.page__2_gesture-user'); //блок с кнопками

let winnerUser = ''; //переменная - кто победил
const winGame = document.querySelector('.page__2_box-img span'); //итог раунда
//стартовые значения игры
scoreUser.textContent = 0; //очки игрока
scoreComputer.textContent = 0; //очки компьютера
scoreGameTotal.textContent = buttonNumberGames.value; //всего количество побед (по умолчанию 3)

const sample = {
  imgStoneUser: `
  background: url(./img/1.png) no-repeat center center;
  background-size: contain;
  transform: scale(1, 1);
  animation-iteration-count: 0;
  `,
  imgStoneComp: `
  background: url(./img/1.png) no-repeat center center;
  background-size: contain;
  transform: scale(-1, 1);
  animation-iteration-count: 0;
  `,
  imgScissorsUser: `
  background: url(./img/2.png) no-repeat center center;
  background-size: contain;
  transform: scale(1, 1); 
  animation-iteration-count: 0;
  `,
  imgScissorsComp: `
  background: url(./img/2.png) no-repeat center center;
  background-size: contain;
  transform: scale(-1, 1);
  animation-iteration-count: 0;
  `,
  imgPaperUser: `
  background: url(./img/3.png) no-repeat center center;
  background-size: contain;
  transform: scale(-1, 1); 
  animation-iteration-count: 0; 
  `,
  imgPaperComp: `
  background: url(./img/3.png) no-repeat center center;
  background-size: contain;
  transform: scale(1, 1);
  animation-iteration-count: 0;
  `,
  imgHandUser: `
  background: url(./img/5.png) no-repeat center center;
  background-size: contain;
  `, //изображение руки пользователя
  imgHandComp: `
  background: url(./img/4.png) no-repeat center center;
  background-size: contain;
  `, //изображение руки компьютера
};

//установка количество побед в игре<, 1 страница
buttonNumberGames.onblur = function() { // вызов функции при потере фокуса
  buttonNumberGames.value;
  }

//начало игры 1 страница
buttonStart.onclick = () => {
  document.querySelector('.page__1').classList.remove('active');
  document.querySelector('.page__2').classList.add('active');
  soundStart.play();
};

//функция рандомного выбора компьютера
function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//Проверка сколько побед в раунде
function numberGames(){
  if (buttonNumberGames.value === scoreUser.textContent || buttonNumberGames.value === scoreComputer.textContent) { //если кол-во раундов больше
    stopButton(); //блокировка кнопок
    winner(); //кто победил в игре
    tittle.style = `font-weight: bold; 
    color: red; `;
    tittle.textContent = winnerUser; //вывод сообщения кто победил в игре
    soundStart.stop();
    soundFinish.play();
  }
  else {
    tittle.textContent = 'Выбери жест для начала игры';
  }
}

//функция проверки кто победил в игре
function winner() {
  if (scoreUser.textContent > scoreComputer.textContent) {
    winnerUser = `Вы победили в игре. Счет  ${scoreUser.textContent} : ${scoreComputer.textContent}`;
  }
  else {
    winnerUser = `Вы проиграли в игре. Счет - ${scoreUser.textContent} : ${scoreComputer.textContent}`;
  }
  buttonRestart.style.display = 'block'; //показать кнопку рестарта
}

//функция блокировки кнопок пока идёт ход
function stopButton() {
  buttonStone.disabled = true; //запрет нажатия на кнопку
  buttonScissors.disabled = true;
  buttonPaper.disabled = true;
}

//разблокировка кнопок 
function startButton() {
  buttonStone.disabled = false; //снятие запрета нажатия на кнопку
  buttonScissors.disabled = false;
  buttonPaper.disabled = false;
}

//запуск раунда
function startRound(){
  winGame.textContent = ''; //очистка поля с победителем раунда
  tittle.textContent = ''; //очистка поля с победителем раунда
  userGesture.style = `animation-name: anim;`;
  compGesture.style = `animation-name: anim-2;`;
  stopButton(); //блокировка кнопок
  setTimeout(function(){ //запуск остановки раунда через 3,5 секунды
    stopRound();
  }, 3500);
}

//остановка раунда
function stopRound(){
  document.querySelector('.button__gesture').style.backgroundColor = ''; //снятие заливки на кнопке
  startButton(); //разблокировка кнопок
}

//рестарт раунда
buttonRestart.onclick = () => {
  startButton(); //разблокировка кнопок
  scoreUser.textContent = 0; //очки игрока
  scoreComputer.textContent = 0; //очки компьютера
  winGame.textContent = ``; //обнуление кто победил в раунде
  tittle.textContent = 'Выбери жест для начала игры';
  tittle.style.color = '#000';
  buttonRestart.style.display = 'none';
  userGesture.style = sample.imgHandUser;
  compGesture.style = sample.imgHandComp;
  soundStart.stop();
  soundStart.play();
};

// звук при начале игры
const soundStart = new Audio();
soundStart.src = './sound/mortal-kombat.mp3';
soundStart.volume = 0.02;

//функция остановки звука
HTMLAudioElement.prototype.stop = function() {
	soundStart.pause();
	soundStart.currentTime = 0.0;
}

//звук в конце игры
const soundFinish = new Audio();
soundFinish.src = './sound/winner.mp3';
soundFinish.volume = 0.5;

//проверка кнопок
startGame.onclick = (e) => {
  if(e.target.id === 'button__stone') { //кнопка камень
    e.target.style.backgroundColor = 'red';
    startRound(); //запуск раунда
    setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
      switch (random(0, 2)) {
        case 0:
            userGesture.style = sample.imgStoneUser; //пользователь камень
            compGesture.style = sample.imgStoneComp; //компьютер камень
            winGame.textContent = `Ничья в раунде`;
            e.target.style.backgroundColor = ''; //очистка красной обводки кнопки
          break;
        case 1:
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            userGesture.style = sample.imgStoneUser; //пользователь камень
            compGesture.style = sample.imgScissorsComp; //компьютер ножницы

            winGame.textContent = `Победа в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        case 2:
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style = sample.imgStoneUser; //пользователь камень
            compGesture.style = sample.imgPaperComp; //компьютер бумага
            winGame.textContent = `Проигрыш в раунде`;
            e.target.style.backgroundColor = '';
          break;
    }
    numberGames(); //проверка количество раундов
    }, 3500);
  }
  if(e.target.id === 'button__scissors') { //кнопка ножницы
    e.target.style.backgroundColor = 'red';
    startRound(); //запуск раунда
    setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
    switch (random(0, 2)) {
        case 0:
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style = sample.imgScissorsUser; //пользователь ножницы
            compGesture.style = sample.imgStoneComp; //компьютер камень
            winGame.textContent = `Проигрыш в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        case 1:
            userGesture.style = sample.imgScissorsUser; //пользователь ножницы
            compGesture.style = sample.imgScissorsComp; //компьютер ножницы
            winGame.textContent = `Ничья в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        case 2:
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            userGesture.style = sample.imgScissorsUser; //пользователь ножницы
            compGesture.style = sample.imgPaperComp; //компьютер бумага
            winGame.textContent = `Победа в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        }
    numberGames(); //проверка количество раундов
    }, 3500);
  }
  if(e.target.id === 'button__paper') { //кнопка бумага
    e.target.style.backgroundColor = 'red';
    startRound(); //запуск раунда
     setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
    switch (random(0, 2)) {
        case 0:
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            userGesture.style = sample.imgPaperUser; //пользователь бумага
            compGesture.style = sample.imgStoneComp; //компьютер камень
            winGame.textContent = `Победа в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        case 1:
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style = sample.imgPaperUser; //пользователь бумага
            compGesture.style = sample.imgScissorsComp; //компьютер ножницы
            winGame.textContent = `Проигрыш в раунде`;
            e.target.style.backgroundColor = '';
          break; 
        case 2:
            userGesture.style = sample.imgPaperUser; //пользователь бумага
            compGesture.style = sample.imgPaperComp; //компьютер бумага
            winGame.textContent = `Ничья в раунде`;
            e.target.style.backgroundColor = '';
          break; 
    }
    numberGames(); //проверка количество раундов
    }, 3500);
  }
}

//переименовать классы и id, по БЭМ

