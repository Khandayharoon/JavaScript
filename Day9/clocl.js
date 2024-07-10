function printTime() {
const currentTime = new Date();
const hours = String(currentTime.getHours()).padStart(2, '0');
const minutes = String(currentTime.getMinutes()).padStart(2, '0');
const seconds = String(currentTime.getSeconds()).padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;

console.log(timeString);
}

function startClock() {
printTime();
setInterval(printTime, 1000);
}

startClock();