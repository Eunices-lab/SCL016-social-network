export const muro = () => {
    const divMuroContainer = document.createElement('div');
    const viewMuro = /* html */ `
      <div id="contenedorMuro">
      
      // AQUÍ VA TU CÓDIGO DE TEMPLATE MURO (O VIEW MURO)
  
      </div>`;
  
    divMuroContainer.innerHTML = viewMuro;
  
    divMuroContainer.appendChild(menu())
}    