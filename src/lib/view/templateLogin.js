export const login = () => {
    const divLogin = document.createElement('div');

    const viewLogin = /* html*/ `
    <div id="contenedorLogin" class="contenedorLogin">
    <h2 id="leyend">¿Registrado?</h2>
    
    <p id ="leyend2">Inicia sesión con una cuenta valida</p>
      
    
    
    <form class="formularioLogin" id="formularioLogin">
        <h3 id= "inicio" >Iniciar Sesión con Google </h3>
        
        <img src="images/google.png" id="google"> 
        <br/>
        <br/>
    </form>
    </div>
    
    
    

    `
    divLogin.innerHTML = viewLogin;

    return divLogin;
}