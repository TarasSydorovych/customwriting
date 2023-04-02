import one from '../../img/video.mp4'
import { BsPencil } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { CardMedia, Card} from '@mui/material';
import { useNavigate,Link } from "react-router-dom";
export default function FirstPage() {
  const navigate = useNavigate();


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
       
                </div>
                <div className='firstBlockWrap'>
         <h1>     Live without stress and take your time.<br/>
Get your perfect essay done!</h1>
         <div className='firstBlockIcon'>
            <div className='blockIconF'>
            <BsPencil className='BsPencil'/>
            </div>
            <h2>200+<br/>
            Professional Writers</h2>

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
         <button ><a href="/order">
            Place an order</a>
            <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
         </button>
        </div>
                </section>
                
    )
}