import {TbZoomInArea } from "react-icons/tb";
import {BsFillPeopleFill } from "react-icons/bs";
import {GiPencilBrush } from "react-icons/gi";
import {AiFillFile } from "react-icons/ai";





export default function OfferThree() {





    return(
        <section id="sevenBlock">
<div className="secondBlockWrap">
<div className="secodFirst">
<div className="bubleGroupOfferThree">
<h1>Academic <span> writing help</span></h1>
</div>



</div>
<div className="sixBlogPOfferThree">
Assisting students is a major part of our work
</div>
<div className="sevenBlockInfoOffer">


<BsFillPeopleFill className="TbWritingOffer"/>
<div>
    <h2>Formatting</h2>
    <p>We will cite sources and create reference lists in any citation style you request (APA, MLA, Chicago/Turabian, etc.).</p>
</div>
<TbZoomInArea className="TbWritingOffer"/>
<div>
    <h2>Research</h2>
    <p>Our writers help customers find information from reliable sources that they can use in their own writing.</p>
</div>
</div>
<div className="sevenBlockInfoOffer">

<AiFillFile className="TbWritingOffer"/>
<div>
    <h2>Formatting</h2>
    <p>We will cite sources and create reference lists in any citation style you request (APA, MLA, Chicago/Turabian, etc.).</p>
</div>
<GiPencilBrush className="TbWritingOffer"/>
<div>
    <h2>Editing</h2>
    <p>Our team can polish your papers by improving their structure, correcting typos, etc.</p>
</div>

</div>

        </div>
        

</section>
    )
}