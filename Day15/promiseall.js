function fn1(t1) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("P1") }, t1 * 1000);
    });
}

function fn2(t2) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("P2") }, t2 * 1000);
    });
}

function fn3(t3) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("P3") }, t3 * 1000);
    });
}

function main(t1, t2, t3) {
    return Promise.all([fn1(t1), fn2(t2), fn3(t3)])
        .then(([res1, res2, res3]) => {
            console.log(`${res1} : ${res2} : ${res3}`);
        });
}

main(1, 2, 3).then(() => {
    console.log('Done');
});
