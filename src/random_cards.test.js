import { jest, describe, it, expect } from '@jest/globals';
import { getRandomCards } from './random_cards';

Math.random = jest.fn();

describe('getRandomCards()', () => {
    it('should create new array of length 6 from source array', () => {
        const sourceArray = [
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Five.png', name: 'Five' },
        ];
        const numberPairsOfCards = 3;

        Math.random.mockImplementation(() => 0.5);

        expect(getRandomCards(sourceArray, numberPairsOfCards)).toHaveLength(6);
    });

    it('should create new array of 4 pairs of random cards', () => {
        const sourceArray = [
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'Six.png', name: 'Six' },
        ];
        const numberPairsOfCards = 4;

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
        expect(getRandomCards(sourceArray, numberPairsOfCards)).toEqual(
            expectedArray
        );
    });
});
