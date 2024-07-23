
function clock(){
    let date = new Date();
    let  hours = date.getHours();
    let  minutes = date.getMinutes();
    let seconds= date.getSeconds();
    let ampm = hours >= 12 ? "PM": "AM";

        // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Pad single digits with a leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(`${hours} : ${minutes} : ${seconds}  ${ampm}`);
}
setInterval(clock,1000);