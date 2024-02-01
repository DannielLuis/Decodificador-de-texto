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

function encriptar(string){
    let validar = textValidate();
    let result = ''
    let temp = []
    //console.log(typeof validar)
    //console.log(validar)
    if(!validar){
        alert("Não é possivel encriptar, texto invalido!")
    }else if(validar){
        for(let i = 0; i < string.length; i++){
            //console.log(string.charAt(i))
            temp[i] = string.charAt(i)
        }

        temp.forEach((element, index) => {
            //console.log(index)
            //console.log(element)
            if(temp[index] == 'e'){
                temp[index] = "enter"
                //console.log(index)
            }
            if(temp[index] == 'i'){
                temp[index] = "imes"
            }
            if(temp[index] == 'a'){
                temp[index] = "ai"
            }
            if(temp[index] == 'o'){
                temp[index] = "ober"
            }
            if(temp[index] == 'u'){
                temp[index] = "ufat"
            }
        });
    
        for(let i = 0; i < temp.length; i++){
            result = result += temp[i]
        }
    }
    return result
}

btn1.addEventListener("click", () => {
    let area = document.querySelector('.area_texto_input').value;
    let result = encriptar(area);
    console.log(result);
});

function testes(){
    alert('testando')
}



