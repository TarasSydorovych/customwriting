
import { useState } from 'react'
import Header from '../header'
import Footer from '../mainPage/footer'
import './signIn.css'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        alert('The user with this login is not registered')
    })

   

}
const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newUserMail, newUserPassword)
    .then((userCredencial) => {
    alert(`User with mail ${userCredencial.user.email} is registered. You can enter`)
    })
    .catch((error) => {
        alert('The user with this login is not registered')
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
				<form onSubmit={signUp}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)} required=""/>
					<input type="email" name="email" placeholder="Email" value={newUserMail} onChange={(e) => setNewUserMail(e.target.value)}  required=""/>
					<input type="password" name="pswd" placeholder="Password" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} required=""/>
					<button type="submit">Sign up</button>
                    <button>Google</button>
                    <button>Facebook</button>
				</form>
			</div>

			<div class="login">
				<form onSubmit={signIn}>
					<label for="chk" aria-hidden="true">Login in</label>
					<input type="email" name="email" placeholder="Email" required="" value={mail} onChange={(e) => setMail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<button type="submit">Login</button>
                    <button>Google</button>
                    <button>Facebook</button>
				</form>
			</div>
	</div>
                </div>
            
        </section>
        <Footer/>
        </>
    )
}