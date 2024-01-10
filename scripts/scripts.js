const buttonStart = document.querySelector('#button__start'); //кнопка запуска игры 1 страницы
const buttonRestart = document.querySelector('#button__restart'); //кнопка перезапуска игры 2 страницы

const scoreUser = document.querySelector('.page__2_score-user'); //счет пользователя
const scoreComputer = document.querySelector('.page__2_score-computer'); //счет компьютера
const scoreGameСheck = document.querySelector('.page__2_score-game1'); //какая по счету игра
const scoreGameTotal = document.querySelector('.page__2_score-game2'); //всего играть игр

const userGesture = document.querySelector('.page__2_box-img-user'); //изображение пользователя
const compGesture = document.querySelector('.page__2_box-img-comp'); //изображение компьютера

const buttonStone = document.querySelector('#button__stone'); //кнопка камень
const buttonScissors = document.querySelector('#button__scissors'); //кнопка ножницы
const buttonPaper = document.querySelector('#button__paper'); //кнопка бумага

const tittle = document.querySelector('.page__2_box > span');
const button = document.querySelector('.page__2_gesture-user');

let winnerUser = ''; //переменная - кто победил
const winGame = document.querySelector('.page__2_box-img span'); //итог раунда

scoreUser.textContent = 0; //очки игрока
scoreComputer.textContent = 0; //очки компьютера
scoreGameСheck.textContent = 0; // текущая игра
scoreGameTotal.textContent = 3; //всего количество игр

let games = false; //переменная игры

//рестарт игры 
buttonRestart.onclick = () => {
    scoreUser.textContent = 0; //очки игрока
    scoreComputer.textContent = 0; //очки компьютера
    scoreGameСheck.textContent = 0; // текущий раунд
    scoreGameTotal.textContent = 3; //всего количество раундов
    buttonStone.disabled = false; //снятие запрета нажатия на кнопку
    buttonScissors.disabled = false; //снятие запрета нажатия на кнопку
    buttonPaper.disabled = false; //снятие запрета нажатия на кнопку
    tittle.textContent = 'Выбери жест для начала игры';
    tittle.style = ` color: #000; `;
    buttonRestart.style.display = 'none';
};

//функция рандомного выбора компьютера
function random(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
}

//функция проверки кто победил в игре
function winner() {
  if (scoreUser.textContent > scoreComputer.textContent) {
    winnerUser = `Поздравляю, Вы победили со счетом ${scoreUser.textContent} : ${scoreComputer.textContent}`;
  }
  else {
     winnerUser = `Увы, Вы проиграли со счетом ${scoreUser.textContent} : ${scoreComputer.textContent}`;
  }
  buttonRestart.style.display = 'block'; //показать кнопку рестарта
}

//функция запрета играть больше раундов чем задал пользователь
function numberGames(){
  if (scoreGameСheck.textContent >= scoreGameTotal.textContent) { //если кол-во игр больше чем должно быть
    console.log(`конец игры`);
    stopButton();
    winner();
    tittle.style = `font-weight: bold; 
    color: red; `;
    tittle.textContent = winnerUser; //вывод сообщения кто победил в игре
  }
  else {
    return;
  }
}

//функция отключения кнопок пока идёт ход
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
  document.querySelector('.button__gesture').style.backgroundColor = 'red';
  winGame.textContent = ''; //очистка поля с победителем раунда
  userGesture.style = `background: url(../img/5.png) no-repeat center center;
  width: 400px;
  height: 300px;
  background-size: 400px 300px;
  animation-duration: 1s;
  animation-name: anim;
  animation-iteration-count: infinite;`;
  compGesture.style = `background: url(../img/4.png) no-repeat center center;
  width: 400px;
  height: 300px;
  background-size: 400px 300px;
  animation-duration: 1s;
  animation-name: anim-2;
  animation-iteration-count: infinite;`;
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

//прослушка события нажатия на камень
buttonStone.addEventListener("click", function () {
    startRound(); //запуск раунда
    setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
      switch (random(0, 2)) {
        case 0:
            console.log(`ничья`);
            userGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Ничья`;
          break;
        case 1:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы победили`;
          break; 
        case 2:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы проиграли`;
          break;
    }
    numberGames(); //проверка количество раундов
    }, 3500);
})

// прослушка события нажатия на ножницы
buttonScissors.addEventListener("click", function () {
    startRound(); //запуск раунда
    setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы проиграли`;
          break; 
        case 1:
            console.log(`ничья`);
            userGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Ничья`;
          break; 
        case 2:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы победили`;
          break; 
        }
numberGames(); //проверка количество раундов
}, 3500);
})

//прослушка события нажатия на бумагу
buttonPaper.addEventListener("click", function () {
     startRound(); //запуск раунда
     setTimeout(function(){ //запуск игры через 3,5 секунды после нажатия на кнопку
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style = `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы победили`;
          break; 
        case 1:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Вы проиграли`;
          break; 
        case 2:
            console.log(`ничья`);
            userGesture.style = `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(./img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            winGame.textContent = `В этом раунде - Ничья`;
          break; 
    }
numberGames(); //проверка количество раундов
}, 3500);
})

//убрать косяки с большим количеством раундов чем должно быть (необходимо после последнего раунда выходить а не давать нажимать на кнопку и сразу писать кто победил)
//добавить анимацию, чтобы пользователь выбирал кнопки после раунда
//убоать фразу выбрать жест когда идет раунд
//для красной кнопки добавить через event.target иначе будет только для первой кнопки

//Логика игры с таймерами:
// Игрок выбирает жест(жест остается подсвеченным), проходит 3 секунды и начинается игра(3 кивка рукой)
// Появляется надпись кто победил. Через 3 секунды пропадают жесты и снова появляются кивающие руки ждущие следуюнего раунда
//
//
//
//
//кнопку перезапуска в одноу строчку с победителем игры
//сделать чтобы после нажатия нельзя было нажать снова, до тех пор пока не закончился кон
//на 1 странице сделать выбор количества игр
//играть столько игр сколько их было в начале
//добавить кнопку рестарт
//добавить звуки
//вместо большого количество кода стилей - добавлять или отнимать классы стилей

