import { footer } from '../../componentes/footer.js';
import { login } from '../index.js';

export const log = () => {
  const divLogin = document.createElement('div');
  const viewLogin = /* html */ `
  <img class="portada" src="images/portada.png" />
    <div id="contenedorLogin">
    <br>
    <br>
    <div class="textoLogin">¡Bienvenido! Inicia sesión con tu cuenta Google para continuar</div>
    
    
    <form id="formLogin">
    <button class="btnLogin" id="btnLogin">Login for Google</button>
    <div id="textoRegister">¿No tienes cuenta? Registrate <a href="/#/register"><span id= "aqui">aquí</span></a></div>
    <br>
    
    </form>
      
    <form class="formGoogle" id="formGoogle">
    
         
        <a class="fab fa-google fa-3x" id="google"></a>
        </form>
    </div>`;

  divLogin.innerHTML = viewLogin;
  divLogin.appendChild(footer());

  const btnLogin = divLogin.querySelector('#btnLogin');
  btnLogin.addEventListener('click', () => {
    login()
  })

  return divLogin;
};
