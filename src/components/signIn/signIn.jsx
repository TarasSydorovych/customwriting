
import { useState } from 'react'
import Header from '../header'
import Footer from '../mainPage/footer'
import './signIn.css'
import {auth, db, googleAuthProvider} from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import { async } from '@firebase/util'


export default function SignIn() {
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
        navigate("/cabinet");
    })
    .catch((error) => {
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
       navigate("/cabinet");
 console.log(result)
}).catch((err) => {
    console.log('Error')
})
}

    return(
        <>
        <Header/>
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
                    
				</form>
			</div>

			<div class="login">
				<form >
					<label for="chk" aria-hidden="true">Login in</label>
					<input type="email" name="email" placeholder="Email" required="" value={mail} onChange={(e) => setMail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<button onClick={signIn}>Login</button>
                    <button onClick={singInWithGoogle}>Google</button>
                    
				</form>
			</div>
	</div>
                </div>
            
        </section>
        <Footer/>
        </>
    )
}