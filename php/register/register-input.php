<?php
if (isset($_POST['submit-button'])) {
	$email = $_POST['email'];
  	$password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $phone = $_POST['phone'];
        if (empty($email))
            {
                return;
            } else $email = $email;

        if (empty($password)) {
                return;
            } else $password = $hashed_password;

        if(empty($phone)) {
            return;
        } else $phone = $phone;

	  $text = $email . "," . $hashed_password . "," . $phone ."\
";
	  $fp = fopen('../../../users.csv', 'a+');
	  $path = '../../../users.csv';
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
    		if (isset($users[$_POST['email']])) {
                header("Location:../../register-error.html");
            }
		}
		else
		{
			echo "NO";
		};

	  if(!empty($email) && !empty($password) && fwrite($fp, $text) && !isset($users[$_POST['email']]) && !isset($users[$_POST['phone']]))  {
        header('Location:../../register-success.html');
    	}
	  fclose ($fp);
$path = '../../../users.csv';
}
?>