import { addTime, resetTimer } from './timer';
import getTopField from './top_field';
import getCardField from './card_field';
import templateEngine from './template';
import { minNumberOfCards, indexLevelThree } from './constants';

export default function startLevelThree() {
    function renderLevelThreeScreen() {
        document.body.classList.add('levelTwoThree');

        document.body.append(templateEngine(getTopField()));

        const button = document.querySelector('.box__button') as HTMLElement;
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };

        resetTimer();
        addTime();

        window.application.playerMoves = minNumberOfCards * indexLevelThree;

        getCardField('level-3');
    }

    window.application.screens['level-3'] = renderLevelThreeScreen;
}
