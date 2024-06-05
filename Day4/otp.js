let otp = Math.random();
otp = Math.floor(otp * 1000000).toString().padStart(6, '0');
console.log(otp);
