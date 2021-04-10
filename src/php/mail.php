<?php

ini_set( 'display_errors', 1 );

error_reporting( E_ALL );

$to = "electrik-ok@ya.ru";
$from = "admin@rembtehnika.ru";
$sitename = "www.rembtehnika.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone";


$pagetitle = "Новый запрос на звонок \n $sitename\"";
mail($to, $pagetitle, $message);

