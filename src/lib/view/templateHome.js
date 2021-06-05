export const home = () => {
    const divHome = document.createElement('div');

    const viewHome =  /* html*/ ` 
    <h1>BIENVENIDO AL ENCUENTRO ENTRE JUGADORES</h1>
    <button>ENCONTRAR JUGADORES AQUI</button>
    ` 

    divHome.innerHTML = viewHome;

    return divHome;
   
}