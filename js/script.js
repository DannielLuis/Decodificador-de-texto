//
const objeto = document.querySelectorAll('[objeto]');
const btn1 = document.querySelector(".btn1");
const outputText = document.querySelector(".outputText");
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

function mostraTextoEncriptado(result){
    objeto[1].classList.add("hide")
    outputText.classList.remove("hide")
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

function testes(){
    alert('testando')
}



