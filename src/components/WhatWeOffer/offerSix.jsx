import { AiOutlineDollarCircle, AiOutlineCheck, AiOutlineLike } from "react-icons/ai";
import one from '../../img/Img1.png'
import sectiond from '../../img/Img2.png'
import thre from '../../img/Img3.png'

export default function OfferSix() {




    return(
        <section id="twoblockoffer">
<div className="twoblockOfferWrap">
<div className="secodFirsOffer">
<h1 className="bubleGroupOffer">Why choose &nbsp;<span className="bubleGroupOfferSpan">ESSAY-WANTED?</span></h1>



</div>

<div className="dusListWrapOffer">
    <div className="disListrowOffer">
    <h2 className="watsIconNNH2">Premium Essay Quality from 200+ Professional Writers</h2>
     <img className="watsIconNN" src={one}/>
    </div>
    <div className="disListrow">
    <h2 className="watsIconNNH2">100% Followed Guidelines and Clear answers to Questions</h2>
    <img className="watsIconNN" src={sectiond}/>
    </div>
    <div className="disListrow">
    <h2 className="watsIconNNH2">100% Original Writing and unique ideas</h2>
    <img className="watsIconNN" src={thre}/>
    </div>
 </div>


        </div>
      

</section>
    )
}