import {TbZoomInArea } from "react-icons/tb";
import {BsFillPeopleFill } from "react-icons/bs";
import {GiPencilBrush } from "react-icons/gi";
import {AiFillFile } from "react-icons/ai";
import { AiOutlineDollarCircle, AiOutlineCheck, AiOutlineLike } from "react-icons/ai";
import one from '../../img/Img24.jpg'




export default function OfferThree() {





    return(
        <section id="sevenBlock">
   <div className='firstBlockTimeteblockwrap'>
           
           <div className="imageKolTwo">
           <img src={one}></img>
           </div>
           <div className='secondBlockTimeOfferOneBlock'>
           <div className="disListrowOffer">
    <ul>
        <h2>Admission <span className="wrSpanBlue">Writing</span></h2>
        <li><AiOutlineCheck className="disListrowIcon"/>Admission essay</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Cover letter</li>
        <li><AiOutlineCheck className="disListrowIcon"/>CV</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Entrance essay</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Grant proposal</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Scholarship essay</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Reflection</li>
              
    </ul>
</div>
                       </div>
           </div>

</section>
    )
}