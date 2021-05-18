// Declaracion de variables
let contenedorRegistroLogin = document.getElementById("contenedorRegistroLogin")
let formularioLogin = document.getElementById("formularioLogin")
let formularioRegistro = document.getElementById ("formularioRegistro")
let contenedorLogin = document.getElementById ("contenedorLogin")
let contenedorRegistro = document.getElementById("contenedorRegistro")

function anchoPagina(){
    if(window.innerWidth > 850){
        contenedorLogin.style.display = "block";
        contenedorRegistro.style.display = "block";
    }else{
        contenedorRegistro.style.display ="block";
        contenedorRegistro.style.opacity = "1";
        contenedorLogin.style.display = "none";
        formularioLogin.style.display ="block";
        formularioRegistro.style.display ="none;"
        contenedorRegistroLogin.style.left = "0px"
    }
}
anchoPagina();

function iniciarSesion(){
    if (window.innerWidth > 850){
    formularioRegistro.style.display = "none";
    contenedorRegistroLogin.style.left ="10px";
    formularioLogin.style.display = "block";
    contenedorRegistro.style.opacity = "1";
    contenedorLogin.style.opacity = "0";
    }else
    {
    formularioRegistro.style.display = "none";
    contenedorRegistroLogin.style.left ="0px";
    formularioLogin.style.display = "block";
    contenedorRegistro.style.display = "block";
    contenedorLogin.style.display = "none";
    }
}
function registrarse(){
    if(window.innerWidth > 850){
    formularioRegistro.style.display = "block";
    contenedorRegistroLogin.style.left ="410px";
    formularioLogin.style.display = "none";
    contenedorRegistro.style.opacity = "0";
    contenedorLogin.style.opacity = "1";
    }else{
    formularioRegistro.style.display = "block";
    contenedorRegistroLogin.style.left ="0px";
    formularioLogin.style.display = "none";
    contenedorRegistro.style.display = "none";
    contenedorLogin.style.display = "block";
    contenedorLogin.style.opacity = "1";
    }
}

let registro = document.getElementById("btnRegistrar")
registro.addEventListener("click", registrarse);

let login = document.getElementById("btnIniciarSesion")
login.addEventListener("click", iniciarSesion);

let ventana = window.addEventListener("resize", anchoPagina);
