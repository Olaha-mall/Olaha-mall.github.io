<?php
if (isset($_POST['submit-button'])) {
	$username = $_POST['username'];
  	$password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        if (empty($username))
            {
                echo "<script>alert('Invalid Username!')</script>";
            } else $username = $username;

        if (empty($password)) {
				echo "<script>alert('Invalid Password!')</script>";
            } else $password = $hashed_password;

	  $text = $username . "," . $hashed_password ."\
";
	  $fp = fopen('../../../credentials.csv', 'a+');
	  $path = '../../../credentials.csv';
	  if (file_exists($path))
		{
 		$contents = file_get_contents($path);
 		$contents = explode("\
", $contents);
   		$users = array();
   		foreach ($contents as $value) {
      			$user = explode(',', $value);
      			$users[$user[0]] = $user[1];
    			}
    		if (isset($users[$_POST['username']])) {
                echo "<script>alert('Invalid Username/Password!')</script>";
            }
		}
		else
		{
			echo "NO";
		};

	  if(!empty($username) && !empty($password) && fwrite($fp, $text) && !isset($users[$_POST['username']]))  {
        echo "<script>alert('Create credentials successful!!')</script>";
		echo "<script>location.href='install.php'</script>";
    	}
	  fclose ($fp);
$path = '../../../credentials.csv';
}
?>