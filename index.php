<?php
    $servicos = array(
        array(1, "Hospedagem Basic", "https://setor9.com.br/servicos/hospedagem-gerenciada-wordpress/", "Contrato Mensal", 30.00),
        array(2, "Hospedagem Pro", "https://setor9.com.br/servicos/hospedagem-gerenciada-wordpress/", "Contrato Mensal", 50.00),        
        array(3, "Hospedagem Business", "https://setor9.com.br/servicos/hospedagem-gerenciada-wordpress/", "Contrato Mensal", 80.00),
    );
?>
<html>
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <a href="#" id="addField" onclick="addField()">Adicionar Serviço</a>
    <a href="#" id="resetFields" onclick="resetFields('servico')">Limpar Serviços</a>    
    <div id="container"></div>
    <p id="log"></p>
    <script type="text/javascript">
        var servicosArray = <?php echo json_encode($servicos); ?>;
    </script>
    <script src="js/scripts.js"></script>
</body>
</html>