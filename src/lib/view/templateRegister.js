export const register = () => {
    const divRegister = document.createElement('div');

    const viewRegister = /* html*/ `
    <div id="contenedorRegistro" class="contenedorRegistro">
    <h3 id="leyend1">¿No te has registrado aún?</h3>

    <p id="leyend3">Ingresa al formulario y registra tu usuario</p>

    <form class="formularioRegistro" id="formularioRegistro">
    <h2 id="registro">Registrarse</h2>
    <input type="text" placeholder="Usuario" id="user">
    <br/>
    <input type="email" placeholder="Correo Electronico" id="emailReg" name ="email">
    <br/>
    <input type="password" placeholder="Contraseña" id="passReg" name ="password">
    <br/>
    <input type="button" id="btnRegistro" value="Registrarse">
    <br/>
    </form>
    </div>
    `
    divRegister.innerHTML = viewRegister;
    return divRegister;

}