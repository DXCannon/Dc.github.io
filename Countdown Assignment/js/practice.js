function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }
//   Initialize the deadline variable with the date that you want 
let deadline = new Date("December 31, 2022 13:00:00");

// Store the countdown element in a variable and clear its text content

let countdown = document.getElementById("countdown");
countdown.innerHTML = "";
function setCountDown() {
    // Without any inputs, the date() constructor returns to the current datetime
    let now = new Date();
    // Number of milliseconds between deadline and now 
    let timeleft = deadline.getTime() - now.getTime();
    // Use the conversion methods to calculate each time unit
    
    let daysleft = convertToDaysLeft(timeleft);
    let hoursLeft = convertToHoursLeft(timeleft);
    let minutesLeft = convertToMinutesLeft(timeleft);
    let secondsLeft = convertToSecondsLeft(timeleft);
    

    countdown.innerHTML = 
    formatCountdownText(daysleft, hoursLeft, minutesLeft, secondsLeft);
}

    setInterval(setCountDown, 1000);



