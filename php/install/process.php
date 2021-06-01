<?php
session_start();

if (isset($_POST["log-in-btn"]));
    $username = $_POST['username'];
    $password = $_POST['password'];
    $userList = file("../../../credentials.csv");

    
    $success = false;
    foreach ($userList as $user) {
        $user_details = explode("," , $user);
        if ($username === $user_details[0] && password_verify($password , $user_details[1])) {
            $success = true;
            break;
        };
    }
if ($success) {
    header("Location: ../CMS/welcome.php");
    $_SESSION["username"]=$username;
} else {
    echo "Fail";
    echo "<script>location.href='../../admin-vlogin.html'</script>";
}

?>