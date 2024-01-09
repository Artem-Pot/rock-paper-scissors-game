const buttonStart = document.querySelector('#button__start'); //кнопка запуска игры 1 страницы

const scoreUser = document.querySelector('.page__2_score-user'); //счет пользователя
const scoreComputer = document.querySelector('.page__2_score-computer'); //счет компьютера
const scoreGameСheck = document.querySelector('.page__2_score-game1'); //какая по счету игра
const scoreGameTotal = document.querySelector('.page__2_score-game2'); //всего играть игр

const userGesture = document.querySelector('.page__2_box-img-user'); //изображение пользователя
const compGesture = document.querySelector('.page__2_box-img-comp'); //изображение компьютера

const buttonStone = document.querySelector('#button__stone'); //кнопка камень
const buttonScissors = document.querySelector('#button__scissors'); //кнопка ножницы
const buttonPaper = document.querySelector('#button__paper'); //кнопка бумага

const tittle = document.querySelector('.page__2_gesture > span');
const button = document.querySelector('.page__2_gesture-user');

let winnerUser = ''; //переменная - кто победил

const winGame = document.querySelector('.page__2_box-img span'); //изображение пользователя

scoreUser.textContent = 0; //очки игрока
scoreComputer.textContent = 0; //очки компьютера
scoreGameСheck.textContent = 1; // текущая игра
scoreGameTotal.textContent = 3; //всего количество игр

buttonStart.onclick = () => {
  document.querySelector('.page__1').classList.remove('active');
  document.querySelector('.page__2').classList.add('active');
};

//функция рандомного выбора компьютера
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//функция проверки кто победил в игре
function winner() {
  if (scoreUser.textContent > scoreComputer.textContent) {
    winnerUser = 'Вы победили.';
  }
  else {
     winnerUser = 'Вы проиграли.';
  }
}

//функция запрета играть больше игр чем задал пользователь
function numberGames(){
  console.log(scoreGameСheck.textContent);
  console.log(scoreGameTotal.textContent);
  if (scoreGameСheck.textContent > scoreGameTotal.textContent) { //если кол-во игр больше чем должно быть
    buttonStone.disabled = true; //запрет нажатия на кнопку
    buttonScissors.disabled = true; //запрет нажатия на кнопку
    buttonPaper.disabled = true; //запрет нажатия на кнопку
    winner();
    tittle.style = `font-size: 30px; 
    font-weight: bold; 
    color: red; `;
    tittle.textContent = winnerUser; //вывод сообщения кто победил
  }
  else {
    return;
  }
}

//прослушка события нажатия на камень
buttonStone.addEventListener("click", function () {
    numberGames();
    switch (random(0, 2)) {
        case 0:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ничья`;
          break; 
        case 1:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты победил`;
          break; 
        case 2:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты проиграл`;
          break;
    }
})

//прослушка события нажатия на ножницы
buttonScissors.addEventListener("click", function () {
    numberGames();
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты проиграл`;
          break; 
        case 1:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ничья`;
          break; 
        case 2:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты победил`;
          break; 
        }
})

// //прослушка события нажатия на бумагу
buttonPaper.addEventListener("click", function () {
    numberGames();
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/1.png) no-repeat center center;
            width: 400px;
            height: 250px;
            background-size: 300px auto;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты победил`;
          break; 
        case 1:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            scoreGameСheck.textContent++;
            userGesture.style =  `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/2.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px 200px;
            transform: scale(-1, 1);
            animation-iteration-count: 0; `;
            winGame.textContent = `Ты проиграл`;
          break; 
        case 2:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(-1, 1); 
            animation-iteration-count: 0; `;
            compGesture.style = `background: url(../img/3.png) no-repeat center center;
            width: 400px;
            height: 200px;
            background-size: 400px auto;
            transform: scale(1, 1); 
            animation-iteration-count: 0; `;
            winGame.textContent = `Ничья`;
          break; 
    }
})


//убрать косяки с большим количеством раундов чем должно быть

//Логика игры с таймерами:
// Игрок выбирает жест(жест остается подсвеченным), проходит 3 секунды и начинается игра(3 кивка рукой)
// Появляется надпись кто победил. Через 3 секунды пропадают жесты и снова появляются кивающие руки ждущие следуюнего раунда
//
//
//
//
//
//сделать чтобы после нажатия нельзя было нажать снова, до тех пор пока не закончился кон
//на 1 странице сделать выбор количества игр
//играть столько игр сколько их было в начале
//добавить кнопку рестарт
//добавить звуки

