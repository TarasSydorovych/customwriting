import one from '../../img/video.mp4'
import { BsPencil } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { CardMedia, Card} from '@mui/material';
export default function FirstPage() {



    return(
        <section id="firsBlock">
        <div className="picture">
       
        <CardMedia
       component='video'
       className="slideCardMedia"
       
        autoPlay 
        loop muted
        loading='lazy'
        src={one}
      />
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
                </section>
                
    )
}