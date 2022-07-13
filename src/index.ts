import './styles/style.scss';
import startGame from './start_game';
import startLevelOne from './level_1';
import startLevelTwo from './level_2';
import startLevelThree from './level_3';

window.application = {
    screens: {},
    renderScreen: function (screenName: string) {
        document.body.textContent = '';
        this.screens[`${screenName}`]();
    },
    cards: [],
    playerMoves: 3,
    time: '',
};

startGame();
startLevelOne();
startLevelTwo();
startLevelThree();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('main-page');
});
