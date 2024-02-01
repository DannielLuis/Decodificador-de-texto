//
const campoTexto = document.querySelectorAll('[campoTexto]');
const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const textRegExp = new RegExp(/[0-9]/)

function textValidate(){
    let area = document.querySelector('.area_texto_input').value
    for(i=0; i < area.length; i++){
        if(maiuscula.indexOf(area.charAt(i)) != -1){
            console.log("Somente letras minusculas!");
            campoTexto[0].classList.add("text_invalid");
            //return
        }else if(textRegExp.test(area)){
            console.log("Texto invalido, não é permitido numeros!");
            campoTexto[0].classList.add("text_invalid");
        }else{
            //console.log(area)
            campoTexto[0].classList.remove("text_invalid");
        }
        //console.log(area.charAt(i))
    }
    //console.log(area)
}

textValidate();

function testes(){
    alert('testando')
}



