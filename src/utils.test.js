import { jest } from '@jest/globals';
const { describe, it, expect } = require('@jest/globals');
const { shuffle } = require('./utils');

Math.random = jest.fn();

describe('shuffle()', () => {
    const array = [
        { imgSrc: 'One.png', name: 'One' },
        { imgSrc: 'Two.png', name: 'Two' },
        { imgSrc: 'Three.png', name: 'Three' },
        { imgSrc: 'Four.png', name: 'Four' },
        { imgSrc: 'Five.png', name: 'Five' },
        { imgSrc: 'Six.png', name: 'Six' },
    ];

    it('should be shuffled array', () => {
        Math.random.mockImplementation(() => 0.4);
        shuffle(array);
        const expectedArray = [
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Six.png', name: 'Six' },
            { imgSrc: 'Three.png', name: 'Three' },
        ];
        expect(expectedArray).toEqual(array);
    });

    it('should not change length of array', () => {
        Math.random.mockImplementation(() => 0.5);
        shuffle(array);
        const expectedArray = [
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Six.png', name: 'Six' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Two.png', name: 'Two' },
        ];
        expect(expectedArray).toHaveLength(6);
    });

    it('should contain elements', () => {
        Math.random.mockImplementation(() => 0.6);
        shuffle(array);
        const expectedArray = [
            { imgSrc: 'Five.png', name: 'Five' },
            { imgSrc: 'Four.png', name: 'Four' },
            { imgSrc: 'Three.png', name: 'Three' },
            { imgSrc: 'One.png', name: 'One' },
            { imgSrc: 'Two.png', name: 'Two' },
            { imgSrc: 'Six.png', name: 'Six' },
        ];
        expect(expectedArray).toEqual(expect.arrayContaining(array));
    });
});
