import { GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js";

const googleButton=document.getElementById("google-login");

googleButton.addEventListener("click",async ()=>{
      const provider =new GoogleAuthProvider();



      try{
            const credentials =await signInWithPopup(auth,provider);

            
            const signinModal=document.getElementById('signin-modal');
            const modal = bootstrap.Modal.getInstance(signinModal);
           
            signinForm.reset();
            modal.hide();

      }

      catch(error){
            console.log(error)
      }
})