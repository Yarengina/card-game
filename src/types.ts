export type Screens = {
    [key: string]: Function;
};
export type WindowApp = {
    screens: Screens;
    renderScreen: Function;
    cards: Array<string>;
    playerMoves: number;
    time: string | null;
};
declare global {
    interface Window {
        Window: Window;
        application: WindowApp;
    }
}
export type Cards = {
    imgSrc: string;
    name: string;
};
