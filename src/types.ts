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
export type Cards = {
    imgSrc: string;
    name: string;
};
