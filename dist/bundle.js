/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/template.js
function templateEngine(block) {
  if (block === undefined || block === null || block === false) {
    return document.createTextNode('');
  }

  if (typeof block === 'string' || typeof block === 'number' || block === true) {
    return document.createTextNode(String(block));
  }

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();
    block.forEach(contentItem => {
      const el = templateEngine(contentItem);
      fragment.appendChild(el);
    });
    return fragment;
  }

  const element = document.createElement(block.block);
  [].concat(block.cls).filter(Boolean).forEach(className => element.classList.add(className));

  if (block.attrs) {
    Object.keys(block.attrs).forEach(key => {
      element.setAttribute(key, block.attrs[key]);
    });
  }

  element.appendChild(templateEngine(block.content));
  return element;
}
;// CONCATENATED MODULE: ./src/main_page.ts

function startGame() {
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
                                    }
                                ]
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
                                    }
                                ]
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
                                    }
                                ]
                            },
                        ]
                    }, {
                        block: 'button',
                        cls: 'box__button',
                        content: 'Старт'
                    }
                ]
            };
        }
        ;
        document.body.append(templateEngine(getFormField()));
        var radioAll = document.querySelectorAll('.number__radio');
        radioAll.forEach(function (radio) {
            radio.addEventListener('click', function () {
                if (radio.checked) {
                    var parent_1 = radio.parentElement;
                    parent_1.classList.add('number__checked');
                }
            });
        });
        var form = document.querySelector('.box');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            radioAll.forEach(function (radio) {
                if (radio.checked && radio.value === '1') {
                    window.application.renderScreen('level-1');
                }
                else if (radio.checked && radio.value === '2') {
                    window.application.renderScreen('level-2');
                }
                else if (radio.checked && radio.value === '3') {
                    window.application.renderScreen('level-3');
                }
            });
        });
    }
    ;
    window.application.screens['main-page'] = renderMainScreen;
}
;

;// CONCATENATED MODULE: ./src/timer.ts
var sec = 0;
var min = 0;
var indTime;
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    ;
}
;
function startTime() {
    indTime = setTimeout(addTime, 1000);
}
;
function stopTime() {
    clearTimeout(indTime);
    sec = 0;
    min = 0;
}
;
function addTime() {
    tick();
    var time = document.querySelector('.timer__time');
    time.textContent = (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    startTime();
}
;

;// CONCATENATED MODULE: ./src/generate.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cardData = [
    { imgSrc: './src/img/6-Clubs.png', name: '6-Clubs' },
    { imgSrc: './src/img/6-Diamonds.png', name: '6-Diamonds' },
    { imgSrc: './src/img/6-Hearts.png', name: '6-Hearts' },
    { imgSrc: './src/img/6-Spades.png', name: '6-Spades' },
    { imgSrc: './src/img/7-Clubs.png', name: '7-Clubs' },
    { imgSrc: './src/img/7-Diamonds.png', name: '7-Diamonds' },
    { imgSrc: './src/img/7-Hearts.png', name: '7-Hearts' },
    { imgSrc: './src/img/7-Spades.png', name: '7-Spades' },
    { imgSrc: './src/img/8-Clubs.png', name: '8-Clubs' },
    { imgSrc: './src/img/8-Diamonds.png', name: '8-Diamonds' },
    { imgSrc: './src/img/8-Hearts.png', name: '8-Hearts' },
    { imgSrc: './src/img/8-Spades.png', name: '8-Spades' },
    { imgSrc: './src/img/9-Clubs.png', name: '9-Clubs' },
    { imgSrc: './src/img/9-Diamonds.png', name: '9-Diamonds' },
    { imgSrc: './src/img/9-Hearts.png', name: '9-Hearts' },
    { imgSrc: './src/img/9-Spades.png', name: '9-Spades' },
    { imgSrc: './src/img/10-Clubs.png', name: '10-Clubs' },
    { imgSrc: './src/img/10-Diamonds.png', name: '10-Diamonds' },
    { imgSrc: './src/img/10-Hearts.png', name: '10-Hearts' },
    { imgSrc: './src/img/10-Spades.png', name: '10-Spades' },
    { imgSrc: './src/img/Ace-Clubs.png', name: 'Ace-Clubs' },
    { imgSrc: './src/img/Ace-Diamonds.png', name: 'Ace-Diamonds' },
    { imgSrc: './src/img/Ace-Hearts.png', name: 'Ace-Hearts' },
    { imgSrc: './src/img/Ace-Spades.png', name: 'Ace-Spades' },
    { imgSrc: './src/img/Jack-Clubs.png', name: 'Jack-Clubs' },
    { imgSrc: './src/img/Jack-Diamonds.png', name: 'Jack-Diamonds' },
    { imgSrc: './src/img/Jack-Hearts.png', name: 'Jack-Hearts' },
    { imgSrc: './src/img/Jack-Spades.png', name: 'Jack-Spades' },
    { imgSrc: './src/img/King-Clubs.png', name: 'King-Clubs' },
    { imgSrc: './src/img/King-Diamonds.png', name: 'King-Diamonds' },
    { imgSrc: './src/img/King-Hearts.png', name: 'King-Hearts' },
    { imgSrc: './src/img/King-Spades.png', name: 'King-Spades' },
    { imgSrc: './src/img/Queen-Clubs.png', name: 'Queen-Clubs' },
    { imgSrc: './src/img/Queen-Diamonds.png', name: 'Queen-Diamonds' },
    { imgSrc: './src/img/Queen-Hearts.png', name: 'Queen-Hearts' },
    { imgSrc: './src/img/Queen-Spades.png', name: 'Queen-Spades' },
];
var getRandomElements = function (sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
        var index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray.splice(index, 1)[0]);
    }
    return __spreadArray(__spreadArray([], result, true), result, true);
};
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
};

