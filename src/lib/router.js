import { login } from './view/templateLogin.js';
import { register } from './view/templateRegister.js';
import { menu } from './view/templateMenu.js';
import { home } from './view/templateHome.js';
import { muro } from './view/templateMuro.js';

export const changeRouter = (hash) => {
    if (hash === '#/'){
        return showTemplate(hash)
    }  if (hash === '#/login'){
        return showTemplate(hash)
    }  if (hash === '#/register'){
        return showTemplate(hash)
    }  if (hash === '"#/muro'){
        return showTemplate(hash)
    } 
        return showTemplate(hash)
    };


const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();
    

    switch (hash) {
        case '#/':
            containerRoot.appendChild(home());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/register':
            containerRoot.appendChild(register());
            break;
        case '#/muro':
            containerRoot.appendChild(muro());
            break;
        default:
            containerRoot.innerHTML = `<h2>Pagina no Existente</h2>`         
    }
}