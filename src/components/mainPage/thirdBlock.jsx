
import { AiOutlineDollarCircle, AiFillHourglass, AiFillFile, AiOutlineBranches, AiOutlineRise, AiFillPlusCircle } from "react-icons/ai";
import img6 from '../../img/img6.png'
import img7 from '../../img/Img7.png'
import img8 from '../../img/Img8.png'
import img9 from '../../img/img9.png'
import img10 from '../../img/Img10.png'
import img11 from '../../img/Img11.png'

export default function ThirdBlock() {



    return(

        <section id="thirdBlock"> 
        <div className="wrapThird">
        <div className="thirdBlockFirst">
        <h2>Why Choose Our Writing Services?</h2>
         <div className="bubleTwo">
         <span>15+<br/></span>
years in essay<br/>
writing
</div>
            
            
         </div>

<div className="thirdBlockTwo">
<div>
<img src={img6} className="AiOutlineDollarCircleImg"/>
    <h3>15+ years experience</h3>
    <p></p>
</div>
<div>
<img src={img7} className="AiOutlineDollarCircleImg"/>
<h3>24/7 support</h3>
<p></p>
</div>
<div>
<img src={img8} className="AiOutlineDollarCircleImg"/>
<h3>Any formatting style, topic and discipline</h3>
<p></p>
</div>
<div>
<img src={img9} className="AiOutlineDollarCircleImg"/>
<h3>Working with short deadlines</h3>
<p></p>
</div>
<div>
<img src={img10} className="AiOutlineDollarCircleImg"/>
<h3>Easy ordering and tracking</h3>
<p></p>
</div>
<div>
<img src={img11} className="AiOutlineDollarCircleImg"/>
<h3>Transparent flexible pricing</h3>
<p></p>
</div>
</div>
        </div>
         

        </section>
    )
}