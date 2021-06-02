export const login = () => {
    const divLogin = document.createElement('div');

    const viewLogin = /* html*/ `
    <h3>¿Registrado?</h3>
      
    <p>Inicia sesión con una cuenta valida</p>
      
    <button id="btnIniciarSesion">Iniciar Sesión</button>
    `
    divLogin.innerHTML = viewLogin;

    return divLogin;
}