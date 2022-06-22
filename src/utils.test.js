import { jest, describe, it, expect } from '@jest/globals';
import { shuffle } from './utils';

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

    it('should shuffle array', () => {
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
});
