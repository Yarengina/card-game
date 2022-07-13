export default function getTopField() {
    return {
        block: 'div',
        cls: 'top-field',
        content: [
            {
                block: 'div',
                cls: 'timer',
                content: [
                    {
                        block: 'span',
                        cls: 'timer__unit',
                        content: 'min',
                    },
                    {
                        block: 'span',
                        cls: 'timer__unit',
                        content: 'sec',
                    },
                    {
                        block: 'p',
                        cls: 'timer__time',
                    },
                ],
            },
            {
                block: 'button',
                cls: 'box__button',
                content: 'Начать заново',
            },
        ],
    };
}
