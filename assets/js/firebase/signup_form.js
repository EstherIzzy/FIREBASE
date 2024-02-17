/*console.log('singup up form');*/
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { showMessage } from "./show_message.js";
import { auth } from "./firebase.js";

//OBTENEMOS EL FORM CON ESE ID
const signupForm = document.getElementById('signup-form');
console.log(signupForm);
//Agregamos el evento al mandar el form 
signupForm.addEventListener('submit', async(e) => {
    //Para prevenir que la pagina  se recarge
    e.preventDefault();

    //Accedemos a los elementos  con notació de corchete 
    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    console.log(email,password);

   try{
    //obtener las credenciales 
    const credentials = await  createUserWithEmailAndPassword (auth,email,password);
    console.log(credentials);

    const signupModal = document.getElementById('signup-modal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    //Limpiamos los campos del form
    signupForm.reset();
    modal.hide();
   }
   //manejo de errores
 catch (error) {
     if (error.code === 'auth/email-alredy-in-use') {
        showMessage('Email already in use','red')
    }
    else if (error.code === 'auth/invalid-email') {
        showMessage('invalid email','red')
    }
    else if (error.code === 'auth/weak-password') {
        showMessage('weak password','red')
    }
    else {
        showMessage('something went wrong','red')
    }
}
});