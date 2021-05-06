const form = document.querySelector('form');
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
			form.remove();
            window.location.href = "my-account.html";
            return
		}
	}
	alert("incorrect username or password")
}

