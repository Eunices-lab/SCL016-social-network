import { footer } from '../componentes/footer.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = /* html */ `
  <img class="portada" src="images/portada.png" />
    <div id="contenedorLogin">
    <div class="textoLogin">¡Bienvenido! Inicia sesión para continuar</div>
    <form id="formLogin">
    <label for="email"></label><input placeholder="Ingresa tu correo" type="text" id="email" class="inputLogin">
    <label for="password"></label><input placeholder="Ingresa tu contraseña" type="password" id="passwordHome" class="inputLogin">
    <button class="btnLogin" id="btnLogin">Login</button>

    <div id="textoRegister">¿No tienes cuenta? Registrate <a href="/#/register"><span id= "aqui">aquí</span></a></div>
    </form>
      
    <form class="formGoogle" id="formGoogle">
    
        <div class="textoLogin">O inicia sesión con tu cuenta de Google</div> 
        <a class="fab fa-google fa-3x" id="google"></a>
        </form>
    </div>`;

  divLogin.innerHTML = viewLogin;
  divLogin.appendChild(footer());

  return divLogin;
};
