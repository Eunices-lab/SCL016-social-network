export const home = () => {
    const divHome = document.createElement('div');

    const viewHome =  /* html*/ ` 
    <div id="contenedorGeneral ">
    <h1>BIENVENIDO AL ENCUENTRO ENTRE JUGADORES</h1>
    <button id="btnInicio">ENCONTRAR JUGADORES AQUI</button>
    </div>
    ` 

    divHome.innerHTML = viewHome;

    return divHome;
   
}