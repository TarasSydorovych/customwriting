import { useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app, googleAuthProvider} from './firebase'
export default function AuthProvider() {
    const auth = getAuth(app);
const [user, setUser] = useState(auth.currentUser);


useEffect(() => {
const unsub = auth.onAuthStateChanged((maybeUser) => {
if(maybeUser != null){
return setUser(maybeUser);
}
signInWithPopup(auth, googleAuthProvider)
.then(credentials => setUser(credentials.user))
.catch((e) => console.error(e))

})
return unsub;
}, [auth])



}