//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolveIn2Seconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1: Resolved after 2 seconds");
        }, 2000);
    });
};

resolveIn2Seconds().then(msg => console.log(msg));

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectIn2Seconds = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 2: Rejected after 2 seconds");
        }, 2000);
    });
};

rejectIn2Seconds().catch(err => console.error(err));

//Activity 2: Chaining Promises
//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const getData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 1 received");
        }, 1000);
    });
};

const getData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 2 received");
        }, 1000);
    });
};

const getData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 3 received");
        }, 1000);
    });
};

getData1()
    .then(data => {
        console.log(data);
        return getData2();
    })
    .then(data => {
        console.log(data);
        return getData3();
    })
    .then(data => {
        console.log(data);
    });

//Activity 3: Using Async/Await
//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const resolveAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 4: Promise resolved");
        }, 2000);
    });
};

const asyncFunc = async () => {
    const result = await resolveAsync();
    console.log(result);
};

asyncFunc();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectAsync = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 5: Promise rejected");
        }, 2000);
    });
};

const asyncFuncWithError = async () => {
    try {
        const result = await rejectAsync();
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};

asyncFuncWithError();

//Activity 4: Fetching Data from an API
//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log("Task 6:", data))
    .catch(err => console.error("Task 6 Error:", err));

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchAsyncData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Task 7:", data);
    } catch (err) {
        console.error("Task 7 Error:", err);
    }
};

fetchAsyncData();

//Activity 5: Concurrent Promises
//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 done"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 done"), 1500));

Promise.all([p1, p2, p3])
    .then(values => console.log("Task 8:", values));

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseX = new Promise(resolve => setTimeout(() => resolve("Promise X won"), 1000));
const promiseY = new Promise(resolve => setTimeout(() => resolve("Promise Y won"), 2000));
const promiseZ = new Promise(resolve => setTimeout(() => resolve("Promise Z won"), 1500));

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => console.log("Task 9:", value));
