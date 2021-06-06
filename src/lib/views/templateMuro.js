export const muro = () => {
  const divMuroContainer = document.createElement('div');
  const viewMuro = /* html */ `
  <img class="portada" src="images/portada.png" />
      <div id="contenedorMuro">
      <div class="saludo">¡Bienvenidos a U-Gamers!</div>
      <form id="formMuro"> 
      <textarea placeholder="¿Que tipo de jugador buscas hoy?" id="publicacion"
      class="post" cols="30" rows="10"></textarea>
          <div class="buttonMuro">
          <button type="submit" id="buttonPublicar">Publicar</button>
          </div>
      </form>
      </div>`;

  divMuroContainer.innerHTML = viewMuro;
  // Agrega componentes al view

  return divMuroContainer;
};
