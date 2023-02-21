// Interacción con la información
const Info_sec2 = ["Exp-sec2","Form-sec2","Cur-sec2", "Bec-sec2", "Idi-sec2", "Hab-sec2", "Ref-sec2"];
const Info_sec3 = ["Exp-sec3","Form-sec3","Cur-sec3", "Bec-sec3", "Idi-sec3", "Hab-sec3", "Ref-sec3"];

for (let i = 0; i < Info_sec2.length; i++) {
    document.getElementById(Info_sec3[i]).onmouseover = function(){ var id_nombre3 = Info_sec3[i]; var id_nombre2= Info_sec2[i]; mouseOver(id_nombre2, id_nombre3);}
    document.getElementById(Info_sec3[i]).onmouseout = function(){ var id_nombre3 = Info_sec3[i]; var id_nombre2= Info_sec2[i]; mouseOut(id_nombre2, id_nombre3);}  
}

function mouseOver(id_variable2, id_variable3){
    document.getElementById(id_variable2).style.backgroundColor="#44C8DE";
    document.getElementById(id_variable2).style.fontSize = "17px";
    
    document.getElementById(id_variable3).style.backgroundColor="#44C8DE";
    document.getElementById(id_variable3).style.fontSize = "17px";
}

function mouseOut(id_variable2, id_variable3){
    document.getElementById(id_variable2).style.backgroundColor="";
    document.getElementById(id_variable2).style.fontSize = "";
    
    document.getElementById(id_variable3).style.backgroundColor="";
    document.getElementById(id_variable3).style.fontSize = "";
}

// Validación de datos ingresados por el Usuario
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const comentario = document.getElementById("comentario");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("avisos");

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    let avisos ="";
    let flag = false;
    let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    if(nombre.value.length < 3 || valTexto(nombre.value)  ){
        avisos +="Nombre no válido <br>";
        flag = true;
    }
    if(telefono.value.length < 9 || valNumero(telefono.value) ){
        avisos +="Teléfono no válido <br>";
        flag = true;
    }
    if(!expRegEmail.test(email.value)){
        avisos +="Email no válido <br>";
        flag = true;
    }
   
    if(comentario.value.length >500){
        avisos +="Comentario muy largo <br>";
        flag = true;
    }
    if(flag){
        parrafo.innerHTML=avisos;
    } else {
        parrafo.innerHTML="Enviado";
        
        // La idea en esta parte era que el submit se ejecute luego de 2 segundos para que el mensaje de "enviado" sea visto
        // por más tiempo, pero al hacerlo de esta forma solo aparecía el mensaje pero no se ejecutaba el submit.

        // setTimeout(function() {
        //     e.currentTarget.submit();
        // }, 2000);
        e.currentTarget.submit();
    }
})

function valTexto(parametro){
    var patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    var flag = (parametro.search(patron) ? true : false);
    return flag;
}

function valNumero(parametro){
    var flag = (!/^([0-9])*$/.test(parametro) ? true : false);
    return flag;
}