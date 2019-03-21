 <?php
    $to = "feb9visual@gmail.com";
    $theme = "Feb9visual question";
    $message = "Name: ".$_POST['name']."<br>";
    $message .= "E-mail: ".$_POST['email']."<br>";
    $message .= "Phone: ".$_POST['phone']."<br>";
    $message .= "Сообщение: ".$_POST['question']."<br>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    mail($to, $theme, $message, $headers);
    readfile("./about.html");
?>