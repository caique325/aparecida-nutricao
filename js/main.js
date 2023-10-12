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
