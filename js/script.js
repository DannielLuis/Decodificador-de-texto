//
const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const textRegExp = new RegExp(/[0-9]/)

function textValidate(){
    var area = document.querySelector('.area_texto_input').value
    for(i=0; i < area.length; i++){
        if(maiuscula.indexOf(area.charAt(i)) != -1){
            console.log("Somente letras minusculas!");
            //return
        }else if(textRegExp.test(area)){
            console.log("Texto invalido, não é permitido numeros!");
        }/*else{
            console.log(area)
        }*/
        //console.log(area.charAt(i))
    }
    //console.log(area)
}

textValidate();

function testes(){
    alert('testando')
}



