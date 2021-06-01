<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Olaha Mall</title>
    <link rel="stylesheet" href="../../style/login.css">
    <link rel="stylesheet" href="../../style/style.css">
</head>

<body>
    <div class="container">
        <form action="admin-register.php" method="POST" id="form">
            <div class="demo-table">

                <div class="form-head">PHP Installation</div>
                <div class="field-column">
                        <label>Username</label>
                        <input name="username" id="username" type="username" class="demo-input-box"></input>
                </div>
                <div class="field-column">
                        <label>Password</label>
                        <input name="password" id="password" type="password" class="demo-input-box"></input>
                </div>
                <div class="field-column">
                    <div>
                        <label>Password Confirm</label>
                    </div>
                    <div>
                        <input name="password" id="password" type="password" class="demo-input-box"></input>
                    </div>
                </div>
                <div class=field-column>
                    <div>
                        <input type="submit" name="submit-button" value="Submit" class="btnLogin"></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>

</html>