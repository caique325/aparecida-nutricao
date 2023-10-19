var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function() {
            event.target.parentNode.remove()
        },500);
    }
})

/*
paciente.forEach(function(paciente) {
    paciente.addEventListener("dblclick",function(){
        console.log("fui clicado com um duplo click")
        this.remove();
    })
});
*/