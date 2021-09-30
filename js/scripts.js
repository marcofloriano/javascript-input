//adicionar produto ou serviço
function addField()
{
    //numero de servicos adicionados
    var number = document.getElementsByClassName("servico").length;
    var br = document.createElement("br");

    //criando <div>
    var div = document.createElement("div");
    div.id = 'servico' + (number+1);
    div.className = 'servico';
    document.getElementById('container').appendChild(div);

    //adicionando <p>
    var p = document.createElement('p');    
    p.appendChild(document.createTextNode('Serviço ' + (number+1) + ' :'));
    document.getElementById('servico' + (number+1)).appendChild(p);

    //adicionando <input>
    /*
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'servico';
    document.getElementById('servico' + (number+1)).appendChild(input);
    */

    //adicionando <select> para servicos
    /*
    <select name="servico" id="servico">
        <option value="1">Criação de Site</option>
        <option value="2">Manutenção de Site</option>
        <option value="3">Consultoria</option>
    </select>
    */
    var servicos = document.createElement('select');
    servicos.setAttribute('name', 'servico');
    servicos.setAttribute('id', 'servico');

    //lista de opcoes
    for (let i = 0; i < servicosArray.length; i++) {
        var opt = document.createElement('option');
        opt.setAttribute('value', servicosArray[i][0]);
        opt.appendChild( document.createTextNode( servicosArray[i][1] ) );
        servicos.appendChild(opt);
    }

    document.getElementById('servico' + (number+1)).appendChild(servicos);

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

/* javascript for loop 
let text = "";
for (let i = 0; i < servicosArray.length; i++) {
  text += servicosArray[i][3] + "<br>";
}
document.getElementById("log").innerHTML = text;
*/