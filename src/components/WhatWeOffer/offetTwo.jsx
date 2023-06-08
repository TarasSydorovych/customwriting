import { AiOutlineDollarCircle, AiOutlineCheck, AiOutlineLike } from "react-icons/ai";
import one from '../../img/Img23.jpg'


export default function OfferTwo() {

   


    return(
        <section id="firstBlockTime">
       
      

<div className="sameWrapPO">
    <div className="sameWrapPOSmall">
<h1 className="bubleGroupOffer">We help with different tasks</h1>





<div className="sixBlogPOffer">
Check your type of paper below or write in chat if it is not on the list
</div>
</div>
</div>
               <div className='firstBlockTimeteblockwrap'>
                   <div className='firstBlockTimeOfferOneBlock'>
                   <div className="disListrowOffer">
    <ul>
        <h2>Academic <span className="wrSpanBlue">Writing</span></h2>
        <li><AiOutlineCheck className="disListrowIcon"/>Annotated bibliography </li>
        <li><AiOutlineCheck className="disListrowIcon"/>Coursework</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Case study</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Discussion</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Essay</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Formatting</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Homework</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Research</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Report</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Reflection</li>
        <li><AiOutlineCheck className="disListrowIcon"/>Thesis</li>
      
    </ul>
</div>
                   </div>
  <div className="imageKol">
    <img src={one}></img>
  </div>
       </div>
           </section>
    )
}