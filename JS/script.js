/* Evento para carregar o javascript */
onload = function(){
    let contou = localStorage.getItem("contou");
    if(contou == 1){
        x1 = JSON.parse(localStorage.getItem("x1"));
        x2 = JSON.parse(localStorage.getItem("x2"));
        x3 = JSON.parse(localStorage.getItem("x3"));
        seconds = localStorage.getItem("seconds");
        objects.timer[0].innerHTML = seconds;
        minutes = localStorage.getItem("minutes");
        objects.timer[1].innerHTML = minutes;
        hours = localStorage.getItem("hours");
        objects.timer[2].innerHTML = hours;
        objects.buttons[0].style.marginLeft = "0";
        objects.buttons[2].style.display = "block";
        objects.buttons[3].style.display = "block";
        objects.buttons[3].style.marginTop = "18px";
        objects.result.style.display = "block";
        let result = localStorage.getItem("result");
        objects.text.innerHTML = result;
        
    }

    else{
        x1 = 0;
        x2 = 0;
        objects.buttons[0].style.margin = "0 auto";
        objects.buttons[2].style.display = "none";
        objects.buttons[3].style.display = "none";
        objects.result.style.display = "none";
    }

    if(x3 == 24 && x2 == 0 && x1 == 0){
        objects.buttons[0].style.display = "none";
        objects.buttons[2].style.display = "block";
        objects.buttons[3].style.display = "block";
        objects.result.style.display = "block";
        objects.buttons[3].style.marginTop = "0";
        seconds = localStorage.getItem("seconds");
        objects.timer[0].innerHTML = seconds;
        minutes = localStorage.getItem("minutes");
        objects.timer[1].innerHTML = minutes;
        hours = localStorage.getItem("hours");
        objects.timer[2].innerHTML = hours;
        x1 = JSON.parse(localStorage.getItem("x1"));
        x2 = JSON.parse(localStorage.getItem("x2"));
        x3 = JSON.parse(localStorage.getItem("x3"));
        final = true;
    }
} 

