let initialTime = 1500; // time in seconds
let isRunning = false;
let isPaused;

let intervalId;

const startButton = document.getElementById("startButton");

function startTimer() {
    isPaused = false;
    if (isRunning === false) {
        isRunning = true;
        initialTime = 1500;
        intervalId = setInterval(() => {
            if (!isPaused) {
                let minutes = Math.floor(initialTime / 60);
                let seconds = Math.floor(initialTime % 60);

                if (seconds < 10) {
                    seconds = '0' + String(seconds)
                }

                document.getElementById("remainingTime").innerHTML = `${minutes} : ${seconds === 0 ? '00' : String(seconds)}`

                initialTime--;
            }
        }, 1000)
    }
}

function resetTimer() {
    clearInterval(intervalId)
    document.getElementById("remainingTime").innerHTML = "25 : 00"
    isRunning = false;
}

function pauseTimer() {
    isPaused = true;
    isRunning = false;
}

startButton.addEventListener("click", function () {
    if (isRunning === false) {
        startButton.style.display = "none"

    }
});