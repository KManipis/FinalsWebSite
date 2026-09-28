<?php
$pdo = new PDO("mysql:host=localhost;dbname=sample", "root", "");
$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'] ?? '';
$name = $data['org_name'] ?? '';
$tagline = $data['tagline'] ?? '';

if (!$id || !$name) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing data']);
  exit;
}

$stmt = $pdo->prepare("UPDATE org SET org_name = ?, tagline = ? WHERE id = ?");
$stmt->execute([$name, $tagline, $id]);

echo json_encode(['success' => true]);
?>
