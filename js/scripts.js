//carregar descrição dinamicante
function getDescricao(event,id) {
    for (let i = 0; i < servicosArray.length; i++) {
        if (servicosArray[i][0] == event.target.value) {
            desc = servicosArray[i][2];
        }
    }    
    document.getElementById(id).value = desc;
}

//carregar valor dinamicante
function getValor(event,id) {
    for (let i = 0; i < servicosArray.length; i++) {
        if (servicosArray[i][0] == event.target.value) {
            valor = servicosArray[i][4];
        }
    }    
    document.getElementById(id).value = valor;
}

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

    //adicionando <p> para serviço
    var p = document.createElement('p');    
    p.appendChild(document.createTextNode('Serviço:'));
    document.getElementById('servico' + (number+1)).appendChild(p);

    //adicionando <input>
    /*
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'servico';
    document.getElementById('servico' + (number+1)).appendChild(input);
    */

    //adicionando <select> para serviço
    /*
    <select name="servico" id="servico">
        <option value="1">Criação de Site</option>
        <option value="2">Manutenção de Site</option>
        <option value="3">Consultoria</option>
    </select>
    */
    var servicos = document.createElement('select');
    servicos.id = 'servico' + (number+1);
    servicos.name = 'servico' + (number+1);
    servicos.setAttribute("onchange", 'getDescricao(event, \'descricao' + (number+1) + '\'); getValor(event, \'valor' + (number+1) + '\')');
    var opt_default = document.createElement('option');
    opt_default.defaultSelected = true;
    opt_default.disabled = true;
    opt_default.text = 'Selecione um serviço';
    servicos.appendChild(opt_default);

    //lista de opcoes
    for (let i = 0; i < servicosArray.length; i++) {
        var opt = document.createElement('option');
        opt.setAttribute('value', servicosArray[i][0]);
        opt.appendChild( document.createTextNode( servicosArray[i][1] ) );
        servicos.appendChild(opt);
    }
    document.getElementById('servico' + (number+1)).appendChild(servicos);

    //adicionando <p> para descrição
    var p = document.createElement('p');    
    p.appendChild(document.createTextNode('Descrição:'));
    document.getElementById('servico' + (number+1)).appendChild(p);

    //adicionando <textarea> para descrição do serviço
    /*
    <textarea id="servico" name="servico" rows="4" cols="50">
    https://setor9.com.br/servicos/hospedagem-gerenciada-wordpress/
    </textarea>
    */
    var descricao = document.createElement('textarea');
    descricao.id = 'descricao' + (number+1);
    descricao.name = 'descricao' + (number+1);
    descricao.rows = '4';
    descricao.cols = '30';
    descricao.value = 'teste';                
    document.getElementById('servico' + (number+1)).appendChild(descricao);

    //adicionando <br> antes do valor
    document.getElementById('servico' + (number+1)).appendChild(br);

    //adicionando <p> para valor
    var p = document.createElement('p');    
    p.appendChild(document.createTextNode('Valor:'));
    document.getElementById('servico' + (number+1)).appendChild(p);

    //adicionando <input> para valor
    var valor = document.createElement('input');
    valor.id = 'valor' + (number+1);
    valor.name = 'valor' + (number+1);
    valor.type = 'text';
    document.getElementById('servico' + (number+1)).appendChild(valor);

    //adicionando <br> antes do remover
    document.getElementById('servico' + (number+1)).appendChild(br);

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

function myFunction(e) {
    document.getElementById("myText").value = e.target.value
}

function subTotal() {
    const array = [];
    let number = 1;
    let soma = 0;
    for (let i = 0; i < document.getElementsByClassName("servico").length; i++) {
        array.push(Number(document.getElementById('valor' + number).value));
        soma += array[i];
        number++;
    }
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(soma));
    document.getElementById('total').appendChild(p);
}