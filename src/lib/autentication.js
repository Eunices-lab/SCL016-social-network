let login = document.getElementById()

let registro = document.getElementById("btnRegistro")
registro.addEventListener("click", () => {
    let email = document.getElementById("emailReg").value
    console.log(email)
    let password = document.getElementById("passReg").value
    console.log(password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
});