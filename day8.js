//activity - 1 (Templete Literal)

//task-1

let person = {
    name: "jaiyankar",
    age: 20
};

console.log(`Hello ${person.name}, your age is ${person.age}`);

//output : Hello jaiyankar, your age is 20

//task-2

let multilineString = `
This is a multiline string.
It can span multiple lines.
You can include line breaks and indentation.
`;

console.log(multilineString);


//activity-2(Destructuring)

//task-3

let num = [10, 20];

let [a, b] = num;

console.log(a, b); //output : 10 20

//task-4    

let book = {
    title : "Chapter One",
    author : "J.K. Rowling",
    publicationYear : 1997
}

let {title, author} = book;

console.log(title, author);


//activity-3 (Spread and Rest Operator)

//task-5

let numbers = [1, 2, 3, 4, 5];

let newArray = [...numbers];

console.log(newArray);



//task-6

let [first, ...rest] = numbers;

console.log(first); // output: 1
console.log(rest); // output: [2, 3, 4, 5]
//task-7

let sum = rest.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

//output : 14


//activity-4 (Default Parameters)

//task-7

const product = (a,b=1) => {

    return a * b;
}

product(2);

//output : 2



//activity-5 (Enhanced Object Literals)

//task-8
let name = "John";
let age = 30;
let persons = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(persons);

//output : 

//{ name: 'John', age: 30, greet: [Function: greet] }

//task-9
let firstName = "John";
let lastName = "Doe";

let personss = {
    [`${firstName} ${lastName}`]: {
        age: 30,
        occupation: "Engineer"
    }
};

console.log(personss);

//output :
//{ 'John Doe': { age: 30, occupation: 'Engineer' } }



