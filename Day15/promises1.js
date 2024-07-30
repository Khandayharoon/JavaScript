
//HaroonKhanday

function wrpperOnAsync() {
    // Create a new Promise that will resolve after 2 seconds (2000 milliseconds)
    let p = new Promise((resolve) => {
        // Use setTimeout to delay the resolution of the Promise
        setTimeout(resolve, 2000);
    });

    // Return the Promise object
    return p;
}

function onceDone() {
    // This function will be called when the Promise is resolved
    console.log("Hi there, I am in resolved state");
}

// Call the function wrpperOnAsync, which returns a Promise
// When the Promise is resolved, call the function onceDone
wrpperOnAsync().then(onceDone);