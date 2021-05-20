/*Declaracion*/
let contenedorRegistroLogin = document.getElementById("contenedorRegistroLogin")
let formularioLogin = document.getElementById("formularioLogin")
let formularioRegistro = document.getElementById ("formularioRegistro")
let contenedorLogin = document.getElementById ("contenedorLogin")
let contenedorRegistro = document.getElementById("contenedorRegistro")

/*Contenido de contenedor Login*/ 
const title = document.createElement('h3')
title.textContent = '¿Registrado?'
contenedorLogin.appendChild(title)
const subTitle = document.createElement('p')
subTitle.textContent = 'Inicia sesión con una cuenta valida'
contenedorLogin.appendChild(subTitle)
const btn = document.createElement('button')
btn.classList.add = ('btnIniciarSesion')
btn.textContent = 'Iniciar Sesión'
contenedorLogin.appendChild(btn)

/*Contenido de contenedor Registro*/
const titleReg = document.createElement('h3')
titleReg.textContent = '¿No te has registrado aún?'
contenedorRegistro.appendChild(titleReg)
const subTitleReg = document.createElement('p')
subTitleReg.textContent = 'Ingresa al formulario y registra tu usuario'
contenedorRegistro.appendChild(subTitleReg)
const btnReg = document.createElement('button')
btnReg.classList.add = ('btnRegistrar')
btnReg.textContent = 'Registrarse'
contenedorRegistro.appendChild(btnReg)

/*Formulario login*/

const form = document.createElement('h2')
form.textContent = 'Iniciar Sesión'
formularioLogin.appendChild(form)
const cuadro = document.createElement('input')
/*placeholder*/ 
cuadro.type = 'email'
formularioLogin.appendChild(cuadro)
const cuadroTwo = document.createElement('input')
/*placeholder*/ 
cuadroTwo.type = 'password'
formularioLogin.appendChild(cuadroTwo)
const boton = document.createElement('button')
boton.textContent = 'Ingresar'
formularioLogin.appendChild(boton)

/*Formulario registro*/

const formReg = document.createElement('h2')
formReg.textContent = 'Registrarse'
formularioRegistro.appendChild(formReg)

const reg = document.createElement('input')
reg.type = 'text'
formularioRegistro.appendChild(reg)
const regTwo = document.createElement('input')
regTwo.type = 'email'
formularioRegistro.appendChild(regTwo)
const regTree = document.createElement('input')
regTree.type = 'password'
formularioRegistro.appendChild(regTree)
const regFour = document.createElement('button')
regFour.classList.add = 'registro'
regFour.textContent ='Registrarse'
formularioRegistro.appendChild(regFour)

/** Funciones responsive**/

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
/** Dinamismo del dom **/

let registro = document.getElementsByClassName('registro');
registro.addEventListener("click", registrarse);

let login = document.getElementsByName('boton')
login.addEventListener("click", iniciarSesion);

let ventana = window.addEventListener("resize", anchoPagina);


  

