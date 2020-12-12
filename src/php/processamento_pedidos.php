<?php
session_start();

//Aqui definimos os parametros para a conexao com o banco de dados
define('Hostname', 'localhost');
define('Username', 'root');
define('Password', '');
define('DB', 'fseletro');

//Fazemos uma conexao com o banco de dados passando os parametros definidos anteriormente
$conexao = mysqli_connect(Hostname, Username, Password, DB) ;

/*
//Verificamos se o usuário digitou algo no cmapo email e senha. Caso negativo, retornamos ele para a página de login
if(empty($_POST['nome_cliente']) || empty($_POST['endereco']) || empty($_POST['telefone']) || empty($_POST['produto']) || empty($_POST['valor_unitario']) || empty($_POST['quantidade']) || empty($_POST['valor_total'])){
    header('Location: ../Pagina Inicial.php');
    exit();
}
*/

//pegamos os dados digitados pelo usuário
$nome_cliente = $_POST['nome_cliente'];
$endereco = $_POST['endereco'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$produto = $_REQUEST['produto'];


if($produto == "FOGAO 4 BOCAS"){
    $valor_unitario = 1129;
}

elseif ($produto == "FOGAO ATLAS"){
    $valor_unitario = 1129;
}

elseif ($produto == "MICROONDAS ELETROLUX"){
    $valor_unitario = 409.88;
}

elseif ($produto == "MICROONDAS PHILCO"){
    $valor_unitario = 464.00;
}

elseif ($produto == "MICOONDAS CONSUL"){
    $valor_unitario = 436.05;
}

elseif ($produto == "GELADEIRA BRASTEMP"){
    $valor_unitario = 5019;
}

elseif ($produto == "GELADEIRA TRÊS PORTAS"){
    $valor_unitario = 1910.90;
}

elseif ($produto == "GELADEIRA DODGE"){
    $valor_unitario = 2069;
}

elseif ($produto == "MAQUINA DE LAVAR ELECTROLUX"){
    $valor_unitario = 1214.10;
}

elseif ($produto == "MAQUINA DE LAVAR PHILCO"){
    $valor_unitario = 2179.90;
}

elseif ($produto == "LAVADORA DE PRATOS TORPENTE"){
    $valor_unitario = 2799;
}

elseif ($produto == "LAVADORA DE PRATOS ELECTROLUX"){
    $valor_unitario = 1730.61;
}


$quantidade = $_REQUEST['quantidade'];
$valor_total = $valor_unitario * $quantidade;

//Inserção de dados na tabela pedidos
$query = "INSERT INTO pedidos (nome_cliente, endereco, email, telefone, nome_produto, valor_unitario, quantidade, valor_total)
VALUES ('$nome_cliente', '$endereco', '$email', '$telefone', '$produto', $valor_unitario, $quantidade, $valor_total);";

if ($conexao->query($query) === TRUE){
    $_SESSION['status_pedido'] = true;
}

$conexao->close();

echo "<script>
alert('Pedido processado!');
window.location.href='http://localhost:3000/pedidos';
</script>";

?>

