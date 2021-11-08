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