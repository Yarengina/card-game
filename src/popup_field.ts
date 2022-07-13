export default function getPopupField(src: string, message: string) {
    setTimeout(() => {
        const popup = document.createElement('div');
        const popupContent = document.createElement('div');
        const popupBox = document.createElement('div');

        document.body.append(popup);
        popup.classList.add('popup');

        document.body.append(popupContent);
        popupContent.classList.add('popup__content');
        popupContent.append(popupBox);

        popupBox.classList.add('box');
        popupBox.classList.add('popup__box');
        setTimeout(() => {
            popupBox.classList.add('popup__box-up');
        }, 200);

        const popupImg = document.createElement('img');
        popupImg.src = src;

        popupImg.classList.add('popup__img');
        popupBox.append(popupImg);

        const title = document.createElement('h1');
        title.classList.add('box__title');
        title.classList.add('popup__title');
        title.textContent = message;
        popupBox.append(title);

        const titleTime = document.createElement('p');
        titleTime.classList.add('popup__title-time');
        titleTime.textContent = 'Затраченное время:';
        popupBox.append(titleTime);

        const time = document.createElement('span');
        time.classList.add('popup__time');
        time.textContent = window.application.time;
        popupBox.append(time);

        const button = document.createElement('button');
        button.textContent = 'Играть снова';
        button.classList.add('box__button');
        popupBox.append(button);

        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
    }, 300);
}
