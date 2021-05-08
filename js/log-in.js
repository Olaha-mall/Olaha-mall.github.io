// hardcoded account info //
var objAccount = [
    {// Object 0 index Email // 
        username: "Sam123@gmail.com",
        password: "123123Abc!"
    },
    {// Object 1 index Phone // 
        username: "0123456789@gmail.com",
        password: "1234567890Abc!"
    },
]

const LogIn_Verify = function () {
    var emailInput = document.querySelector('input[name="username"]').value;
    var passwordInput = document.querySelector('input[name="password"]').value;
    for(var i = 0; i < objAccount.length; i++) {
		// Account validate input //
		if(emailInput == objAccount[i].username && passwordInput == objAccount[i].password) {
			alert("Log In Successful!!")
            window.location.href = "my-account.html";
            return
		}
	}
	alert("incorrect username or password")
}

// Store user login input into localStorage //
let userInput = [];

const userLoginData = (e) => {
    e.preventDefault;
    let userData = {
        username : document.querySelector('input[name="username"]').value,
        password : document.querySelector('input[name="password"]').value
    }
    userInput.push(userData);
    console.log(userData);

    // Save to localStorage //
    localStorage.setItem('UserDataList', JSON.stringify(userInput));
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('log-in-btn').addEventListener('click', userLoginData)
});