/* Evento para iniciar a contagem */
let final = false;
let x1 = 0;
let x2 = 0;
let x3 = 0;
var stopStart;
const objects = {
    timer: [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")],
    buttons: [document.getElementsByTagName("button")[0], document.getElementsByTagName("button")[1], document.getElementsByTagName("button")[2], document.getElementsByTagName("button")[3]],
    return: document.getElementsByClassName("return")[0],
    finish: document.getElementsByClassName("finish")[0],
    result: document.getElementsByClassName("tarefa")[0],
    text: document.getElementById("text"),
}
const timerStart = () => {
    x1 += 1;
    let seconds = "";
    let minutes = "";
    let hours = "";
    contando = true;
    if(x1 > 0 && x1 < 10){ /* Condição dos segundos */
        seconds = "0" + x1;
    }

    else if(x1 > 9 && x1 < 60){
        seconds = x1;
    }

    else{
        x1 = 0;
        seconds = "0" + x1;
        x2 += 1;
        if(x2 > 0 && x2 < 10){ /* Condição dos minutos */
            minutes = "0" + x2;
        }

        else if(x2 > 9 && x2 < 60){
            minutes = x2;
        }

        else{
            x2 = 0;
            minutes = "0" + x2;
            x3 += 1;
            if(x3 > 0 && x3 < 10){ /* Condição das horas */
                hours = "0" + x3;
            }

            else if(x3 > 9 && x3 < 24){
                hours = x3;
            }

            else{
                objects.finish.style.display = "block";
                x1 = 0;
                x2 = 0;
                seconds = "0" + x1;
                minutes = "0" + x2;
                hours = x3;
                final = true;
            }

            objects.timer[2].innerHTML = hours;
            localStorage.setItem("x3", x3);
            localStorage.setItem("hours", hours);
        }

        localStorage.setItem("x2", x2);
        localStorage.setItem("minutes", minutes);
        objects.timer[1].innerHTML = minutes;
    }

    /* Comandos para aparecer em tela o resultado do tempo do usuário */
    
    if(x1 > 0 && x1 < 10 && x2 == 0 && x3 == 0){
        let text = "00 " + " : " + " 00 " + " : " +  0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 == 0){
        let text = "00 " + " : " + " 00 " + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 == 0){
        let text = "00 " + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 == 0){
        let text = "00 " + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 == 0){
        let text = "00 " + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 == 0){
        let text = "00 " + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    objects.timer[0].innerHTML = seconds;
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("x1", x1);
    localStorage.setItem("contou", 1);

    if(x3 == 24){
        objects.buttons[2].style.display = "block";
        objects.buttons[2].style.margin = "0 auto";
        objects.buttons[1].style.display = "none";
        objects.buttons[3].style.display = "block";
        objects.buttons[3].style.marginTop = "0";
        clearInterval(stopStart);
    }
}

const start = () => { /* Inicia o contador */
    if(contando == false){
        stopStart = setInterval(timerStart, 1000);
        objects.buttons[0].style.display = "none";
        objects.buttons[1].style.display = "block";
        objects.buttons[2].style.display = "none";
        objects.return.style.display = "none";
        objects.buttons[3].style.display = "none";
        objects.result.style.display = "none";
    }

}

const pause = () => { /* pausar a contagem */
    if(contando == true){
        clearInterval(stopStart);
        objects.buttons[1].style.display = "none";
        objects.buttons[0].style.display = "block";
        objects.buttons[0].style.marginLeft = "0";
        objects.buttons[2].style.display = "block";
        objects.buttons[3].style.display = "block";
        objects.buttons[3].style.marginTop = "18px";
        objects.result.style.display = "block";
        contando = false;
    }

    else{
        clearInterval(stopBack);
        objects.buttons[1].style.display = "none";
        objects.buttons[0].style.display = "block";
        objects.buttons[2].style.display = "block";
        objects.buttons[3].style.display = "block";
        objects.buttons[3].style.marginTop = "18px";
        objects.result.style.display = "block";
    }
}

/* Evento para retornar a contagem */
let end;
var stopBack;
var contando = false;
const timerBack = () => {
    let seconds = "";
    let minutes = "";
    let hours = "";
    if(x3 == 24 && final == true){
        x1 = 60;
        x1 -= 1;
        x2 = 60;
        x2 -= 1;
        seconds = x1;
        minutes = x2;
        objects.timer[0].innerHTML = seconds;
        localStorage.setItem("seconds", seconds);
        localStorage.setItem("x1", x1);
        objects.timer[1].innerHTML = minutes;
        localStorage.setItem("minutes", minutes);
        localStorage.setItem("x2", x2);
        x3 -= 1;
        hours = x3;
        objects.timer[2].innerHTML = hours;
        localStorage.setItem("hours", hours);
        localStorage.setItem("x3", x3);
        final = false;
    }
    if(x1 == 0 && x2 == 0 && x3 == 0){
        clearInterval(stopBack);
    }

    else{
        clearInterval(stopStart);
        x1 -= 1
        if(x1 > 9 && x1 < 60){
            seconds = x1;
        }

        else if(x1 > 0 && x1 < 10){
            seconds = "0" + x1;
        }

        else if(x1 == 0){
            seconds = "0" + x1;
        }

        else if(x1 < 0){
            x1 = 60;
            x1 -= 1;
            seconds = x1;
            x2 -= 1;
            if(x2 > 9 && x2 < 60){
                minutes = x2;
            }

            else if(x2 > 0 && x2 < 10){
                minutes = "0" + x2;
            }

            else if(x2 == 0){
                minutes = "0" + x2;
            }

            else if(x2 < 0){
                x1 = 60;
                x1 -= 1;
                x2 = 60;
                x2 -= 1;
                x3 -= 1;
                seconds = x1;
                minutes = x2;
                if(x3 > 9 && x3 < 24){
                    hours = x3;
                }

                else if(x3 > 0 && x3 < 10){
                    hours = "0" + x3;
                }

                else if(x3 <= 0){
                    x3 = 0;
                    hours = "0" + x3;
                }

                objects.timer[2].innerHTML = hours;
                localStorage.setItem("x3", x3);
                localStorage.setItem("hours", hours);
            }
            
            objects.timer[1].innerHTML = minutes;
            localStorage.setItem("x2", x2);
            localStorage.setItem("minutes", minutes);
        }

        objects.timer[0].innerHTML = seconds;
        localStorage.setItem("seconds", seconds);
        localStorage.setItem("x1", x1);

        if(x1 == 0 && x2 == 0 && x3 == 0){
            clearInterval(stopBack);
            objects.timer[0].innerHTML = "00";
            objects.timer[1].innerHTML = "00";
            objects.timer[2].innerHTML = "00";
            objects.return.style.display = "block";
            objects.buttons[1].style.display = "none";
            objects.buttons[0].style.display = "block";
            objects.buttons[0].style.margin = "0 auto";
            objects.buttons[3].style.display = "none";
            localStorage.removeItem("contou");
        }
    }
    
     /* Comandos para aparecer em tela o resultado do tempo do usuário no retorno do cronômetro */
    
     if(x1 > 0 && x1 < 10 && x2 == 0 && x3 == 0){
        let text = "00 " + " : " + " 00 " + " : " +  0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 == 0){
        let text = "00 " + " : " + " 00 " + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 == 0){
        let text = "00 " + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 == 0){
        let text = "00 " + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 == 0){
        let text = "00 " + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 == 0){
        let text = "00 " + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 == 0 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 0 && x2 < 10 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 9 && x2 < 60 && x3 > 0 && x3 < 10){
        let text = "0" + x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 == 0 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 0 && x2 < 10 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + 0 + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 0 && x1 < 10 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 == 0 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + 0 + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }

    else if(x1 > 9 && x1 < 60 && x2 > 9 && x2 < 60 && x3 > 9 && x3 < 60){
        let text = x3 + " : " + x2 + " : " + x1;
        let text2 = "você gastou ";
        objects.text.innerHTML = text2 + text + " segundos para fazer a atividade!";
        let result = text2 + text + " segundos para fazer a atividade!";
        localStorage.setItem("result", result);
    }
       
}

const back = () =>{ /* Retornar contador */
    stopBack = setInterval(timerBack, 1000);
    objects.buttons[0].style.display = "none";
    objects.buttons[2].style.display = "none";
    objects.buttons[1].style.display = "block";
    objects.finish.style.display = "none";
    objects.buttons[3].style.display = "none";
    objects.result.style.display = "none";
    contando = false;
}

/* Evento para limpar a contagem */
const clear_ = () => {
    x1 = 0
    seconds = "0" + x1;
    localStorage.setItem("x1", x1);
    localStorage.setItem("seconds", seconds);
    objects.timer[0].innerHTML = seconds;
    x2 = 0;
    minutes = "0" + x2;
    localStorage.setItem("x2", x2);
    localStorage.setItem("minutes", minutes);
    objects.timer[1].innerHTML = minutes;
    x3 = 0;
    hours = "0" + x3;
    localStorage.setItem("x3", x3);
    localStorage.setItem("hours", hours);
    objects.timer[2].innerHTML = hours;
    objects.buttons[3].style.display = "none";
    objects.buttons[2].style.display = "none";
    objects.buttons[0].style.display = "block";
    objects.buttons[0].style.margin = "0 auto";
    objects.result.style.display = "none";
    localStorage.setItem("contou", 0);
}