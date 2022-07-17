import templateEngine from './template';
import getFormField from './form_field';

export default function startGame() {
    function renderMainScreen() {
        document.body.append(templateEngine(getFormField()));

        const radioAll = document.querySelectorAll('.number__radio');

        radioAll.forEach((radio) => {
            radio.addEventListener('click', () => {
                if ((radio as HTMLInputElement).checked) {
                    const parent = radio.parentElement as HTMLElement;
                    parent.classList.add('number__checked');
                }
            });
        });

        function goToLevels() {
            radioAll.forEach((radio) => {
                if ((radio as HTMLInputElement).checked) {
                    window.application.renderScreen(
                        `level-${(radio as HTMLInputElement).value}`
                    );
                }
            });
        }

        const form = document.querySelector('.box') as HTMLElement;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            goToLevels();
        });
    }

    window.application.screens['main-page'] = renderMainScreen;
}
