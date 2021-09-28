<?php
    $phpArray = array(
        0 => "servico", 
        1 => "produto", 
    )
?>
<html>
<head>
    <script type='text/javascript'>

        function resetFields(className){
            const elements = document.getElementsByClassName(className);
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

        function removeField(elementId)
        {
            var element = document.getElementById(elementId);
            element.parentNode.removeChild(element);
        }

        function addField()
        {                            
            var javascriptArray = <?php echo json_encode($phpArray); ?>;
            var number = document.getElementsByClassName("servico").length;
            var container = document.getElementById("container");
            var tipo = javascriptArray[0];            

            container.appendChild(document.createTextNode(tipo + (number+1)));

            var input = document.createElement("input");
            input.className = tipo;
            input.id = tipo;
            input.type = "text";
            input.name = tipo + (number+1);
            container.appendChild(input);
            container.appendChild(document.createElement("br"));

            let div = document.createElement("div")
            let p = document.createElement("p")
            container.append("Some text", div)
            document.getElementById('lc').appendChild(element); 
        }
    </script>
</head>
<body>
    <a href="#" id="addField" onclick="addField()">Adicionar Serviço</a>
    <a href="#" id="removeField" onclick="removeField('servico')">Remover Serviço</a>
    <a href="#" id="resetFields" onclick="resetFields('servico')">Limpar Serviços</a>
    <div id="container">
    </div>
</body>
</html>