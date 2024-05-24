var userLoggedIn = true;

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userLoggedIn) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}

promise()
    .then(() => {
        console.log("User Logged successfully");
    })
    .catch(() => {
        console.log("User not logged In");
    });

setTimeout(() => {
    userLoggedIn = false;
    promise()
        .then(() => {
            console.log("User Logged successfully");
        })
        .catch(() => {
            console.log("User not logged In");
        });
}, 3000);
