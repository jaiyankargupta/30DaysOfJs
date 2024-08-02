//activity -1 (Function Declartion)

//task-1

function evenOdd(){
    let num1 = 6;
    if(num1%2 == 0){
       console.log("even :",  num1);
    }
    else{
       console.log("odd");
    }
}
evenOdd(6);
 


 //output : even 6


 //task-2

function square(num2){
    let square = num2 * num2;
    console.log(`square of ${num2} is ${square}`);
}

square(3)

 //output : 9


 //activity-2(Function Expression)
 //task-3


 function max2(a,b){
    if(a<b){
      console.log(b);
    }
    else{
        console.log(b);
    }
 }

 max2(2,3);

 //output : 3

 function constString(c,d){
    let s = c + d;
    console.log(s);
 }

 constString('rahul', 'kumar');

 //rahulkumar




 //activity-3 (Arrow Function)
 
 //task-5

 const add = (a,b) => {
    return a+b;
 }

 console.log(add(2,3));

 //output : 5


 //task-6

 const char = (s,p) => {
    for(let i=0; i<s.length; i++){
        if(s[i] == p){
            return true;
        }
    }
    return false;
 }

console.log(char('rahul','l'));

//output : true

//activity-4 (function parameter and default values)
//task-7

const product = (a,b=5) => {
    return a*b;
}
console.log(product(2));

//output : 10 (when defaullt value is there)

//task-8
const greeting = (name, age=20) => {
    console.log(`hello ${name}, your age is ${age}`);
}
greeting('rahul')

//output : hello rahul, your age is 20


//activity-5 (higher order function)
//task-9

const hi = () => { return 'hi'; };

const higher = (func, a) => {
    for (let i = 1; i <= a; i++) {
        console.log(func());
    }
};

higher(hi, 4);


//task-10

const sq = (a)=>
{
    return a*a;
}

const cube = (a) => {
    return a*a*a;
}

const high = (func1, func2, x) => {
   let t = func1(x);
   console.log(t);
   console.log(func2(x));
}

high(sq,cube,2);

//output : 4 8