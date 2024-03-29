//
const body = document.querySelector("body")
const objeto = document.querySelectorAll('[objeto]');
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn_copiar = document.querySelector(".btn_copiar");
const outputText = document.querySelector(".outputText");
const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//const textRegExp = new RegExp(/[0-9]/)
const textRegExp = new RegExp(
    /[(0-9)(À-ù)(À-ü)('"!@)]/
);

//console.log(body)

btn_copiar.onclick = copiar;

function copiar(){
    //alert("Textando btn copiar")
    //console.log(outputText.textContent)
    const valid = validateCopy()

    if(valid){
        alert("Não tem nada para ser copiado!")
    }else if(!valid){
        console.log("Texto copiado!")
        navigator.clipboard.writeText(outputText.textContent)
    }
}

function validateCopy(){
    let valid = outputText.textContent === "" 
    ? true 
    : false

    return valid
}

const textValidate = () => {
    let area = document.querySelector('.area_texto_input').value
    let validar = true;

    for(i=0; i < area.length; i++){
        if(maiuscula.indexOf(area.charAt(i)) != -1){
            console.log("Somente letras minusculas!");
            objeto[0].classList.add("text_invalid");
            validar = false
            //return
        }else if(textRegExp.test(area)){
            console.log("Texto invalido, não é permitido numeros!");
            objeto[0].classList.add("text_invalid");
            validar = false
        }else if(validar){
            //console.log(area)
            objeto[0].classList.remove("text_invalid");
        }
        //console.log(area.charAt(i))
    }

    if(area.length === 0){
        console.log("Não tem nada para ser encriptado");
        validar = false
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
        return false
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

function descriptografar(string){
    let validar = textValidate();
    let result = ''

    if(!validar){
        alert("Não é possivel descriptografar, texto invalido!")
        return false
    }else if(validar){
        result = string
            .replaceAll("enter" , "e")
            .replaceAll("imes" , "i")
            .replaceAll("ai" , "a")
            .replaceAll("ober" , "o")
            .replaceAll("ufat" , "u")
    }

    return result;
}

function mostraTextoEncriptado(result){
    body.classList.add("height_auto")
    objeto[1].classList.add("hide")
    objeto[2].classList.add("hide")
    outputText.classList.remove("hide")
    btn_copiar.classList.remove("hide")
    outputText.textContent = result
    //console.log(outputText.textContent)
    //console.log(area2)
}

btn1.addEventListener("click", () => {
    let area = document.querySelector('.area_texto_input').value;
    //let area2 = document.querySelector('.area_texto_input').textContent;
    let result = encriptar(area);
    //console.log(result);
    if(result !== false){
        //console.log("Texto encriptado.");
        mostraTextoEncriptado(result)
    }else if(result === false){
        console.log("Texto invalido!!!")
    }
});

btn2.addEventListener("click", () => {
    //testes()
    let area = document.querySelector('.area_texto_input').value;
    let result = descriptografar(area)
    //console.log(result);
    if(result !== false){
        //console.log("Texto encriptado.");
        mostraTextoEncriptado(result)
    }else if(result === false){
        console.log("Texto invalido!!!")
    }
});

function testes(){
    alert('testando')
}



