import { Cards } from './types';

export const getRandomCards = function (
    sourceArray: Array<Cards>,
    neededCards: number
) {
    const result = [];
    for (let i = 0; i < neededCards; i++) {
        const randomIndex = Math.floor(Math.random() * sourceArray.length);
        const randomCard = sourceArray.splice(randomIndex, 1)[0];
        result.push(randomCard);
    }
    return [...result, ...result];
};
