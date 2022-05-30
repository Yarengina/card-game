import { cardData, getRandomElements, shuffle } from './generate';
import renderPopup from './popup';

export default function startLevelTwo() {
  function renderLevelTwoScreen() {
    document.body.style.cssText = 'flex-direction: column; gap: 35px;';

    const topField = document.createElement('div');
    topField.classList.add('top-field');
    topField.style.cssText = 'display: flex; align-items: center; gap: 50px;';

    const timer = document.createElement('div');
    timer.classList.add('timer');
    const timerMin = document.createElement('span');
    timerMin.textContent = 'min';
    timerMin.classList.add('timer__unit');
    const timerSek = document.createElement('span');
    timerSek.textContent = 'sec';
    timerSek.classList.add('timer__unit');
    const time = document.createElement('p');
    time.classList.add('timer__time');
    timer.append(timerMin);
    timer.append(timerSek);
    timer.append(time);

    let sec = 0;
    let min = 0;
    let indTime: number;
    function tick() {
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
      }
    }
    function addTime() {
      tick();
      time.textContent =
        (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
      timerTime();
    }
    function timerTime() {
      indTime = window.setTimeout(addTime, 1000);
    }
    addTime();

    const button = document.createElement('button');
    button.textContent = 'Начать заново';
    button.classList.add('box__button');
    button.onclick = function () {
      window.application.renderScreen('main-page');
    };

    topField.append(timer);
    topField.append(button);

    const cardField = document.createElement('div');
    cardField.classList.add('card-field');
    cardField.style.cssText = 'width: 440px;';

    const randomData = getRandomElements(cardData, 6);
    shuffle(randomData);

    randomData.forEach((item) => {
      const card = document.createElement('div');
      const face = document.createElement('div');
      const back = document.createElement('div');

      const faceImg = document.createElement('img');
      const backImg = document.createElement('img');

      card.classList.add('card');
      face.classList.add('face');
      back.classList.add('back');

      faceImg.classList.add('face-img');
      backImg.classList.add('back-img');

      faceImg.src = item.imgSrc;
      backImg.src = 'src/img/card.png';

      cardField.append(card);
      card.append(face);
      card.append(back);

      face.append(faceImg);
      back.append(backImg);

      setTimeout(() => {
        face.classList.add('toggle');
        back.classList.add('toggle-again');
      }, 5000);

      window.application.playerMoves = 12;

      card.addEventListener('click', () => {
        window.application.playerMoves--;
        face.classList.remove('toggle');
        back.classList.remove('toggle-again');

        window.application.cards.push(item.name);

        if (window.application.cards.length === 2) {
          if (window.application.cards[0] !== window.application.cards[1]) {
            clearTimeout(indTime);
            window.application.time = time.textContent;
            setTimeout(() => {
              renderPopup('src/img/lose.png', 'Вы проиграли!');
            }, 1000);
          } else if (window.application.playerMoves === 0) {
            clearTimeout(indTime);
            window.application.time = time.textContent;
            setTimeout(() => {
              renderPopup('src/img/win.png', 'Вы выиграли!');
            }, 1000);
          };
          window.application.cards.length = 0;
        };
      });
    });
    document.body.append(topField);
    document.body.append(cardField);
  }

  window.application.screens['level-2'] = renderLevelTwoScreen;
}