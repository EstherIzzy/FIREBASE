import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./show_message.js";

//traemos el form necesario
const signinForm = document.getElementById("signin-form");

signinForm.addEventListener("submit", async (e) => {
    //para prevenir que la pagina se recarge
    e.preventDefault();

       //Accedemos a los elementos  con notació de corchete 
   const email = signinForm['email-signin'].value;
   const password = signinForm['password-signin'].value;

   try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    //ocultar el modal
    const signinModal = document.getElementById('signin-modal');
    const modal = bootstrap.Modal.getInstance(signinModal);
    //Limpiamos los campos del form
    signinForm.reset();
    modal.hide();
   }

   catch (error){
    console.log(error);
   }
});
