
import { useState } from 'react'
import Header from '../header'
import Footer from '../mainPage/footer'
import '../signIn/signIn.css'
import {auth, db, googleAuthProvider, appleProvider, facebookProvider} from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import { async } from '@firebase/util'
import { OAuthProvider ,signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import { Pixel } from 'react-facebook-pixel';
export default function SignForOrder({summaryFun}) {
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');
const [newUserMail, setNewUserMail] = useState('');
const [newUserPassword, setNewUserPassword] = useState('');
const [name, setName] = useState('');
const navigate = useNavigate();

const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, mail, password)
    .then((userCredencial) => {
        summaryFun(true);
    })
    .catch((error) => {
        summaryFun(false);
        alert('The user with this login is not registered', error)
    })

   

}
const signUp = async (e) => {
    e.preventDefault();

    try{
        
  const res = await createUserWithEmailAndPassword(auth, newUserMail, newUserPassword);

  await setDoc(doc(db, "users", res.user.uid), {
    uid: res.user.uid,
    displayName: name,
    email: newUserMail,

   })
}catch (error) {
        alert('The user with this login is not registered', error)
    }
 

}
const singInWithGoogle = async (e) => {
    e.preventDefault();
signInWithPopup(auth, googleAuthProvider).then(async (result) => {
    await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
    
       })
       summaryFun(true);
}).catch((err) => {
    summaryFun(false);
    console.log('Error')
})
}
const singInWithApple = async (e) => {
    e.preventDefault();
   
    signInWithPopup(auth, appleProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // Apple credential
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
    console.log(result)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });
}

const signWithFacebook = async (e) => {
    e.preventDefault();
    console.log(facebookProvider)
    signInWithPopup(auth, facebookProvider).then(async (result) => {
    
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  console.log(result)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });



}

    return(
        <>
        
        <section id="signIn">
            <div className="wrap">
                
            <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form >
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)} required=""/>
					<input type="email" name="email" placeholder="Email" value={newUserMail} onChange={(e) => setNewUserMail(e.target.value)}  required=""/>
					<input type="password" name="pswd" placeholder="Password" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} required=""/>
					<button onClick={signUp}>Sign up</button>
                    <button onClick={singInWithGoogle}>Google</button>
                    <button onClick={signWithFacebook}>Facebook</button>
                    <button onClick={singInWithApple}>Apple ID</button>
                    
				</form>
			</div>

			<div class="login">
				<form >
					<label for="chk" aria-hidden="true">Log in</label>
					<input type="email" name="email" placeholder="Email" required="" value={mail} onChange={(e) => setMail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<button onClick={signIn}>Login</button>
                    <button onClick={singInWithGoogle}>Google</button>
                    <button onClick={signWithFacebook}>Facebook</button>
                    <button onClick={singInWithApple}>Apple ID</button>
                    
                    
				</form>
			</div>
	</div>
                </div>
            
        </section>
        
        </>
    )
}