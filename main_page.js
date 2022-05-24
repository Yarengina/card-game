function renderMainScreen() {
  const formField = document.createElement('form');
  formField.classList.add('box');
  formField.action = '#';
  document.body.append(formField);

  const title = document.createElement('h1');
  title.classList.add('box__title');
  title.textContent = 'Выбери сложность';
  formField.append(title);

  const levels = document.createElement('div');
  levels.classList.add('box__number');
  formField.append(levels);

  const labelOne = document.createElement('label');
  labelOne.classList.add('number');
  levels.append(labelOne);

  const inputOne = document.createElement('input');
  inputOne.classList.add('number__radio');
  inputOne.type = 'radio';
  inputOne.value = '1';
  labelOne.append(inputOne);

  const spanOne = document.createElement('span');
  spanOne.classList.add('number__text');
  spanOne.textContent = '1';
  labelOne.append(spanOne);

  const labelTwo = document.createElement('label');
  labelTwo.classList.add('number');
  levels.append(labelTwo);

  const inputTwo = document.createElement('input');
  inputTwo.classList.add('number__radio');
  inputTwo.type = 'radio';
  inputTwo.value = '2';
  labelTwo.append(inputTwo);

  const spanTwo = document.createElement('span');
  spanTwo.classList.add('number__text');
  spanTwo.textContent = '2';
  labelTwo.append(spanTwo);

  const labelThree = document.createElement('label');
  labelThree.classList.add('number');
  levels.append(labelThree);

  const inputThree = document.createElement('input');
  inputThree.classList.add('number__radio');
  inputThree.type = 'radio';
  inputThree.value = '3';
  labelThree.append(inputThree);

  const spanThree = document.createElement('span');
  spanThree.classList.add('number__text');
  spanThree.textContent = '3';
  labelThree.append(spanThree);

  const button = document.createElement('button');
  button.textContent = 'Старт';
  button.classList.add('box__button');
  formField.append(button);

  const radioAll = document.querySelectorAll('.number__radio');

  radioAll.forEach((radio) => {
    radio.addEventListener('click', () => {
      if (radio.checked) {
        const parent = radio.parentElement;
        parent.style.background = '#0080C1';
      }
    });
  });

  formField.addEventListener('submit', (event) => {
    event.preventDefault();
    radioAll.forEach((radio) => {
      if (radio.checked && radio.value === '1') {
        window.application.renderScreen('level-1');
      } else if (radio.checked && radio.value === '2') {
        window.application.renderScreen('level-2');
      } else if (radio.checked && radio.value === '3') {
        window.application.renderScreen('level-3');
      }
    });
  });
}

window.application.screens['main-page'] = renderMainScreen;
