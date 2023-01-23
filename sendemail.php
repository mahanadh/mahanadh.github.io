<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "mahan2054@gmail.com";
    $subject = "New message from $name";
    $headers = "From: $email";
    $headers .= "\r\nReply-To: $email";
    $headers .= "\r\nContent-Type: text/html; charset=ISO-8859-1\r\n";
    $body = "Name: $name <br> Email: $email <br> Message: $message";
    if(mail($to, $subject, $body, $headers)) {
      echo "Email sent!";
    } else {
      echo "Error, email not sent.";
    }
  }
?>
