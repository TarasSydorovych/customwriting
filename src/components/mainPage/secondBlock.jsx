import { AiOutlineDollarCircle, AiOutlineCheck } from "react-icons/ai";



export default function SecondBlock() {


    return(
        <section id="secondBloc"> 
        <div className="secondBlockWrap">
<div className="secodFirst">
<div className="bubleGroup">
<div className="buble">

</div>

<h1>See how much your essay will cost</h1>
</div>


<div className="blockPriceCheap">
<AiOutlineDollarCircle className="AiOutlineDollarCircle"/>
<p>We use flexible pricing to make your paper cheap</p>
</div>
</div>
<div className="secondTwo">
Find your type of paper, add pages, and select an academic level.<br/>
Choose the longer deadline to make our essay writing services cheaper.<br/>
We can’t believe we’ve just told you that!
</div>
<div className="secondThree"> 
<div className="calkWrapper">
<div className="clakfirstBblock">
<input type="text" className="calkInput" id="type" name="type"></input>
<input type="text" className="calkInput" id="lavel" name="lavel"></input>
<input type="text" className="calkInput" id="page" name="page"></input>

</div>
<div className="clakSecondBlock">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<div className="calkthreBlock">
<div className="threBlockOne">
We'll send you the first draft for approval by <br/>
<span>February 15, 2023 at 5:35 PM</span>
</div>
<div className="threBlockTwo">
Total price: <span>$43</span>
</div>
<button>
Order paper
<span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
</button>
</div>
</div>
<div className="futureFormatWrap">
    <div className="future">
        <ul>
            <li>
            Features
            </li>
            <li>
            Format
            </li>   
        </ul>
    </div>
    <div className="bibliography">
        <ul>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE bibliography page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE title page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE formatting </li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>24x7 support</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Part-by-part payment</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>PowerPoint slides</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Review your writer’s samples</li>
        </ul>
    </div>
</div>
</div>
        </div>
        </section>
    )
}