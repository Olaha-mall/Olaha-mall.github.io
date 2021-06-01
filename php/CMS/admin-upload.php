<?php
session_start();
if (!isset($_SESSION['username']) || empty($_SESSION['username'])) {
      header("Location:../admin-vlogin.html");
}

$username = $_SESSION['username'];

    if (isset($_POST['act'])) {
        if ($_FILES["profile_image"]["error"] == UPLOAD_ERR_OK) {
        // store new image as avatar.png (overwrite the current file)
        $new_location = 'image/avatar1.png';
        move_uploaded_file($_FILES['profile_image']['tmp_name'], $new_location);
        echo "<script>alert('Upload Successful!')</script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Olaha Mall</title>
    <link rel="stylesheet" href="phpstyle.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
</head>
<body>
    <div class="container">
        <div class="navigation">
        <ul>
            <a href="#">
                <span class="icon"><i class="fas fa-edit"></i></span>
                <span class="title">Update Content</span>
            </a>
            <li><a href="admin.php">
            <span class="title">FAQs</span></a>
            </li>
            <li><a href="admin.php">
            <span class="title">Privacy Policy</span></a>
            </li>
            <li><a href="admin.php">
            <span class="title">Terms of Service</span></a>
            </li>
            <li><a href="admin-upload.php">
            <span class="title">Profile Picture Upload</span></a>
            </li>
            <br><a href="log-out.php"><input type="button" name="logout" value="log out"></a>
        </ul> 
        </div>
    </div>
    <div class="column_80">
        <h2>Current Profile Image</h2>
        <img width="200" src="image/avatar1.png" alt="a profile picture">
        <p>Upload New Profile Image</p>
        <form enctype="multipart/form-data" method="post" action="admin-upload.php">
            <input type="file" name="profile_image">
            <input type="submit" name="act" value="Upload">
        </form>
    </div>
</body>