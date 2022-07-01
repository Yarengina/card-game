import { describe, it, expect } from '@jest/globals';
import templateEngine from './template';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`);

global.document = dom.window.document;
global.window = dom.window;

describe('templateEngine()', () => {
    it('should return undefined', () => {
        const getBlock = () => {
            return {
                block: undefined,
            };
        };

        expect(
            dom.window.document.body.append(templateEngine(getBlock()))
        ).toBeUndefined();
    });

    it('should not return undefined', () => {
        const getBlock = () => {
            return {
                block: 'p',
                content: 'text',
            };
        };

        expect(
            dom.window.document.body.append(templateEngine(getBlock()))
        ).not.toBeUndefined();
    });
});
