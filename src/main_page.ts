import templateEngine from './template';

export default function startGame() {
  function renderMainScreen() {
    function getFormField() {
      return {
          block: 'form',
          cls: 'box',
          attrs: {
              action: "#"
          },
          content: [
              {
              block: 'h1',
              cls: 'box__title',
              content: 'Выбери сложность'
              }, {
              block: 'div',
              cls: 'box__number',
              content: [
                  {
                  block: 'label',
                  cls: 'number',
                  attrs: {
                    for: '1',
                    },
                  content: [
                      {
                      block: 'input',
                      cls: 'number__radio',
                      attrs: {
                          type: 'radio',
                          id: '1',
                          value: '1'
                          }
                      },
                      {
                      block: 'span',
                      cls: 'number__text',
                      content: '1'
                      }]
                  },
                  {
                  block: 'label',
                  cls: 'number',
                  attrs: {
                    for: '2',
                    },
                  content: [
                      {
                      block: 'input',
                      cls: 'number__radio',
                      attrs: {
                          type: 'radio',
                          id: '2',
                          value: '2'
                          }
                      },
                      {
                      block: 'span',
                      cls: 'number__text',
                      content: '2'
                      }]
                  },
                  {
                  block: 'label',
                  cls: 'number',
                  attrs: {
                    for: '3',
                    },
                  content: [
                      {
                      block: 'input',
                      cls: 'number__radio',
                      attrs: {
                          type: 'radio',
                          id: '3',
                          value: '3'
                          }
                      },
                      {
                      block: 'span',
                      cls: 'number__text',
                      content: '3'
                      }]
                  },
              ]
              }, {
              block: 'button',
              cls: 'box__button',
              content: 'Старт'
          }]
      };
    };
  
    document.body.append(templateEngine(getFormField()));

    const radioAll = document.querySelectorAll('.number__radio');

    radioAll.forEach(radio => {
        radio.addEventListener('click', () => {
            if ((radio as HTMLInputElement).checked) {
                const parent = radio.parentElement as HTMLElement;
                parent.classList.add('number__checked');
            }
        });
    });

    const form: HTMLElement = document.querySelector('.box') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        radioAll.forEach(radio => {
            if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value === '1') {
                window.application.renderScreen('level-1');
            } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value === '2') {
                window.application.renderScreen('level-2');
            } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value === '3') {
                window.application.renderScreen('level-3');
            } 
        });
    });
  };
  window.application.screens['main-page'] = renderMainScreen;
};