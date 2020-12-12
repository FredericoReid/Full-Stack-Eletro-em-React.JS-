<?php

require_once("./connection.php");

class Content extends Connection {
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;
        
        $result = $conn->prepare("SELECT * FROM pedidos");

        $result->execute();

        while ($row = $result->fetch(PDO::FETCH_OBJ)){
            $array[$i] = $row;
            $i++;
        }

        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json');     
        echo json_encode($array);  

    }
}