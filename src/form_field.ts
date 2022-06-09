export default function getFormField() {
    return {
        block: 'form',
        cls: 'box',
        attrs: {
            action: '#',
        },
        content: [
            {
                block: 'h1',
                cls: 'box__title',
                content: 'Выбери сложность',
            },
            {
                block: 'div',
                cls: 'box__number',
                content: [
                    {
                        block: 'label',
                        cls: 'number',
                        attrs: {
                            for: '1',
                        },
                        content: [
                            {
                                block: 'input',
                                cls: 'number__radio',
                                attrs: {
                                    type: 'radio',
                                    id: '1',
                                    value: '1',
                                },
                            },
                            {
                                block: 'span',
                                cls: 'number__text',
                                content: '1',
                            },
                        ],
                    },
                    {
                        block: 'label',
                        cls: 'number',
                        attrs: {
                            for: '2',
                        },
                        content: [
                            {
                                block: 'input',
                                cls: 'number__radio',
                                attrs: {
                                    type: 'radio',
                                    id: '2',
                                    value: '2',
                                },
                            },
                            {
                                block: 'span',
                                cls: 'number__text',
                                content: '2',
                            },
                        ],
                    },
                    {
                        block: 'label',
                        cls: 'number',
                        attrs: {
                            for: '3',
                        },
                        content: [
                            {
                                block: 'input',
                                cls: 'number__radio',
                                attrs: {
                                    type: 'radio',
                                    id: '3',
                                    value: '3',
                                },
                            },
                            {
                                block: 'span',
                                cls: 'number__text',
                                content: '3',
                            },
                        ],
                    },
                ],
            },
            {
                block: 'button',
                cls: 'box__button',
                content: 'Старт',
            },
        ],
    };
}
