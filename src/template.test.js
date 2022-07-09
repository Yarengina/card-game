import { describe, it, expect } from '@jest/globals';
import templateEngine from './template';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`);

global.document = dom.window.document;
global.window = dom.window;

describe('templateEngine()', () => {
    it('should create input of type radio in body', () => {
        const getBlock = () => {
            return {
                block: 'input',
                attrs: {
                    type: 'radio',
                },
            };
        };
        dom.window.document.body.appendChild(templateEngine(getBlock()));

        const expected = dom.window.document.querySelector('input').type;

        expect(expected).toEqual('radio');
    });

    it('should create html paragraph with content in body', () => {
        const getBlock = () => {
            return {
                block: 'p',
                content: 'text',
            };
        };
        dom.window.document.body.appendChild(templateEngine(getBlock()));

        const expected = dom.window.document.querySelector('p').textContent;

        expect(expected).toEqual('text');
    });
});
