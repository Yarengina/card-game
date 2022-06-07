import { cardData, getRandomElements, shuffle } from './generate';
import renderPopup from './popup';
import { stopTime } from './timer';


export default function getCardField(level:string) {
    const cardField = document.createElement('div');
    cardField.classList.add('card-field');

    if (level === 'level-1') {
        cardField.classList.add('card-field_one');
    } else if (level === 'level-2') {
        cardField.classList.add('card-field_two');
    } else if (level === 'level-3') {
        cardField.classList.add('card-field_three');
    };

    const randomData = getRandomElements(cardData, window.application.playerMoves/2);
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
        backImg.src = "src/img/card.png";

        cardField.append(card);
        card.append(face);
        card.append(back);

        face.append(faceImg);
        back.append(backImg);

        setTimeout(() => {
            face.classList.add('toggle');
            back.classList.add('toggle-again');
        }, 5000);

        card.addEventListener('click', () => {
            window.application.playerMoves--;
            face.classList.remove('toggle');
            back.classList.remove('toggle-again');

            window.application.cards.push(item.name);
            const time: HTMLElement = document.querySelector('.timer__time') as HTMLElement;

            if (window.application.cards.length === 2) {
                if (window.application.cards[0] !== window.application.cards[1]) {
                    stopTime();
                    window.application.time = time.textContent;
                    setTimeout(() => {
                      renderPopup('src/img/lose.png', 'Вы проиграли!');
                    }, 1000);
                  } else if (window.application.playerMoves === 0) {
                    stopTime();
                    window.application.time = time.textContent;
                    setTimeout(() => {
                      renderPopup('src/img/win.png', 'Вы выиграли!');
                    }, 1000);
                  };
                window.application.cards.length = 0;
            };
        });
    });
    document.body.append(cardField);
};