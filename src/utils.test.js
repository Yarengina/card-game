const { describe, it, expect } = require('@jest/globals');
const { shuffle } = require('./utils');

describe('shuffle()', () => {
    const array = [
        { imgSrc: 'One.png', name: 'One' },
        { imgSrc: 'Two.png', name: 'Two' },
        { imgSrc: 'Three.png', name: 'Three' },
        { imgSrc: 'Four.png', name: 'Four' },
        { imgSrc: 'Five.png', name: 'Five' },
        { imgSrc: 'Six.png', name: 'Six' },
    ];
    const beforeShuffle = [
        { imgSrc: 'One.png', name: 'One' },
        { imgSrc: 'Two.png', name: 'Two' },
        { imgSrc: 'Three.png', name: 'Three' },
        { imgSrc: 'Four.png', name: 'Four' },
        { imgSrc: 'Five.png', name: 'Five' },
        { imgSrc: 'Six.png', name: 'Six' },
    ];

    it('should be shuffled array', () => {
        shuffle(array);
        const expectedArray = array;

        expect(expectedArray).not.toEqual(beforeShuffle);
    });

    it('should match arrays length', () => {
        shuffle(array);
        const expectedArray = array;

        expect(expectedArray).toHaveLength(6);
    });

    it('should contain elements', () => {
        shuffle(array);
        const expectedArray = array;

        expect(expectedArray).toEqual(expect.arrayContaining(beforeShuffle));
    });
});
