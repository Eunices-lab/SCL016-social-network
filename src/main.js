import { menu } from '/lib/view/templateMenu.js';
import { changeRouter } from '/lib/router.js'

document.getElementById('root').innerHTML = menu()

const init = () => {
    window.addEventListener('hashChange', () => {
      myFunction();
      console.log(window.location.hash);
      changeRouter(window.location.hash)  
    })
}

window.addEventListener('load', init)
