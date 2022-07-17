import { addTime, resetTimer } from './timer';
import getTopField from './top_field';
import getCardField from './card_field';
import templateEngine from './template';
import { minNumberOfCards, indexLevelOne } from './constants';

export default function startLevelOne() {
    function renderLevelOneScreen() {
        document.body.classList.add('levelOne');

        document.body.append(templateEngine(getTopField()));

        const button = document.querySelector('.box__button') as HTMLElement;
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };

        resetTimer();
        addTime();

        window.application.playerMoves = minNumberOfCards * indexLevelOne;

        getCardField('level-1');
    }

    window.application.screens['level-1'] = renderLevelOneScreen;
}
