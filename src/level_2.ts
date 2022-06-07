import { addTime } from './timer';
import getCardField from './card_field';
import templateEngine from './template';

export default function startLevelTwo() {
  function renderLevelTwoScreen() {
    document.body.style.cssText = 'flex-direction: column; gap: 35px;';

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
                  content: 'min'
                  }, {
                  block: 'span',
                  cls: 'timer__unit',
                  content: 'sec'
                  }, {
                  block: 'p',
                  cls: 'timer__time',
                  }],
              }, 
              {
              block: 'button',
              cls: 'box__button',
              content: 'Начать заново'
              },
          ],
      };
  };

  document.body.append(templateEngine(getTopField()));

  const button: HTMLElement = document.querySelector('.box__button') as HTMLElement;
  button.onclick = function() {
      window.location.reload();
      window.application.renderScreen('main-page');
  };
  
  addTime();

  window.application.playerMoves = 12;

  getCardField('level-2');  
  };
  window.application.screens['level-2'] = renderLevelTwoScreen;
};