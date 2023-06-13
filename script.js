var timeLeft = 75;
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
const questions = {
    
}

function startTimer() {
    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}



startButton.addEventListener("click", function() {
    startTimer();
});