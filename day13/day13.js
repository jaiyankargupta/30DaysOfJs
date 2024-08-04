//activity-1 (Creating and Exporting Modules)

//task-1
import {add} from './add2No';
console.log(add(2,4));

//output : 6



// task-2
import {person } from './person';
console.log(person.age);

//output : 21


//activity-2 (Named and Default Exports)
// task-3

import {mul} from './multiple';
console.log(mul(2,4));
console.log(div(2,0));

//output : 8
//Error : Division by zero is not allowed

//task-4
import {mul} from './multiple';
console.log(mul(2,3));

//output : 6

//activity-3 (Importing Entire Modules)
//task-5

import {addSub} from './addSub';

console.log(addSub.PI);            
console.log(addSub.add(7, 2));     
console.log(addSub.subtract(10, 2));

//output : 3.14
//         9
//         8


//activity-4(Using Third-Party Modules)
//task-6
import { reverse } from 'lodash';

let array = [1, 2, 3, 4];
reverse(array);
console.log(array);

//output : [4, 3, 2, 1]

//task-7
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });







