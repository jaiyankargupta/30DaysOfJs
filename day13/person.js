export const person = {
    name : 'Rahul Kumar',
    age : 21,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}