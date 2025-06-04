<?php
header('Content-Type: application/json');
include 'db.php'; // Your DB connection file

$sql = "SELECT id, org_name FROM org";
$result = $conn->query($sql);

$orgs = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $orgs[] = $row;
    }
}

echo json_encode($orgs);
?>
