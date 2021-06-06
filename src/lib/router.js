import { login } from '../views/templateLogin.js';
import { register } from '../views/templateRegister.js';
import { muro } from '../views/templateMuro.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(login());
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
      containerRoot.innerHTML = 'ERROR';
      break;
  }
};

export const changeRouter = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/register') {
    return showTemplate(hash);
  } if (hash === '#/muro') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener('hashchange', () => {
  changeRouter(window.location.hash);
}, false);
