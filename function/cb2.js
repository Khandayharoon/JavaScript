function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function cal(a, fn) {
    return fn(a);
}

console.log(cal(2, square));      // Use square function as callback
console.log(cal(3, cube));       // Use cube function as callback
