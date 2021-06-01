<?php
session_start();

if (isset($_POST["log-in-btn"]));
    $email = $_POST['email'];
    $password = $_POST['password'];
    $userList = file("../../../users.csv");

    
    $success = false;
    foreach ($userList as $user) {
        $user_details = explode("," , $user);
        if ($email === $user_details[0] && password_verify($password , $user_details[1])) {
            $success = true;
            break;
        };
    }
if ($success) {
    header("Location: ../../my-account.php");
    $_SESSION["email"]=$email;
} else {
    header("Location: ../../login-error.html");
}

?>