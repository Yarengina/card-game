function renderLevelThreeScreen() {
    document.body.style.cssText = 'flex-direction: column; gap: 35px;'

    const topField = document.createElement('div');
    topField.classList.add('top-field');
    topField.style.cssText = 'display: flex; align-items: center; gap: 170px;'
    
    const timer = document.createElement('div');
    timer.classList.add('timer');
    const timerMin = document.createElement('span');
    timerMin.textContent = 'min';
    timerMin.classList.add('timer__unit');
    const timerSek = document.createElement('span');
    timerSek.textContent = 'sek';
    timerSek.classList.add('timer__unit');
    const time = document.createElement('p');
    time.textContent = '00.00';
    time.classList.add('timer__time');
    timer.append(timerMin);
    timer.append(timerSek);
    timer.append(time);

    const button = document.createElement('button');
    button.textContent = 'Начать заново';
    button.classList.add('box__button');

    topField.append(timer);
    topField.append(button);

    const cardField = document.createElement('div');
    cardField.classList.add('card-field');
    cardField.style.cssText = 'width: 600px;'
    const numberOfCards = 18;
    for (let i = 0; i < numberOfCards; i++) {
        const img = document.createElement('img');
        img.src = "img/card.png";
        img.classList.add('img');
        img.style.cssText = 'padding-right: 5px;'
        cardField.append(img);
    };

    document.body.append(topField);
    document.body.append(cardField);
}

window.application.screens['level-3'] = renderLevelThreeScreen;