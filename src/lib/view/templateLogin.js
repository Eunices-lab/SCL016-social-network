export const login = () => {
    const divLogin = document.createElement('div');

    const viewLogin = /* html*/ `
    <div id="contenedorLogin" class="contenedorLogin">
    <h2 id="leyend">¿Registrado?</h2>
    
    <p id ="leyend2">Inicia sesión con una cuenta valida</p>
      
    
    
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