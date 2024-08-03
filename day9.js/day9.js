//activity-1 (Selecting and Manipulating Elements)

//task-1

let changeContent = document.getElementById('userInfo');
changeContent.innerHTML = 'Hello, I am Jaiyankar Gupta!'; // Change the content of the element with id 'userInfo'


//task-2 

let changeBackGround = document.getElementsByClassName('userName');

for (let index = 0; index < changeBackGround.length; index++) {
    changeBackGround[index].style.backgroundColor = 'yellow'; // Change the background color of all elements with class 'userName' to yellow
    
}

//activity-2 (creating and appending elements)

//task-3
let newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello, I am the first person in the world';
document.body.appendChild(newDiv);

//task-4

let newLi = document.createElement('li');
newLi.innerHTML = 'eduction';
document.getElementById('ul-list').appendChild(newLi);

//activity-3 (Removing Elements)

//task-5 

let liElement = document.getElementById('ul-list');
liElement.removeChild(liElement.firstElementChild); // Remove the last li element from the ul list

//task-6

liElement.removeChild(liElement.lastChild); // Remove the last li element

//activity-4 (Modifying Classes and attributes)

//task-7

let element = document.getElementById('img');
element.setAttribute('src', 'new-image.jpg'); // Change the 'src' attribute of the element with id 'myElement' to 'new-image.jpg'

//task-8

let elements = document.getElementById('myElement');
element.classList.add('myClass'); // Add the CSS class 'myClass' to the element with id 'myElement'

//task-9

let elementss = document.getElementById('myElement');
element.classList.remove('myClass'); // Remove the CSS class 'myClass' from the element with id 'myElement'




//activity-5(Event Handling)

//task-10

let button = document.getElementById('button');
button.addEventListener('click', function() {
    let p = document.getElementById('userInfo');
    p.textContent = 'I am Prajapati'
}); // Add an event listener to the button with id'myButton' that triggers an alert when clicked




//task-11

let hover = document.getElementById('userInfo');
hover.addEventListener('mouseover', function() {
    hover.style.border = 'yellow';
}); // Add an event listener to the element with id 'userInfo' that changes the background color to yellow when the mouse hovers over it