<?php
header('Content-Type: application/json');
$uploadDirectory = "files/";

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["file"])) {
    $targetFile = $uploadDirectory . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        $response = ["success" => true];
    } else {
        $response = ["success" => false, "error" => "Error moving uploaded file"];
    }
} else {
    $response = ["success" => false, "error" => "Invalid request"];
}

echo json_encode($response);
?>