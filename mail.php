<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$number= $_POST['contact'];
$to = "marinefishaq@gmail.com";
$subject = "Mail From marinefishaquarium";
$txt ="name = ". $name . "\r\n email = " . $email . "\r\n message =" . $message . "\r\n contact =" . $number;
$headers = "From: noreply@marinefishaq.com" . "\r\n" .
"CC: uttamkoran@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>