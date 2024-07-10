// Step 1: Record the start time using Date.now()
let startTime = Date.now();

// Step 2: Define the inner function that simulates some work
function innerFunction() {
    // Simulate work by looping a large number of times
    for (let i = 0; i < 10000000; i++) {
        // This loop doesn't do anything meaningful but takes time to run
    }
    return "Inner function has completed its task."; // Return a message once done
}

// Step 3: Call setTimeout to schedule the inner function to run after 2 seconds
setTimeout(() => {
    // Step 5: Record the time when the inner function actually starts executing
    let executionTime = Date.now();

    // Step 6: Calculate the elapsed time between setTimeout call and inner function start
    let elapsedTime = executionTime - startTime;

    // Step 7: Log the elapsed time to the console
    console.log(`Elapsed time between setTimeout call and innerFunction start: ${elapsedTime} milliseconds`);

    // Step 8: Call the inner function
    let result = innerFunction();

    // Step 9: Log the result and any other relevant information
    console.log(result);

    // Optionally, log the total time taken by the inner function to complete
    let endTime = Date.now();
    let totalExecutionTime = endTime - executionTime;
    console.log(`Total time taken by inner function: ${totalExecutionTime} milliseconds`);

}, 2000); // setTimeout is set to 2000 milliseconds (2 seconds)
