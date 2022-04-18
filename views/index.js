// const usermodels = require('../models/usermodels')


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const username = document.getElementById("username-signup");
const password = document.getElementById("password-signup");

const usernameLogin = document.getElementById("username-login");
const passwordLogin = document.getElementById("password-login");


document.getElementById("create_account").addEventListener('click', () => {
	fetch('http://localhost:3000/signup', {
		method: 'POST',
		headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username.value,
			password: password.value
		})
})
.then(res => res.json())
.then(data => console.log(data));
})



document.getElementById("login").addEventListener('click', () => {
	fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: usernameLogin.value,
			password: passwordLogin.value
		})
})
.then(res => res.json())
.then(data => {
	if(data.message === "success"){
		// window.location.href = "sample.html";
		window.alert("login is good")
	}
});
})
