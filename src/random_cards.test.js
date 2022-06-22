import { jest, describe, it, expect } from '@jest/globals';
import { getRandomCards } from './random_cards';

Math.random = jest.fn();

describe('getRandomCards()', () => {
    it('should make an array of the length 6', () => {
        const array = [
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Five.png', name: 'Five' },
        ];
        const neededCards = 3;

        Math.random.mockImplementation(() => 0.5);

        expect(getRandomCards(array, neededCards)).toHaveLength(6);
    });

    it('should make an array of random cards', () => {
        const array = [
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'Six.png', name: 'Six' },
        ];
        const neededCards = 4;

        Math.random.mockImplementation(() => 0.4);

        const expectedArray = [
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Five.png', name: 'Five' },
        ];
        expect(getRandomCards(array, neededCards)).toEqual(expectedArray);
    });
});
