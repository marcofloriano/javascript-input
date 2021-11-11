<?php
    $servicos = array(
        array(1, "Hospedagem Basic", "Para profissionais liberais com 1,5 GB de espaço", "Contrato Mensal", 30.00),
        array(2, "Hospedagem Pro", "Para pequenos negócios com 5 GB de espaço", "Contrato Mensal", 50.00),        
        array(3, "Hospedagem Business", "Para empresas online, 10 GB de espaço", "Contrato Mensal", 80.00),
    );
?>
<html>
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div id="container"></div>
    <br>
    <a href="#" id="addField" onclick="addField()">Adicionar Serviço</a> |  
    <a href="#" id="resetFields" onclick="resetFields('servico')">Limpar Serviços</a> |  
    <a href="#" onclick="total()">Calcular</a>
    <p id="log"></p>
    <div id="total">
    </div>

    <script type="text/javascript">
        var servicosArray = <?php echo json_encode($servicos); ?>;
    </script>
    <script src="js/scripts.js"></script>
</body>
</html>