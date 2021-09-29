<?php
    $phpArray = array(
        0 => "servico", 
        1 => "produto", 
    );
?>
<html>
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <a href="#" id="addField" onclick="addField()">Adicionar Serviço</a>
    <a href="#" id="removeField" onclick="removeField('servico')">Remover Serviço</a>
    <a href="#" id="resetFields" onclick="resetFields('servico')">Limpar Serviços</a>    
    <div id="container"></div>
    <script type="text/javascript">
        var phpArray = <?php echo json_encode($phpArray); ?>;
    </script>
    <script src="js/scripts.js"></script>
</body>
</html>