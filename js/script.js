//
let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function textValidate(){
    var area = document.querySelector('.area_texto_input').value
    for(i=0; i < area.length; i++){
        if(maiuscula.indexOf(area.charAt(i)) != -1){
            console.log("Somente letras minusculas!")
            //return
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



