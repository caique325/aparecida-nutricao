var botaoAdd = document.querySelector("#adicionar-paciente")

botaoAdd.addEventListener("click",function(){
    event.preventDefault();
    
    // extraindo informacoes do paciente no form
    var form = document.querySelector("#form-adiciona")
    var paciente = extractForm(form)
    //montando tr
    var pacienteTr = montaTr(paciente)
   //adicionando o paciente na tabela 
   var tabela = document.querySelector('#tabela-pacientes')
   tabela.appendChild(pacienteTr)

   form.reset();
});

function extractForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    var pacienteTr= document.createElement("tr");
    pacienteTr.classList.add('paciente')

    /*var nomeTd = document.createElement("td")
    nomeTd.classList.add('info-nome')
    nomeTd.textContent = paciente.nome;
    */
    
    /*
    var pesoTd = document.createElement("td")
    pesoTd.classList.add('info-peso')
    var alturaTd = document.createElement("td")
    alturaTd.classList.add('info-altura')
    var gorduraTd = document.createElement("td")
    nomeTd.classList.add('info-nome')
    var imcTd = document.createElement("td")
    nomeTd.classList.add('info-nome')
    */
    /*var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'infopeso');
    var alturaTd = montaTd(paciente.altura,'info-altura');
    var gorduraTd= montaTd(paciente.gordura,'info-gorduraTd');
    var imcTd = montaTd(paciente.imc,'info-imc');
    */

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'infopeso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gorduraTd'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));
    
    return pacienteTr
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}