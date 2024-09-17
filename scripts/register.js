// get form element by id
const registerForm = document.querySelector("#register");
// handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
// collect form data
const formData = new FormData(registerForm);
console.log(formData.get('username'), formData.get('email'), formData.get('password'))

// send data to backend
// display success message to user
const messageH1 = document.querySelector('#message');
messageH1.textContent = 'Account registered successfully!'
});


// // declare variable age
// const age = 71;
// // define square age function
// function squareage(age){ 
//     return age**2;
// }

// const squareAge = squareage(34);
// console.log(squareAge)