var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso =paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;


    var tdImc = paciente.querySelector(".info-imc")


    var pesoEhValido = true;
    var alturaEhvalida = true ;

    if(peso <= 0 || peso >= 1000) {
        console.log("peso Invalido");
        pesoEhValido = false;
        tdPeso.textContent= "Peso invalido"
    }

    if(altura <= 0 || altura > 3) {
        console.log("Altura Invalida");
        alturaEhvalida = false; 
        tdAltura.textContent= "Altura Invalida"

    }

    if(alturaEhvalida && pesoEhValido) {
        var imc = peso / altura **2;
        var imc_tabela = paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
        
    }else{
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "red"
        tdImc.textContent = 'Altura ou peso invalido';
        
    }
}

/*titulo.addEventListener("click", function (){
    console.log("ola mundo")
});// funcao anonima*/

/*function mostraMnsg() {
    console.log("Ola mundo")
}
*/
//botaoAdd.addEventListener('click', mostraMnsg) 

var botaoAdd = document.querySelector("#adicionar-paciente")

botaoAdd.addEventListener("click",function(){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")
    
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

   var pacienteTr= document.createElement("tr");
   
   var nomeTd = document.createElement("td")
   var pesoTd = document.createElement("td")
   var alturaTd = document.createElement("td")
   var gorduraTd = document.createElement("td")
   var imcTd = document.createElement("td")

   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   imcTd.textContent = imc;

   pacienteTr.appendChild(nomeTd)
   pacienteTr.appendChild(pesoTd)
   pacienteTr.appendChild(alturaTd)
   pacienteTr.appendChild(gorduraTd)
   pacienteTr.appendChild(imcTd)

   var tabela = document.querySelector('#tabela-pacientes')
   tabela.appendChild(pacienteTr)

    
})

