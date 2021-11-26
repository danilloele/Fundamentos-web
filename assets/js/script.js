let nome= window.document.getElementById("nome");
let email= document.querySelector("#email");
let assunto= document.querySelector("#assunto");

nome.style.width= "50%"
email.style.width= "50%"

function validaName(){
    let txt= document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML= "Nome inválido"
    }
    else{
        txt.innerHTML= "Nome válido"
    }
}