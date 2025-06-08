<?php
include 'db.php';

$name = $_POST['student_name'];
$number = $_POST['student_number'];
$program = $_POST['program'];
$email = $_POST['school_email'];
$org_id = $_POST['org_id'];

$stmt = $conn->prepare("INSERT INTO applications (org_id, student_name, student_number, program, school_email) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("issss", $org_id, $name, $number, $program, $email);
$stmt->execute();

echo "Application submitted!";
?>
