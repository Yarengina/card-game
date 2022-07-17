import { addTime, resetTimer } from './timer';
import getTopField from './top_field';
import getCardField from './card_field';
import templateEngine from './template';
import { minNumberOfCards, indexLevelTwo } from './constants';

export default function startLevelTwo() {
    function renderLevelTwoScreen() {
        document.body.classList.add('levelTwoThree');

        document.body.append(templateEngine(getTopField()));

        const button = document.querySelector('.box__button') as HTMLElement;
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };

        resetTimer();
        addTime();

        window.application.playerMoves = minNumberOfCards * indexLevelTwo;

        getCardField('level-2');
    }

    window.application.screens['level-2'] = renderLevelTwoScreen;
}
