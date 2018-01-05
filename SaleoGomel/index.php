<!DOCTYPE html>
<html>
<head>
	<title>авторизация</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<?php
session_start();
$_session["name"]=*admin*;
if(isset($_session["name"])){
	echo "hello" .$_session["name"];
}


?>