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
    
        if($_SERVER["REQUEST_METHOD"] != "POST") {
            echo "Invalid request";
            return;
        }

        // Get the raw POST data
        $rawData = file_get_contents("php://input");
        $data = json_decode($rawData, true);

        if(!isset($data['blog_id']) || !isset($data['ip_address'])) {
            echo "Invalid request";
            return;
        }

        $blog_id = $data['blog_id'];
        $ip_address = $data['ip_address'];

        // Check if blog already exists
        $checkStmt = $conn->prepare("SELECT COUNT(*) FROM Blogs WHERE id = :blog_id");
        $checkStmt->bindParam(':blog_id', $blog_id);
        $checkStmt->execute();
        $blogExists = $checkStmt->fetchColumn();

        $stmt = null;

        if (!$blogExists) {
            // Add blog with one view
            $stmt = $conn->prepare("INSERT INTO Blogs (id, views, ip_addresses) VALUES (:blog_id, 1, :ip_address)");
            $stmt->bindParam(':blog_id', $blog_id);
        } else {
            // Check if IP address already exists
            $blog = $checkStmt->fetch(PDO::FETCH_ASSOC);
            if($blog['ip_addresses'] && strpos($blog['ip_addresses'], $ip_address) !== false) {
                echo "exists";
                return;
            }

            // Increment views and add IP address
            $stmt = $conn->prepare("UPDATE Blogs SET views = views + 1, ip_addresses = CONCAT(ip_addresses, ', ', :ip_address) WHERE id = :blog_id");
            $stmt->bindParam(":blog_id", $blog_id);
            $stmt->bindParam(":ip_address", $ip_address);
        }

        // Execute the statement
        if ($stmt->execute()) {
            echo "success";
        } else {
            echo "failed";
        }
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    } finally {
        // Close the connection
        $conn = null;
    }
    
?>