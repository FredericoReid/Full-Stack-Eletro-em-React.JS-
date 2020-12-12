<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
</head>
<body>
    
    <?php

    $dados_json = file_get_contents("http://localhost:8080/React3/fse/src/php/conexao.php");

    $dados = json_decode($dados_json, true);
    
    foreach($dados as $key => $row){

    ?>

        <div class="row col-xs-6 col-sm-6 col-md-6 col-lg-12" <?php echo $row["categoria"]; ?>>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-12">
                <img src="<?php echo $row["imagem"]; ?>" width="120px" onclick="exibir_detalhes_produto(this)">
                <br>
                <div class="descricao"><?php echo $row["descricao"]; ?></div>
                <div class="preco">R$ <?php echo number_format($row["preco_venda"], 2, ",", "."); ?></div>
                <br>
            </div>
        </div>


    <?php

    }

    ?>

</body>
</html>