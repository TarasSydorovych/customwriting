
import { AiOutlineDollarCircle, AiOutlineCheck, AiOutlineLike } from "react-icons/ai";
import one from '../../img/Img26.jpg'





export default function OfferFive() {





    return(

        <section id="sevenBlock">
        <div className='firstBlockTimeteblockwrap'>
           
           <div className="imageKolDiversity">
           <img src={one}></img>
           </div>
           <div className='secondBlockTimeOfferOneBlock'>
           <div className="disListrowOffer">
    <ul>
        <h2>Additional <span className="wrSpanBlue">Services</span></h2>
        <li><AiOutlineCheck className="disListrowIcon"/>Books</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Charts</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Calculations</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Content making</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Diagrams</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Graphs</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Images/video editing</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Poems</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Slogans</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Summaries</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Tables</li>
              
    </ul>
</div>
                       </div>
           </div>
        </section>
    
    )
}