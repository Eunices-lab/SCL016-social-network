import { changeRouter } from './lib/router.js';

const init = () => {
  changeRouter(window.location.hash);
};

init();
