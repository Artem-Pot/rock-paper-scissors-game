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

const button = document.querySelector('.page__2_gesture-user');

scoreUser.textContent = 0;
scoreComputer.textContent = 0;
scoreGameСheck.textContent = 1;
scoreGameTotal.textContent = 3;
const arr = ['камень','ножницы','бумага'];


//функция рандомного выбора компьютера
function random(min, max) {
    // return Number(Math.floor(Math.random() * 3));
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//прослушка события нажатия на камень
buttonStone.addEventListener("click", function () {
    switch (random(0, 2)) {
        case 0:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 1:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            userGesture.style =  `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 2:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style =  `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(1, 1);`;
          break;
    }
})

//прослушка события нажатия на ножницы
buttonScissors.addEventListener("click", function () {
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style =  `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 1:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 2:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            userGesture.style =  `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            `;
            compGesture.style = `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(1, 1);`;
          break; 
        }
})

// //прослушка события нажатия на бумагу
buttonPaper.addEventListener("click", function () {
    switch (random(0, 2)) {
        case 0:
            console.log(`пользователь победил`);
            scoreUser.textContent = Number(scoreUser.textContent) + 1;
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style =  `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);
            `;
            compGesture.style = `background: url(../img/1.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 1:
            console.log(`пользователь проиграл`);
            scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
            userGesture.style =  `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);
            `;
            compGesture.style = `background: url(../img/2.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);`;
          break; 
        case 2:
            console.log(`ничья`);
            userGesture.style =  `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(-1, 1);
            `;
            compGesture.style = `background: url(../img/3.jpg) no-repeat center center;
            width: 500px;
            height: 300px;
            background-size: 500px 300px;
            transform: scale(1, 1);`;
          break; 
    }
})
//объединить когда победил ,проиграл и ничья