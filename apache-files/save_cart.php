<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the raw POST data
    $xmlData = file_get_contents('php://input');

    // Validate the XML data (optional but recommended)
    if (!empty($xmlData) && simplexml_load_string($xmlData)) {
        $filePath = 'orders.xml';
        $file = fopen($filePath, 'w');
        if ($file) {
            fwrite($file, $xmlData);
            fclose($file);

            // Return a success response to the Angular app
            header('Content-Type: application/json');
            echo json_encode(['success' => true, 'message' => 'Cart items saved successfully']);
        } else {
            // Return an error response if failed to save the data
            header('Content-Type: application/json');
            echo json_encode(['success' => false, 'message' => 'Error saving cart items']);
        }
    } else {
        // Return an error response if the XML data is invalid
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Invalid XML data']);
    }
}
?>
