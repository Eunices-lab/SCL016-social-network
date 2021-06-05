export const login = () => {
    const divLogin = document.createElement('div');

    const viewLogin = /* html*/ `
    <div id="contenedorLogin" class="contenedorLogin">
    <h2>¿Registrado?</h2>
    
    <p>Inicia sesión con una cuenta valida</p>
      
    </div>
    <div id=contenedorFormLogin>
    <form class="formularioLogin" id="formularioLogin">
        <h3>Iniciar Sesión</h3>
        <input type="email" placeholder="Correo Electronico" id="emailLogin" name = "email">
        <input type="password" placeholder="Contraseña" id="passLogin" name = "password">
        <button>Ingresar</button>
        <i class="fab fa-google"></i>  
    </form>
    
    
    
    </div>

    `
    divLogin.innerHTML = viewLogin;

    return divLogin;
}