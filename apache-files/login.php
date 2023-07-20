<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Read the XML file
    $xml = simplexml_load_file("users.xml");

    // Get the posted data from the request
    $data = file_get_contents('php://input');
    $request = json_decode($data, true);
    $email = $request['email'];
    $password = $request['password'];

    // Check if the user exists in the XML
    $success = false;
    foreach ($xml->user as $user) {
        if ($user->email == $email && $user->password == $password) {
            $success = true;
            break;
        }
    }

    // Return the response data as JSON
    echo json_encode(['success' => $success]);
}
?>
