<?php
session_start();
if (!isset($_SESSION['username']) || empty($_SESSION['username'])) {
      header("Location:../../admin-vlogin.html");
}

$username = $_SESSION['username'];

?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="phpstyle.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
  <title>Olaha Admin</title>
</head>
<body>
  
  <div class="container">
    <div class="navigation">
      <ul>
        <a href="#">
              <span class="icon"><i class="fas fa-edit"></i></span>
              <span class="title">Update Content</span>
        </a>
        <li><a href="#FAQs">
        <span class="title">FAQs</span></a>
        </li>
        <li><a href="#Privacy">
        <span class="title">Privacy Policy</span></a>
        </li>
        <li><a href="#Term">
        <span class="title">Terms of Service</span></a>
        </li>
        <li><a href="admin-upload.php">
        <span class="title">Photo Upload</span></a>
        </li>
        <br><a href="log-out.php"><input type="button" name="logout" value="log out"></a>
      </ul> 
    </div>
  </div>


  
  
  <div class=column_80>
    <div id="FAQs" class="box">
      <h2>Edit FAQs</h2>
      <form action="config.php">
      <?php
          echo "</br>";
          $ffile = fopen("faq-save.csv", "r") or die
          ("Unable to open file");
          while(!feof($ffile)){
            echo fgets($ffile) . "<br>";
          }
          fclose($ffile);
      ?>
      
      <div id="Privacy" class="input-box">
        <textarea maxlength="40" type="content" name="fContent" rows="3" cols="40" autocomplete="off" placeholder="Content"></textarea>
      </div>
        <input type="submit" value="Save">
    </div>  
    </form>
    <div class="box">
      <h2>Edit Privacy Policy</h2>
      <form action="config.php">
      <?php
          echo "</br>";
          $pfile = fopen("policy-save.csv", "r") or die
          ("Unable to open file");
          while(!feof($pfile)){
            echo fgets($pfile) . "<br>";
          }
          fclose($pfile);
      ?>
      
      <div id="Term" class="input-box">
        <textarea maxlength="40" type="content" name="pContent" rows="3" cols="40" autocomplete="off" placeholder="Content"></textarea>
      </div>
        <input type="submit" value="Save">
    </div>
    <div class="box">
      <h2>Edit Terms of Service</h2>
      <form action="config.php">
      <?php
          echo "</br>";
          $tfile = fopen("tos-save.csv", "r") or die
          ("Unable to open file");
          while(!feof($tfile)){
            echo fgets($tfile) . "<br>";
          }
          fclose($tfile);
      ?>
      
      <div class="input-box">
        <textarea maxlength="40" type="content" name="tContent" rows="3" cols="40" autocomplete="off" placeholder="Content"></textarea>
      </div>
        <input type="submit" value="Save">

    </form>
  </div>

</body>
</html>
