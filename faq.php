<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Olaha Mall</title>
    <link rel="stylesheet" href="style/faqs.css">
    <link rel="stylesheet" href="style/style.css">
</head>

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
  <body>

    <div id="FAQs" style="font-size: xxx-large; text-align: center;">FAQs</div>
    <div class="container" id="main-content">
        
    
        <div class="item-wrapper">
            <div class="answer">
            <?php
            echo "<html><body><table>\n\n";
            $ffile = fopen("php/CMS/faq-save.csv", "r");
            while (($fdata = fgetcsv($ffile)) !== false) {
            echo "<tr>";
            foreach ($fdata as $fi) 
            {
                echo htmlspecialchars($fi);
            }
            echo "\n<br/>";
            }
            fclose($ffile);
            echo "\n</table></body></html>";
            ?>
            </div>
        </div>
    </div>


    <div id="Privacy-Policy" style="font-size: xxx-large; text-align: center;">Privacy Policy</div>
    <div class="container" id="main-content">
        <div class="item-wrapper">
            <div class="answer">
            <?php
            echo "<html><body><table>\n\n";
            $pfile = fopen("php/CMS/policy-save.csv", "r");
            while (($pdata = fgetcsv($pfile)) !== false) {
                echo "<tr>";
                foreach ($pdata as $pi) 
                {
                    echo htmlspecialchars($pi);
                }
                echo "\n<br/>";
            }
            fclose($pfile);
            echo "\n</table></body></html>";
        ?>
            </div>
        </div>
    </div>


    <div id="FAQs" style="font-size: xxx-large; text-align: center;">Terms of Service</div>
    <div class="container" id="main-content">
        <div class="item-wrapper">
            <div class="answer">
            <?php
            echo "<html><body><table>\n\n";
            $tfile = fopen("php/CMS/tos-save.csv", "r");
            while (($tdata = fgetcsv($tfile)) !== false) {
                echo "<tr>";
                foreach ($tdata as $ti) {
                    echo htmlspecialchars($ti);
                }
                echo "\n<br/>";
            }
                fclose($tfile);
                echo "\n</table></body></html>";
            ?>
            </div>
        </div>
    </div>

</body>



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
                        <small class="block">Designed by <a href="https://github.com/Olaha-mall/Olaha-mall.github.io" target="_blank">https://github.com/Olaha-mall/Olaha-mall.github.io</a></small>
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
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    <script src="js/my-account.js"></script>
</html>