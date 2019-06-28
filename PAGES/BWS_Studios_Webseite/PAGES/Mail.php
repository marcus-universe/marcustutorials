<html>

<head>
<title>Danke</title>
</head>

<body>

<?php
 
//Recipient
$empf = "marcusharting@hotmail.com";
 
//Where comes the Mail from
$mailFrom = "From: "; 
$mailFrom .= $_POST('name');
$mailFrom .= " <";
$mailFrom .= $_POST('mail');
$mailFrom .= ">\n";
$mailFrom .= "Reply-To: ";
$mailFrom .= $_POST('mail');
$mailFrom .= "\n";
$mailFrom .= "Content-Type: text/html\n";
 
//mail subject
$mailSubject = $_POST('select');
 
//Mail text (at the top o.t. mail content)
$mailText = $_POST'nachricht';
 

mail($empf, $mailFrom, $mailSubject, $mailText);
echo "Vielen Dank";
 
?>
</body>

</html>
