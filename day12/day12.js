//Activity 1: Basic Error Handling with Try-Catch
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function triggerError() {
    throw new Error("This is a deliberate error!");
}

try {
    triggerError();
} catch (err) {
    console.log("Encountered an error: " + err.message);
}
//Output - Encountered an error: This is a deliberate error!

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function quotient(x, y) {
    if (y === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return x / y;
}

try {
    console.log(quotient(20, 4)); // 5
    console.log(quotient(20, 0)); // Will throw an error
} catch (err) {
    console.log("Encountered an error: " + err.message);
}
//Output - Encountered an error: Division by zero is not allowed!

//Activity 2: Finally Block
//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Executing the try block");
    throw new Error("Error encountered in try block");
} catch (err) {
    console.log("Encountered an error: " + err.message);
} finally {
    console.log("Executing the finally block");
}

//Activity 3: Custom Error Objects
//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function triggerMyCustomError() {
    throw new MyCustomError("This is a custom error!");
}

try {
    triggerMyCustomError();
} catch (err) {
    console.log("Encountered an error: " + err.message);
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class InputValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InputValidationError";
    }
}

function checkInput(value) {
    if (value.trim() === "") {
        throw new InputValidationError("Input must not be empty!");
    }
    return true;
}

try {
    console.log(checkInput("Valid data")); // true
    console.log(checkInput("")); // Will throw an error
} catch (err) {
    console.log("Encountered an error: " + err.message);
}

//Activity 4: Error Handling in Promises
//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
let randomOutcome = new Promise((resolve, reject) => {
    let randNum = Math.random();
    if (randNum > 0.5) {
        resolve("Promise fulfilled!");
    } else {
        reject(new Error("Promise failed!"));
    }
});

randomOutcome
    .then((msg) => console.log(msg))
    .catch((err) => console.log("Encountered an error: " + err.message));

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function processRandomOutcome() {
    let randomOutcome = new Promise((resolve, reject) => {
        let randNum = Math.random();
        if (randNum > 0.5) {
            resolve("Promise fulfilled!");
        } else {
            reject(new Error("Promise failed!"));
        }
    });

    try {
        let outcome = await randomOutcome;
        console.log(outcome);
    } catch (err) {
        console.log("Encountered an error: " + err.message);
    }
}

processRandomOutcome();

//Activity 5: Graceful Error Handling in Fetch
//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.example")
    .then((res) => res.json())
    .catch((err) => console.log("Encountered an error: " + err.message));

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function getData() {
    try {
        let res = await fetch("https://invalid.example");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Encountered an error: " + err.message);
    }
}

getData();
//Output - Encountered an error: <network error message>
