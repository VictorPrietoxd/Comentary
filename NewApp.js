let mensaje = document.querySelector('.mensajeM'),
btnEnviar = document.getElementById('btnEnviar'),
containerC = document.querySelector('.comentario');



DomLoaded();


function DomLoaded() {

    document.addEventListener('DOMContentLoaded',btnDisabled);    
    btnEnviar.addEventListener('click', enviarComentario);
    btnEnviar.addEventListener('click', resetText);
    mensaje.addEventListener('keyup',validacion);
    mensaje.onkeypress=function(e){
        if(e.key=='Enter'){
            enviarComentario();
            resetText();
        }
    }
    
}

//Funciones

function enterChar(e){
    e.preventDefault();
    if (e.key == 'Enter') {
        enviarComentario();
        resetText();
    }
}


function btnDisabled(){
    btnEnviar.disabled = true;    
}

function enviarComentario() {
    let hora = new Date();
horaC = `${hora.getHours()}:${hora.getMinutes()}`;
    let mC = mensaje.value
    let cajaM = document.createElement('div');
    cajaM.setAttribute('class', 'cajaM')
    cajaM.innerHTML = `
    <div class="containMsg">
    <div class="cm">${mC}</div>
    <div class="hora">${horaC}</div>
</div>
<div class="borrarMsg"><i id="borrarC" class="fas fa-trash basura"></i></div>
</div>
<br>
    `
    containerC.appendChild(cajaM);
    
    borrarComentario(cajaM)
    btnDisabled(btnEnviar);
    let mp = mensaje.value;
    console.log(mp.split(''))
}

function validacion(){
    if (mensaje.value.length>0) {
        btnEnviar.disabled = false;
    }
    else {
        btnEnviar.disabled = true
    }
}

function borrarComentario(cajaM){

    cajaM.addEventListener('click',(e)=>{
        if (e.target.classList.contains('basura')) {
        cajaM.remove();
        }
    })

}

function resetText(){
    /*
    e.preventDefault();

    if (e.target.classList.contains('btnEnviar')) {
       mensaje.value=''
    }*/
    mensaje.value="";

}