;// CONCATENATED MODULE: ./src/popup.ts
function renderPopup(src, message) {
    setTimeout(function () {
        var popup = document.createElement('div');
        var popupContent = document.createElement('div');
        var popupBox = document.createElement('div');
        document.body.append(popup);
        popup.classList.add('popup');
        document.body.append(popupContent);
        popupContent.classList.add('popup__content');
        popupContent.append(popupBox);
        popupBox.classList.add('box');
        popupBox.classList.add('popup__box');
        setTimeout(function () {
            popupBox.classList.add('popup__box-up');
        }, 200);
        var popupImg = document.createElement('img');
        popupImg.src = src;
        popupImg.classList.add('popup__img');
        popupBox.append(popupImg);
        var title = document.createElement('h1');
        title.classList.add('box__title');
        title.classList.add('popup__title');
        title.textContent = message;
        popupBox.append(title);
        var titleTime = document.createElement('p');
        titleTime.classList.add('popup__title-time');
        titleTime.textContent = 'Затраченное время:';
        popupBox.append(titleTime);
        var time = document.createElement('span');
        time.classList.add('popup__time');
        time.textContent = window.application.time;
        popupBox.append(time);
        var button = document.createElement('button');
        button.textContent = 'Играть снова';
        button.classList.add('box__button');
        popupBox.append(button);
        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
    }, 300);
}
;

;// CONCATENATED MODULE: ./src/card_field.ts



function getCardField(level) {
    var cardField = document.createElement('div');
    cardField.classList.add('card-field');
    if (level === 'level-1') {
        cardField.classList.add('card-field_one');
    }
    else if (level === 'level-2') {
        cardField.classList.add('card-field_two');
    }
    else if (level === 'level-3') {
        cardField.classList.add('card-field_three');
    }
    ;
    var randomData = getRandomElements(cardData, window.application.playerMoves / 2);
    shuffle(randomData);
    randomData.forEach(function (item) {
        var card = document.createElement('div');
        var face = document.createElement('div');
        var back = document.createElement('div');
        var faceImg = document.createElement('img');
        var backImg = document.createElement('img');
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
        setTimeout(function () {
            face.classList.add('toggle');
            back.classList.add('toggle-again');
        }, 5000);
        card.addEventListener('click', function () {
            window.application.playerMoves--;
            face.classList.remove('toggle');
            back.classList.remove('toggle-again');
            window.application.cards.push(item.name);
            var time = document.querySelector('.timer__time');
            if (window.application.cards.length === 2) {
                if (window.application.cards[0] !== window.application.cards[1]) {
                    stopTime();
                    window.application.time = time.textContent;
                    setTimeout(function () {
                        renderPopup('src/img/lose.png', 'Вы проиграли!');
                    }, 1000);
                }
                else if (window.application.playerMoves === 0) {
                    stopTime();
                    window.application.time = time.textContent;
                    setTimeout(function () {
                        renderPopup('src/img/win.png', 'Вы выиграли!');
                    }, 1000);
                }
                ;
                window.application.cards.length = 0;
            }
            ;
        });
    });
    document.body.append(cardField);
}
;

;// CONCATENATED MODULE: ./src/level_1.ts



function startLevelOne() {
    function renderLevelOneScreen() {
        document.body.style.cssText = 'flex-direction: column; gap: 45px;';
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
                            }
                        ],
                    },
                    {
                        block: 'button',
                        cls: 'box__button',
                        content: 'Начать заново'
                    },
                ],
            };
        }
        ;
        document.body.append(templateEngine(getTopField()));
        var button = document.querySelector('.box__button');
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };
        addTime();
        window.application.playerMoves = 6;
        getCardField('level-1');
    }
    ;
    window.application.screens['level-1'] = renderLevelOneScreen;
}
;

;// CONCATENATED MODULE: ./src/level_2.ts



function startLevelTwo() {
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
                            }
                        ],
                    },
                    {
                        block: 'button',
                        cls: 'box__button',
                        content: 'Начать заново'
                    },
                ],
            };
        }
        ;
        document.body.append(templateEngine(getTopField()));
        var button = document.querySelector('.box__button');
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };
        addTime();
        window.application.playerMoves = 12;
        getCardField('level-2');
    }
    ;
    window.application.screens['level-2'] = renderLevelTwoScreen;
}
;

;// CONCATENATED MODULE: ./src/level_3.ts



function startLevelThree() {
    function renderLevelThreeScreen() {
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
                            }
                        ],
                    },
                    {
                        block: 'button',
                        cls: 'box__button',
                        content: 'Начать заново'
                    },
                ],
            };
        }
        ;
        document.body.append(templateEngine(getTopField()));
        var button = document.querySelector('.box__button');
        button.onclick = function () {
            window.location.reload();
            window.application.renderScreen('main-page');
        };
        addTime();
        window.application.playerMoves = 18;
        getCardField('level-3');
    }
    ;
    window.application.screens['level-3'] = renderLevelThreeScreen;
}
;

;// CONCATENATED MODULE: ./src/index.ts





window.application = {
    screens: {},
    renderScreen: function (screenName) {
        document.body.textContent = '';
        this.screens["".concat(screenName)]();
    },
    cards: [],
    playerMoves: 3,
    time: ''
};
startGame();
startLevelOne();
startLevelTwo();
startLevelThree();
document.addEventListener('DOMContentLoaded', function () {
    window.application.renderScreen('main-page');
});

/******/ })()
;