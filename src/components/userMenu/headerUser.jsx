
import './userMenu.css'
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiOutlineDown, AiOutlineLogout, AiOutlineUnorderedList, AiFillFileAdd } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import UserCabinetIcon from '../userCabinetIcon/userCabinetIcon';


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
 <div className="logonew">
           <h1>Essay-Wanted<span>.com</span></h1>
        </div>
   <UserCabinetIcon/>

        </div>
        <div className='headerPidUser'>
            <div className='myOrder'>
                <ul>
            <li><AiOutlineUnorderedList/>My order</li>
            <li><AiFillFileAdd/>New order</li>
            <li><BsFillChatLeftTextFill/> Chat</li>
            </ul>
            </div>

        </div>
        </>
    )
}