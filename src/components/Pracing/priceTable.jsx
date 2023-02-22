import { AiOutlineRocket, AiOutlineAudit,AiOutlineFile,AiOutlineFieldTime,AiFillFileText } from "react-icons/ai";
import { SlGraduation} from "react-icons/sl";
import { TfiWrite} from "react-icons/tfi";
import { BsClockHistory, BsFillJournalBookmarkFill, BsHandThumbsUp, BsPen} from "react-icons/bs";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {TbKey} from "react-icons/tb";
import {SlPuzzle} from "react-icons/sl";
import {BiMessageSquareDetail} from "react-icons/bi";
import {FaPencilRuler} from "react-icons/fa";


import './pracing.css'
import Table from "./table";
import { useState } from "react";

export default function PriceTable() {
const [about, setAbout] = useState(true);
const [writers, setWriters] = useState(false);
const [more, setMore] = useState(false);

const aboutFun = () => {
    
    setAbout(true);
    setWriters(false)
    setMore(false)
}
const writersFun = () => {
    setAbout(false);
    setWriters(true)
    setMore(false)
}
const moreFun = () => {
    setAbout(false);
                setWriters(false)
                setMore(true)
}


    return(

        <section id="secondBlocPrice"> 
        <div className="secondBlockWrapPrice">
<div className="secodFirstPrice">



<h1>Prices</h1>



</div>
<div className="secondTwoPrice">
The price is based on these factors:
<ul>
    <li><SlGraduation className="tableIcon"/>Academic level</li>
    <li><AiOutlineFile className="tableIcon"/>Number of pages</li>
    <li><AiOutlineFieldTime className="tableIcon"/>Urgency</li>
    <li><TfiWrite className="tableIcon"/>Type of paper needed</li>
</ul>

</div>
<div className="secondThreePrice"> 
<div className="calkWrapperPrice">
<Table/>

</div>
<div className="futureFormatWrapPrice">
    <div className="futurePrice">
        <ul>
            {about === true && <li className="liColor" onClick={aboutFun}>
            About us
            </li> }
            {about !== true && <li className="liGrey" onClick={aboutFun}>
            About us
            </li> }
            {writers === true && <li className="liColor" onClick={writersFun}>
            Our writers
            </li> }
            {writers !== true && <li className="liGrey" onClick={writersFun}>
            Our writers
            </li> }
            {more === true && <li className="liColor" onClick={moreFun}>
            More
            </li> }
            {more !== true && <li className="liGrey" onClick={moreFun}>
            More
            </li> }
         
        </ul>
    </div>
    
    <div className="bibliographyPrice">
        {about === true &&
        <ul>
            <li><AiFillFileText className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Top-quality papers</h1> <p>We scored 8.5 out of 10 according to customer feedback.</p></div></li>
            <li><BsClockHistory className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Precise deadlines</h1> <p>98.41% of our orders have been delivered on time.</p></div></li>
            <li><BsFillJournalBookmarkFill className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Writers in any discipline</h1> <p>We always have active specialists in 80+ disciplines.</p></div></li>
            <li><RiMoneyDollarCircleLine className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Money-back option</h1> <p>You can get a refund if something is wrong with your paper.</p></div></li>
            <li><TbKey className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Confidentiality and security</h1> <p>We meet high-security standards using the latest safety tools.</p></div></li>
    
        </ul>
        }
         {writers === true &&
        <ul>
            <li><BsHandThumbsUp className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Advanced writing skills</h1> <p>Our specialists have been working with academic papers for years.</p></div></li>
            <li><BsPen className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Narrow specialization</h1> <p>Each of our writers is a pro in 1-2 specific disciplines.</p></div></li>
            <li><SlPuzzle className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Knowledge in complex subjects</h1> <p>We have experts in STEM, finance, law, economics, and more subjects that can be tough.</p></div></li>
            <li><AiOutlineRocket className="AiOutlineCheckPrice"/><div className="listWrap"><h1>High performance</h1> <p>We regularly rank and upgrade the proficiency of our specialists</p></div></li>
    
        </ul>
        }
          {more === true &&
        <ul>
            <li><BiMessageSquareDetail className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Testimonials</h1> <p>Discover what customers are saying about our service</p></div></li>
            <li><AiOutlineAudit className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Essay samples</h1> <p>Make sure our papers are as good as we claim</p></div></li>
            <li><FaPencilRuler className="AiOutlineCheckPrice"/><div className="listWrap"><h1>Free essay tools</h1> <p>Here is more help to make your academic paper extraordinary:</p></div></li>

    
        </ul>
        }
    </div>
</div>
</div>
        </div>
        </section>
    )
}