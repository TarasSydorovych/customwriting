
import './userMenu.css'
import { GiBoxUnpacking } from "react-icons/gi";





export default function UserBody() {




    return(
        <>
        <div className='userBodyContainer'>
        <GiBoxUnpacking className='GiBoxUnpacking'/>
        <p>THERE ARE NO ORDERS YET.</p>
        <button>
            NEW ORDER
            <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
        </button>
        </div>
        </>
    )
}