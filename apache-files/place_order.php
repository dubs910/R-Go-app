<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $xmlData = file_get_contents('php://input');

    $fileName = 'orders.xml';

    // Save the XML data to the file in the same directory as the PHP script.
    file_put_contents($fileName, $xmlData);

    echo 'Data saved to XML file successfully.';
} else {
    echo 'Invalid request method.';
}
?>
