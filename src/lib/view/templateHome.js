export const home = () => {
    const divHome = document.createElement('div');

    const viewHome =  /* html*/ ` 
    <h1>BIENVENIDO A TU RED SOCIAL</h1>
    <button>COMENZAR</button>
    ` 

    divHome.innerHTML = viewHome;

    return divHome;
   
}