<?php
session_start();
$username = 'admin';
$password = 'test';


if ($_POST['username'] == $username && $_POST['password'] == $password) {
    $_SESSION['username'] = $username;
}

$username = $_SESSION['username'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Olaha Mall</title>
    <link rel="stylesheet" href="../../style/form.css">
    <link rel="stylesheet" href="../../style/style.css">
</head>

<body>
<header>
        <nav>
            <div class="top-header">
                <small>Olaha<br>Mall</small>
                <div class="nav-icons">
                </div>
            </div>
            <div class="bottom-header">
                <div class="mall-brand">
                    <a href="index.html"><img src="image/logo.png" width="180px" alt=""></a>
                </div>
            </div>
        </nav>

    </header>

    <main>
        <div class="container">
            <div class="thank-you">
                <h2><span class="text-main">Welcome <?php echo $_SESSION["username"];?></h2></span>
                <p><a href="admin.php">Click here to redirect to Dashboard</a></p>
            </div>
        </div>
    </main>

    <footer>
        <div class="footer-container">
            <div class="row">
                <div class="column-4">
                    <h4>Contact Information</h4>
                    <ul class="footer-container-links">
                        <li>1702 Nguyễn Văn Linh, <br>Tân Hưng, Quận 7, Thành phố Hồ Chí Minh 700000 </li>
                        <li>Telephone: <a href="https://www.rmit.edu.vn/contact-us">(+84) 28 3776 1369</a></li>
                        <li>Email: <a href="https://www.rmit.edu.vn/contact-us">enquiries@rmit.edu.vn </a></li>
                        <li>Working hours: Monday to Saturday from 8am to 5pm (GMT+7)</li>
                    </ul>
                    <div class="main-text">
                        <p>
                            <small class="block">&copy; Team Olaha 2021 | Privacy Policy</small>
                            <small class="block">Designed by <a
                                    href="https://github.com/Olaha-mall/Olaha-mall.github.io"
                                    target="_blank">https://github.com/Olaha-mall/Olaha-mall.github.io</a></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
<script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
</html>