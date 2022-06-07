import './styles/style.scss';
import startGame from './main_page';
import startLevelOne from './level_1';
import startLevelTwo from './level_2';
import startLevelThree from './level_3';
type Screens = {
    [key: string]: Function
}
type WindowApp = {
    screens: Screens,
    renderScreen: Function,
    cards: Array<string>,
    playerMoves: number,
    time: string | null
}
declare global {
    interface Window {
        Window: Window;
        application: WindowApp;
    }
}

window.application = {
    screens: {},
    renderScreen: function (screenName: string) {
        document.body.textContent = '';
        this.screens[`${screenName}`]();
    },
    cards: [],
    playerMoves: 3,
    time: ''
};

startGame();
startLevelOne();
startLevelTwo();
startLevelThree();

document.addEventListener('DOMContentLoaded', () => {
    window.application.renderScreen('main-page');
});
