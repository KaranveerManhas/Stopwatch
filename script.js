let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let hour = 0;
let minute = 0;
let second = 0;
let isTimer = false;

function start() {
    isTimer = true;
    stopWatch();
}

function stop() {
    isTimer = false;
}

function reset() {
    isTimer = false;
    hour = 0;
    minute = 0;
    second = 0;
    updateDisplay();
}

function updateDisplay() {
    hr.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
}

function stopWatch() {
    if (isTimer) {
        second++;

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hString = hour;
        let mString = minute;
        let sString = second;

        if (hour < 10) {
            hString = "0" + hour;
        }

        if (minute < 10) {
            mString = "0" + minute;
        }

        if (second < 10) {
            sString = "0" + second;
        }

        hr.innerText = hString;
        min.innerText = mString;
        sec.innerText = sString;

        setTimeout(stopWatch, 1000);
    }
}