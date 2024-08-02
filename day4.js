//activity-1(for loop)

//task-1
 for(let i=0; i<10; i++){
     console.log(i+1);
 }

 //output : 1,2,3,4,5,6,7,8,9,10

 //task-2

 let table = 5;
 for(let i=1; i<=10; i++){
     console.log(table + " x " + i + " = " + (table*i));
 }

 //output : 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20, 5 x 5 = 25, 5 x 6 = 30, 5 x 7 = 35, 5 x 8 = 40, 5 x 9 = 45, 5 x 10 =

 //activity-2 (while)

 //task-3

 let sum = 0;
 let i = 0;

 while(i<11){
    sum +=i;
    i++;
 }

 console.log("Sum of first 10 natural numbers: ", sum);

 //output : Sum of first 10 natural numbers:  55

 let x = 10;
 while(x!=0){
    console.log(x);
    x--;
 }

//output : 10 9 8 7 6 5 4 3 2 1 


//activity-3 (do while)

 //task-4

 let p =1;
 do {
    console.log(`${p}`);
    p++;
 }
 while(p<6);

 //output : 1 2 3 4 5


 //task-5

 let num = 10;
 let fact = 1;
 do{
    fact = fact*num;
    num--;

 }
 while(num!=0);

 console.log(fact);

 //output : 3628800


 //activity-4 (Nested Loop)

 //task-7

 for(let i = 0; i < 5; i++) {
    let line = "";
    for(let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

//activity-5 (Loop Control Statement)

// task-8

for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//output : 1 2 3 4 5 6 7 8 9 10

