var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
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
    var imc_tabela = paciente.querySelector(".info-imc").textContent = imc;
}else{
    tdImc.textContent = 'Altura ou peso invalido';
}