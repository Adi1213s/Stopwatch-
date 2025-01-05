let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time-display");
const startStopBtn = document.getElementById("start-stop-btn");

function toggleStartStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timerInterval);
        isRunning = false;
        startStopBtn.textContent = "Start";
    } else {
        // Start or resume the stopwatch
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        isRunning = true;
        startStopBtn.textContent = "Stop";
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    timeDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
}
