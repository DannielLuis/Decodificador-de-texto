//
const campoTexto = document.querySelectorAll('[campoTexto]');
const btn1 = document.querySelector(".btn1");
const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//const textRegExp = new RegExp(/[0-9]/)
const textRegExp = new RegExp(
    /[(0-9)(À-ù)(À-ü)('"!@)]/
);

const textValidate = () => {
    let area = document.querySelector('.area_texto_input').value
    let validar = true;

    for(i=0; i < area.length; i++){
        if(maiuscula.indexOf(area.charAt(i)) != -1){
            console.log("Somente letras minusculas!");
            campoTexto[0].classList.add("text_invalid");
            validar = false
            //return
        }else if(textRegExp.test(area)){
            console.log("Texto invalido, não é permitido numeros!");
            campoTexto[0].classList.add("text_invalid");
            validar = false
        }else if(validar){
            //console.log(area)
            campoTexto[0].classList.remove("text_invalid");
        }
        //console.log(area.charAt(i))
    }
    //console.log(area)
    return validar
}

function encriptar(){
    let validar = textValidate();
    //console.log(typeof validar)
    //console.log(validar)
    if(!validar){
        alert("Não é possivel encriptar, texto invalido!")
    }
}

btn1.addEventListener("click", () => {
    encriptar();
})

function testes(){
    alert('testando')
}



