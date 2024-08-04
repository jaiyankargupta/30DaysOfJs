//activity-1(Basic Events Handlers)

//task-1

let changePara = document.getElementById('para');
let clickButton = document.getElementById('button');


clickButton.addEventListener('click', function() {
    changePara.textContent = 'Hello, I am the new paragraph!';
});


//task-2

let changevisibilityImg = document.getElementById('img');

changevisibilityImg.addEventListener('dblclick', function() {
    if (changevisibilityImg.style.visibility === 'hidden') {
        changevisibilityImg.style.visibility = 'visible';
    } else {
        changevisibilityImg.style.visibility = 'hidden';
    }
});

//activity-2(Mouse Events)
//task-3

changePara.addEventListener('mouseover', function() {
    changePara.style.backgroundColor = 'red';
});

//task-4

if(changePara.style.backgroundColor = 'red'){
    changePara.addEventListener('mouseout', function() {
        changePara.style.backgroundColor = '';
     });
}


//activity-3 (keyboard events)

//task-5

let keyDown = document.getElementById('input');
keyDown.addEventListener('keydown', (e)=>{
    console.log('Key pressed', e.key);

});

//task-6

let keyUp = document.getElementById('input');
let displayValue = document.getElementById('para');

keyUp.addEventListener('keyup', function() {
    displayValue.textContent = keyUp.value;
});


//activity-4 (Form Events)
//task-7


let submit = document.getElementById('form-input');
submit.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    console.log('form data');
    let name = document.getElementById('name');
    console.log('Name:', name.value);
    let email = document.getElementById('email');
    console.log('Email:', email.value);
    let password = document.getElementById('password');
    console.log('Password:', password.value);

});

//task-8

let selectDropdown = document.getElementById('dropdown');
let displaySelectedValue = document.getElementById('selected-value');

selectDropdown.addEventListener('change', function() {
    displaySelectedValue.textContent = selectDropdown.value;
});

//activity-5 (Event delegation)

//task-9

let list = document.getElementById('list');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});


//tasks-10

const add = document.querySelector("#add-item");
add.addEventListener("click",()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("list-item");
    newitem.textContent = "new item";
    itemList.appendChild(newitem);
})

