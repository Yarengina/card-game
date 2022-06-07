let sec = 0;
let min = 0;
let indTime: NodeJS.Timeout;

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    };
};

function startTime() {
    indTime = setTimeout(addTime, 1000);
};

export function stopTime() {
    clearTimeout(indTime);
    sec = 0;
    min = 0;
};

export function addTime() {
    tick();
    const time: HTMLElement = document.querySelector('.timer__time') as HTMLElement;
    time.textContent = (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    startTime();
};
