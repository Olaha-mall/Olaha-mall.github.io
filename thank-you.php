<?php
session_start();
if (!isset($_SESSION['email']) || empty($_SESSION['email'])) {
    echo "<script>alert('User has not logged in/register yet! Press continue to redirect to register page.')</script>";
    echo "<script>location.href='register-form.html'</script>";
}

$username = $_SESSION['email'];

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Olaha Mall</title>
    <link rel="stylesheet" href="style/form.css" />
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <header>
        <nav>
            <div class="top-header">
                <small>Olaha<br>Mall</small>
                <div class="nav-icons">
                    <a href="shopping-cart.html"><ion-icon name="bag-handle-outline"></ion-icon></a>
                    <button id="my-account-btn"><ion-icon name="person-outline"></ion-icon></button> 
                </div>
            </div>
            <div class="bottom-header">
                <div class="mall-brand">
                    <a href="index.html"><img src="image/logo.png" width="180px" alt=""></a>
                </div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="fees-page.html">Fees</a></li>
                    <li><a href="faq.php">FAQs</a></li> 
                </ul>
            </div>
        </nav>

    </header>

    <main>
        <div class="container">
            <div class="thank-you">
                <h2><span class="text-main">Purchased successful!!</h2></span>
                <p>Thank you for your support.</p>
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
                <div class="column-8">
                    <div class="navbar">
                        <h4>Quick Links</h4>
                        <ul class="footer-container-links">
                            <li><a href="contact-form.html">Contact Us</a></li>
                            <li><a href="faq.html">Copyright</a></li>
                            <li><a href="faq.html">Term of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>

</body>

<script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
<script src="js/register-form.js"></script>
<script src="js/my-account.js"></script>
</html>