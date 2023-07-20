<?php
$filePath = 'orders.xml'; 

if (file_exists($filePath)) {
  // Read the XML data from the file
  $xmlData = file_get_contents($filePath);

  // Convert the XML data to an array
  $ordersArray = simplexml_load_string($xmlData);
  $ordersJson = json_encode($ordersArray);

  // Output the orders as JSON
  header('Content-Type: application/json');
  echo $ordersJson;
} else {
  // Handle the case when the XML file is not found
  http_response_code(404); // Set HTTP response status code to 404 Not Found
  echo json_encode(array('error' => 'XML file not found'));
}
?>
