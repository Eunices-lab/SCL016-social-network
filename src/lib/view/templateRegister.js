export const register = () => {
    const divRegister = document.createElement('div');

    const viewRegister = /* html*/ `
    <div id="contenedorRegistro" class="contenedorRegistro">
    <h3>¿No te has registrado aún?</h3>

    <p>Ingresa al formulario y registra tu usuario</p>

    </div>
    <div id="contenedorFormRegister">
    <form class="formularioRegistro" id="formularioRegistro">
    <h2>Registrarse</h2>
    <input type="text" placeholder="Usuario" id="user">
    <input type="email" placeholder="Correo Electronico" id="emailReg" name ="email">
    <input type="password" placeholder="Contraseña" id="passReg" name ="password">
    <input type="button" id="btnRegistro" value="Registrarse">
    </form>
    </div>
    `
    divRegister.innerHTML = viewRegister;
    return divRegister;

}