import { post } from '../muro.js';

export const muro = () => {
  const divMuroContainer = document.createElement('div');
  const viewMuro = /* html */ `
  <img class="portada" src="images/portada.png" />
      <div id="contenedorMuro">
      <div class="saludo">¡Bienvenidos a U-Gamers!</div>
      <div id="formMuro"> 
      <textarea placeholder="¿Que tipo de jugador buscas hoy?" id="publicacion"
      class="post" cols="30" rows="10"></textarea>
          <div class="buttonMuro">
          <button type="button" id="buttonPublicar">Publicar</button>
          </div>
      </div>
      </div>`;

  divMuroContainer.innerHTML = viewMuro;
  // Agrega componentes al view

  const buttonDiv = divMuroContainer.querySelector('#buttonPublicar');
  buttonDiv.addEventListener('click', () => {
let textValue = divMuroContainer.querySelector('#publicacion').value
post(textValue)

  }) 

  return divMuroContainer;
};


