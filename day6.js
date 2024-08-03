//acivity-1(Array Creation and Access)

//task-1

let arr = [1,2,3,4,5];
console.log(arr);

//task-2
console.log(arr[0]); //output: 1
console.log(arr[4]); //output: 5

//activity-2(Array Methods)-(Basics)


//task-3

arr.push(6);
console.log(arr); //output: [1,2,3,4,5,6]

//task-4

arr.pop();
console.log(arr); //output: [1,2,3,4,5]

//task-5

arr.shift(); 
console.log(arr); //output: [2,3,4,5]

//task-6

arr.unshift(1);
console.log(arr); //output: [1,2,3,4,5]


//activity-2(Array Methods)-(Intermediate)

//task-7

const ans = arr.map( (item)=> {
    return item * 2;
})

console.log(ans);  //output : 2,4,6,8,10

//task-8

const even = arr.filter((item) => {
    return item % 2 === 0;
})

console.log(even); // output : 2,4

//task-9

const sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(sum); //output : 15

//activity-4 (Array Iteration)

//task-10

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//output : 1  2 3 4 5

//task-11

arr.forEach((item) => {
    console.log(item);

})

//output : 1  2 3 4 5


//activity-5 (multi-dimensional array)

//task-12

let arr2 = [[1,2,3],[4,5,6]];

// arr2.forEach((item) => {
//     item.forEach((subItem) => {
//         console.log(subItem);
//     })
// })

console.log(arr2)

// output : [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]



//task-13

console.log(arr2[0][1]);






