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


    var pesoEhValido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura) ;

    if(!pesoEhValido) {
        console.log("peso Invalido");
        pesoEhValido = false;
        tdPeso.textContent= "Peso invalido"
    }

    if(!alturaEhvalida) {
        console.log("Altura Invalida");
        alturaEhvalida = false; 
        tdAltura.textContent= "Altura Invalida"

    }

    if(alturaEhvalida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        var imc_tabela = paciente.querySelector(".info-imc").textContent = imc
        
    }else{
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "red"
        tdImc.textContent = 'Altura ou peso invalido';
        
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true
    }else{return false}
}
function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0){
        return true
    }else{return false}
}

function calculaImc(peso,altura){
    var imc = 0;
    var imc = peso / altura**2;
    return imc.toFixed(2);
}
/*titulo.addEventListener("click", function (){
    console.log("ola mundo")
});// funcao anonima*/

/*function mostraMnsg() {
    console.log("Ola mundo")
}
*/
//botaoAdd.addEventListener('click', mostraMnsg) 

