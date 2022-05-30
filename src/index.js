import './styles/style.css';
import startGame from './main_page';
import startLevelOne from './level_1';
import startLevelTwo from './level_2';
import startLevelThree from './level_3';

window.application = {
    screens: {},
    renderScreen: function (screenName) {
        document.body.textContent = '';
        this.screens[`${screenName}`]();
    },
    cards: [],
};

startGame();
startLevelOne();
startLevelTwo();
startLevelThree();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('main-page');
});
