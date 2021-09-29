//adicionar produto ou serviço
function addField()
{
    //numero de servicos adicionados
    var number = document.getElementsByClassName("servico").length;

    //criando <div>
    var div = document.createElement("div");
    div.id = 'servico' + (number+1);
    div.className = 'servico';
    document.getElementById('container').appendChild(div);

    //adicionando <p>
    var p = document.createElement('p');    
    p.appendChild(document.createTextNode('Serviço:'));
    document.getElementById('servico' + (number+1)).appendChild(p);

    //adicionando <input>
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'servico';
    document.getElementById('servico' + (number+1)).appendChild(input);

    //adicionando botão para remover
    var remover = document.createElement('button');
    remover.setAttribute('type', 'button');
    remover.setAttribute('id', 'servico' + (number+1));
    remover.setAttribute('onclick', 'removeField(\'servico' + (number+1) + '\'' + ')');
    remover.textContent = 'Remover';
    document.getElementById('servico' + (number+1)).appendChild(remover);
}

//remover produto ou serviço
function removeField(fieldId)
{
    var field = document.getElementById(fieldId);
    field.remove();
}

//remove todos os campos de uma vez
function resetFields(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}