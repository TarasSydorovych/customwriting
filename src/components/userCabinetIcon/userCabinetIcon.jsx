import './userMenu.css'
import { CiUser } from "react-icons/ci";
import { AiOutlineDown, AiOutlineLogout, AiOutlineUnorderedList } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import { BsFillChatLeftTextFill } from "react-icons/bs";




export default function UserCabinetIcon() {
    const [useProp, setUseProp] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
      
    
        return () => {
            listen();
        }
    
    }, [authUser])
    const userSignOut = () => {
    signOut(auth).then(() => {
        navigate("/");
    }).catch((err) => {
        console.error(err);
    })
    }
    



    return(
<div className='upList' onMouseOver={() => setUseProp(true)} onMouseLeave={() => setUseProp(false)}>
<CiUser/>
<AiOutlineDown/>

{useProp && 
<ul className='userHeaderList'>
    <li><Link to="/cabinet"><CiUser/>{authUser.email}</Link></li>
    <li><BsFillChatLeftTextFill/>Chat</li>
    <li><AiOutlineUnorderedList/>My order</li>
    <li onClick={userSignOut}><AiOutlineLogout/>Log out</li>
</ul>
}
</div>
    )
}