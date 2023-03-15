
import './userMenu.css'
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiOutlineDown, AiOutlineLogout, AiOutlineUnorderedList, AiFillFileAdd } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import UserCabinetIcon from '../userCabinetIcon/userCabinetIcon';
import logoBlack from '../../img/logoBlack.png'

export default function HeaderUser() {
    const navigate = useNavigate();
    const listen = onAuthStateChanged(auth, (user) => {
        if(!user){
            navigate("/signin");
        }
        
    });
listen();

    return(
        <>
        <div className="headerUser">
 <div className="logoImgAdmin">
       <Link to="/">    <img src={logoBlack} className='logoAdm'></img></Link>
        </div>
   <UserCabinetIcon/>

        </div>
        <div className='headerPidUser'>
            <div className='myOrder'>
                <ul>
            <li><Link to="/cabinet"><AiOutlineUnorderedList/>My order</Link></li>
            <li><Link to="/order"><AiFillFileAdd/>New order</Link></li>
            <li><Link to="/chat"><BsFillChatLeftTextFill/> Chat</Link></li>
            </ul>
            </div>

        </div>
        </>
    )
}