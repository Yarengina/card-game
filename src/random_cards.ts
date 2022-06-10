import { Cards } from './types';

export const getRandomCards = function (
    sourceArray: Array<Cards>,
    neededCards: number
) {
    const result = [];
    for (let i = 0; i < neededCards; i++) {
        const index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray.splice(index, 1)[0]);
    }
    return [...result, ...result];
};

export const minNumberOfCards = 6;
export const indexLevelOne = 1;
export const indexLevelTwo = 2;
export const indexLevelThree = 3;
