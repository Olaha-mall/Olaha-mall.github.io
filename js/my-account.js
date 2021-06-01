document.getElementById("my-account-btn").onclick = function () {

    if(localStorage.getItem('UserDataList') !== null) {
        location.href = "my-account.php"
    }
    else{
        location.href = "log-in.html"
    }
};

// Remove data from localstorage and map back to index.html //
function Logout () {
    localStorage.removeItem('UserDataList');
    location.href = "index.html"
}
