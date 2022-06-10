import { addTime, resetTimer } from './timer';
import getCardField from './card_field';
import templateEngine from './template';
import { minNumberOfCards, indexLevelThree } from './constants';

export default function startLevelThree() {
    function renderLevelThreeScreen() {
        document.body.classList.add('levelTwoThree');

        function getTopField() {
            return {
                block: 'div',
                cls: 'top-field',
                content: [
                    {
                        block: 'div',
                        cls: 'timer',
                        content: [
                            {
                                block: 'span',
                                cls: 'timer__unit',
                                content: 'min',
                            },
                            {
                                block: 'span',
                                cls: 'timer__unit',
                                content: 'sec',
                            },
                            {
                                block: 'p',
                                cls: 'timer__time',
                            },
                        ],
                    },
                    {
                        block: 'button',
                        cls: 'box__button',
                        content: 'Начать заново',
                    },
                ],
            };
        }

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
