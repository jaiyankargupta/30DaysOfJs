//activity-1(variable declaration)

//task-1

var a = 10;
console.log(a);

//output : 10


//task-2

let b = 10;
console.log(b);

//output : 

//activity-2 (constant declaration)

//task-3

const c = true;
console.log(c);

//output : true

//activity-3 (Data Type)

//task-4

let num = 10;
console.log(typeof c); 

//output : number

let str = "JAIYANKARGUPTA"
console.log(typeof str);

//output : string

let bool = true;
console.log(typeof bool);

//output : boolean

let arr = [1,2,3,4,5];
console.log(typeof arr);

//output : object

let obj = {name: "JAIYANKAR", age: 28};
console.log(typeof obj);

//output : object


//activity-4 (Reassigned variable)

//task-5

let d = 10;
console.log(d);

//output : 10

d = 12;
console.log(d);

//output : 12

//activity-5(understanding const)

//task-6

const e = 10;
console.log(e);

//output : 10

e = 12;
console.log(e);

//output : TypeError: Assignment to constant variable.



//feature-request

//variable type


let f = 10;
console.log(typeof f); //number

let g = "JAIYANKAR";
console.log(typeof g); //string

let h = true;   
console.log(typeof h); //boolean

let i = [1,2,3,4,5];
console.log(typeof i); //number

let j = {name: "JAIYANKAR", age: 28};
console.log(typeof j); //object

let k = function(){};
console.log(typeof k); //function

let l = null;
console.log(typeof l); //object

let m = Symbol("JAIYANKAR");
console.log(typeof m); //symbol

let n = undefined;
console.log(typeof n); //undefined

let o = BigInt(10);
console.log(typeof o); //bigint

let p = new Date();
console.log(typeof p); //object

let q = new RegExp("/JAIYANKAR/");
console.log(typeof q); //object

let r = new Set([1,2,3,4,5]);
console.log(typeof r); //object

let s = new Map([['name', 'JAIYANKAR'], ['age', 28]]);
console.log(typeof s); //object

let t = new WeakMap();
console.log(typeof t); //object

let u = new WeakSet();
console.log(typeof u); //object

let v = new Promise((resolve, reject) => {});
console.log(typeof v); //object

let w = new GeneratorFunction();
console.log(typeof w); //function

let x = new AsyncFunction();
console.log(typeof x); //function

let y = new Proxy({}, {});
console.log(typeof y); //object


//Ressignments demo

let num1 = 10;
console.log(num1); //10

num1 = 12;
console.log(num1); //12

const num2 = 10;
console.log(num2); //10

//num2 = 12; //error



//end




