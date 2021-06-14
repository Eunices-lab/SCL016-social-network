export const post = (text) => {
   
    
    firebase.firestore().collection("users").add({
        post: text
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

// traer datos
firebase.firestore().collection("users").get(post).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        crud(doc);
    });
});
const crud = (doc) => {
    const data = doc.data();
    data.id = doc.id;

  
    // HTML TEMPLATE - ADD POST
    const addPost = document.getElementById('post-container');
    addPost.innerHTML += /* html */ `
      <div class="inputJugador" id="postJugador" >${data.post}</div>
      `;
  };

  export const containerJugador = (divMuroContainer) => {
    const btnPublicar = divMuroContainer.querySelector('#buttonPublicar');
    btnPublicar.addEventListener('click', (e) => {
      e.preventDefault();
      post();
    });
  };