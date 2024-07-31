//activity-1

//task-1
let a = 1;
if(a>0){
    console.log("Positive");

}
else if(a<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

//task-2

let age = 18;
if(age>=18){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible for voting");
}


//activity-2(Nested If-else Statements)

//task-3

let x = 10;
let y = 5;
let z = 1;
 if(x>y){
    if(x>z){
        console.log("x is the largest");
    }
 }
 else if(y>x){
    if(y>z){
        console.log("y is the largest");
    }
 }
 else{
    console.log("z is the largest");
 }


 //activity-3(Switch Case)

 //task-4

 let day = 2;
 switch (day){
     case 1:
         console.log("Monday");
         break;
     case 2:
         console.log("Tuesday");
         break;
     case 3:
         console.log("Wednesday");
         break;
     case 4:
         console.log("Thursday");
         break;
     case 5:
         console.log("Friday");
         break;
     case 6:
         console.log("Saturday");
         break;
     case 7:
         console.log("Sunday");
         break;
     default:
         console.log("Invalid day");
 }


 //task-5

 let score = 80;
 let grade;
 
 if(score >=0 || score <= 30){
    grade = "F";
 }
 else if(score >= 31 || score <= 40){
     grade = "D";
 }
 else if(score >= 41 || score <= 75){
     grade = "C";
 }
 else if(score >= 76 || score <= 90){
     grade = "B";
 }
 else{
     grade = "A";
 }
 
 switch (grade){
    case "A":
         console.log("A");
         break;
    case "B":
         console.log("B");
         break;
    case "C":
         console.log("C");
         break;
    case "D":
         console.log("D");
         break;
    case "F":
         console.log("F");
         break;
    default:
         console.log("Invalid score");
         break;
 }


 //activity-4(Ternary Operator)

 //task-6

 let t = 4;

 let result = t%2==0 ? "even" : "odd";

 console.log(result);

 //activity-5(Combining Condition)

 let year = 2004;

 let leapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

let ans = leapYear ? "leapYear" : "Not leapYear";

console.log(ans);


//feature-request - same as above
