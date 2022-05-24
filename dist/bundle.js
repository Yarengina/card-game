/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.application = {
  screens: {},
  renderScreen: function (screenName) {
    document.body.textContent = '';
    this.screens[`${screenName}`]();
  },
  cards: []
};
document.addEventListener('DOMContentLoaded', () => {
  window.application.renderScreen('main-page');
});
/******/ })()
;