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
The prices are transparent and influenced by:
<ul>
    <li><SlGraduation className="tableIcon"/>Academic level</li>
    <li><AiOutlineFile className="tableIcon"/>Number of pages</li>
    <li><AiOutlineFieldTime className="tableIcon"/>Urgency</li>
    <li><TfiWrite className="tableIcon"/>Type of paper</li>
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
            What you get
            </li> }                   
        </ul>
    </div>
    
    <div className="bibliographyPrice">
        {about === true &&
        <ul>
            <li><AiFillFileText className="AiOutlineCheckPrice"/><div className="listWrap">Top quality</div></li>
            <li><BsClockHistory className="AiOutlineCheckPrice"/><div className="listWrap">Followed deadlines</div></li>
            <li><BsFillJournalBookmarkFill className="AiOutlineCheckPrice"/><div className="listWrap">Free revision (3 days)</div></li>
            <li><RiMoneyDollarCircleLine className="AiOutlineCheckPrice"/><div className="listWrap">Money-back (24 hours)</div></li>
            <li><TbKey className="AiOutlineCheckPrice"/><div className="listWrap">Confidentiality</div></li>
    
        </ul>
        }
        
    </div>
</div>
</div>
        </div>
        </section>
    )
}