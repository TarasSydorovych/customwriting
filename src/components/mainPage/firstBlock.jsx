import one from '../../img/f1.jpg'
import { BsPencil } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";

export default function FirstPage() {



    return(
        <div className="picture">
        <img  src={one}></img>
        <div className='firstBlockWrap'>
         <h1>Essay Writing Service - Hire A Professional Essay Writer For All Your Writing Needs</h1>
         <div className='firstBlockIcon'>
            <div className='blockIconF'>
            <BsPencil className='BsPencil'/>
            </div>
            <h2>250+<br/>
Qualified Writers</h2>

<div className='blockIconF'>
            <GiMoneyStack className='BsPencil'/>
            </div>
            <h2>100%<br/>
            Money-Back Guarantee</h2>

<div className='blockIconF'>
            <HiDocumentReport className='BsPencil'/>
            </div>
            <h2>100%<br/>
            Plagiarism-free Papers</h2>
         </div>
         <button>
            Place an order
            <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
         </button>
        </div>
                </div>
                
    )
}