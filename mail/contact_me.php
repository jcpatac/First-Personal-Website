<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'caesarpatac.byethost8.com@gmail.com'; // send to my email
$email_subject = "Personal Website Contact Form";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@caesarpatac.byethost8.com\n"; // generate message
$headers .= "Reply-To: $email_address";	
mail($to, $email_subject, $email_body, $headers);

$reply_subject = "Thank you for sending a message!";
$reply_body = "Hello, $name ! Thank you for sending a message to my personal website. I'll make sure to address any concerns and improve the website more! Good day!";
mail($email_address, $reply_subject, $reply_body, $headers);

return true;			
?>