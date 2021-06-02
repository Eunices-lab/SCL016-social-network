export const register = () => {
    const divRegister = document.createElement('div');

    const viewRegister = /* html*/ `
    <h3>¿No te has registrado aún?</h3>

    <p>Ingresa al formulario y registra tu usuario</p>

    <button id="btnRegistrar">Registrarse</button>
    `
    divRegister.innerHTML = viewRegister;
    return divRegister;

}