
import './userMenu.css'
import { GiBoxUnpacking } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';



export default function UserBody() {
const navigate = useNavigate();
const orderNew = () =>{
    navigate('/order')
}


    return(
        <>
        <div className='userBodyContainer'>
        <GiBoxUnpacking className='GiBoxUnpacking'/>
        <p>THERE ARE NO ORDERS YET.</p>
        <button onClick={orderNew}>
            NEW ORDER
            <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
        </button>
        </div>
        </>
    )
}