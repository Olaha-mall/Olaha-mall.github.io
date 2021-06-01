<?php
    extract($_REQUEST);
    $ffile=fopen("faq-save.csv","a");
    fwrite($ffile, $fContent ."\n");
    fwrite($ffile,"");
    fclose($ffile);
    header("location: admin.php");
?>

<?php
    extract($_REQUEST);
    $pfile=fopen("policy-save.csv","a");
    fwrite($pfile, $pContent ."\n");
    fwrite($pfile,"");
    fclose($pfile);
    header("location: admin.php");
?>

<?php
    extract($_REQUEST);
    $tfile=fopen("tos-save.csv","a");
    fwrite($tfile, $tContent ."\n");
    fwrite($tfile,"");
    fclose($tfile);
    header("location: admin.php");
?>

 
