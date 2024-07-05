<?php
    $servername = "rdbms.strato.de";
    $dbname = "DB4052629";
    $username = "U4052629";
    $password = "YG!siAY3hgjg8AC";

    try {
        // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        // Handle GET request to fetch all subscribers
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
             // Get the raw POST data
            $rawData = file_get_contents("php://input");
            $data = json_decode($rawData, true);

            // Check if email is provided
            if (isset($data['email'])) {
                $email = $data['email'];

                // Prepare and bind
                $stmt = $conn->prepare("INSERT INTO Subscribers (email) VALUES (:email)");
                $stmt->bindParam(':email', $email);

                // Execute the statement
                if ($stmt->execute()) {
                    echo "success";
                } else {
                    echo "failed";
                }
            }
        } else {
            echo "Invalid request";
        }
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    
    // Close the connection
    $conn = null;
?>