<?php

require_once("./connection.php");

class Content extends Connection {
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;
        
        $result = $conn->prepare("SELECT produtos.descricao, quantidade.quantidade FROM produtos INNER JOIN quantidade ON produtos.id=quantidade.id");

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