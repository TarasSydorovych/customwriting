import one from '../../img/video.mp4'
import { BsPencil } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { CardMedia, Card} from '@mui/material';
import { useNavigate,Link } from "react-router-dom";
import img1 from '../../img/Img1.png'
import img2 from '../../img/Img2.png'
import img3 from '../../img/Img3.png'
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
         <h1>     Live without stress
</h1>
<h2 className='firstBlockWraph2'> and take your time.</h2>
<h3 className='firstBlockWraph3'>Get your perfect essay done!</h3>
         <div className='firstBlockIcon'>
            <div className='blockIconF'>
            <img src={img1} className='BsPencil'/>
            </div>
            <h2>200+<br/>
            Professional Writers</h2>

<div className='blockIconF'>
            <img src={img2} className='BsPencil'/>
            </div>
            <h2>100%<br/>
            Followed Guidelines</h2>

<div className='blockIconF'>
            <img src={img3} className='BsPencil'/>
            </div>
            <h2>100%<br/>
            Original Writing</h2>
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