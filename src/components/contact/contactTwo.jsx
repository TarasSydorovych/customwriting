import { AiOutlineDollarCircle, AiFillHourglass, AiFillFile, AiOutlineBranches, AiOutlineRise, AiFillPlusCircle } from "react-icons/ai";
import './contact.css'
import one from '../../img/Img17.png'
import two from '../../img/img9.png'
import thre from '../../img/Img2.png'
import four from '../../img/img6.png'
import five from '../../img/Img7.png'
import six from '../../img/Img15.png'


export default function ContactTwo() {





    return(
        <section id="thirdBlockContact"> 
        <div className="wrapThird">
        <div className="thirdBlockFirst">
        <h2>Ordering the paper with us you get</h2>
      
            
            
         </div>

<div className="thirdBlockTwo">
<div>
<img src={one} className="AiOutlineDollarCircle"/>
    <h3>Transparent pricing</h3>
    <p>You see how the cost changes with different parameters and decide what is better for you</p>
</div>
<div>
    <img src={two} className="AiOutlineDollarCircle"/>
<h3>Variable deadlines</h3>
<p>You choose a deadline and can see a confirmation when the writer start working on your essay</p>
</div>
<div>
    <img src={thre} className="AiOutlineDollarCircle"/>
<h3>Any formatting style</h3>
<p>Harvard, APA, MLA, Chicago, AMA, or any other formatting per your request is provided</p>
</div>
<div>
    <img src={four} className="AiOutlineDollarCircle"/>
<h3>Any topic</h3>
<p>The variability of the acceptable topics and subjects is fascinating</p>
</div>
<div>
    <img src={five} className="AiOutlineDollarCircle"/>
<h3>24/7 communication</h3>
<p>You can always get a response to any of your requests in chat or on phone</p>
</div>
<div>
    <img src={six} className="AiOutlineDollarCircle"/>
<h3>Additional bonuses</h3>
<p>The bibliography and title page and justified revisions are free of charge</p>
</div>
</div>
        </div>
         

        </section>
    )
}