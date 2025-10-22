<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $payment_id = $_POST['payment_id'];
  $amount = $_POST['amount'];

  $conn = new mysqli("localhost","root","","trading_db");
  if($conn->connect_error) die("Connection failed: ".$conn->connect_error);

  $conn->query("INSERT INTO payments (payment_id, amount) VALUES ('$payment_id','$amount')");
  echo "success";
}
?>
