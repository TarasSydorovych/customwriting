import { useState } from "react";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai";
import one from '../../sample/PSY 201 General Psychology - University of Mississippi.pdf';
import two from '../../sample/Fin 300 Arizona State University Financial Discussion 3.1.pdf';
import three from '../../sample/econ-shu misc ECONOMICS OF GLOBAL BUSINESS - New York University.pdf';
import four from '../../sample/BIO 101 BSCI105 - University of Maryland.pdf';
import five from '../../sample/BIO 2870 Anatomy and Physiology - Wayne State University.pdf';
import six from '../../sample/SOC 3300 Sociology - University of Houston.pdf';
import seven from '../../sample/BUS18 BUSINESS LAW - De Anza College.pdf';
import eight from '../../sample/NUR 6512Grand Canyon University.pdf';
import nine from '../../sample/NUR PC 705Frontier Nursing University.pdf';
import ten from '../../sample/NURS 6630NChamberlain College of Nursing.pdf';
import eleven from '../../sample/EDUC 8542 - Walden University.pdf';
import { useNavigate, Link } from "react-router-dom";
const objListSampl = [{
    CourseDetails: 'PSY 201 University of Mississipi',
    paperTitle:'Research demonstrates that people look more like their spouses?',
    type: 'Questions-Answers',
    style: 'APA',
    href: one,
},
{
    CourseDetails: 'FIN 300 Arizona State University',
    paperTitle:'Financial Discussion 3.1',
    type: 'Discussion Post',
    style: 'APA',
    href: two,
},
{
    CourseDetails: 'ECON-SHU MISC ECONOMICS OF GLOBAL BUSINESS - New York University',
    paperTitle:'Pay for Performance and Compensation Issues',
    type: 'Discussion Post',
    style: 'APA',
    href: three,
},
{
    CourseDetails: 'BIO 101 - University of Maryland',
    paperTitle:'Flow of Blood',
    type: 'Discussion Post',
    style: 'APA',
    href: four,
},
{
    CourseDetails: 'BIO 2870 Anatomy and Physiology - Wayne State University',
    paperTitle:'Labor Pain',
    type: 'PDF POSTER',
    style: 'APA',
    href: five,
},
{
    CourseDetails: 'SOC 3300 Sociology - University of Houston',
    paperTitle:'Cultural and Social theories',
    type: 'Essay',
    style: 'MLA',
    href: six,
},
{
    CourseDetails: 'BUS18 BUSINESS LAW - De Anza College',
    paperTitle:'Basic legal terminology',
    type: 'Essay',
    style: 'Harvard',
    href: seven,
},
{
    CourseDetails: 'NUR 6512 – Grand Canyon University',
    paperTitle:'Psychiatric-mental health nursing practice',
    type: 'Reflection Master',
    style: 'APA',
    href: eight,
},
{
    CourseDetails: 'NUR PC 705 – Frontier Nursing University',
    paperTitle:'Pathophysiology',
    type: 'Questions-Answers',
    style: 'APA',
    href: nine,
},
{
    CourseDetails: 'NURS 6630N – Chamberlain College of Nursing',
    paperTitle:'Telemedicine',
    type: 'Reflection',
    style: 'APA',
    href: ten,
},
{
    CourseDetails: 'EDUC 8542 - Walden University',
    paperTitle:'Teacher Leadership',
    type: 'PPT Presentation',
    style: 'APA',
    href: eleven,
}];


export default function FiveBlock() {
    const navigate = useNavigate();
    const [contSample, setContSample] = useState(4);
const contSamplePlus = () => {
if (contSample <= 11){
    setContSample(prev => prev + 1)
}
}
const contSampleMinus = () => {
    if (contSample > 4){
        setContSample(prev => prev - 1)
    }
}

    return(
          <section id="fiveBlock">
           <div className="fiveBlock">
           <div className="fiveBlockHeader">
           <h2>Check out our samples</h2>
           <button >
            <a href="/sample">
            View all samples</a>
           </button>
           </div>
           <div className="fiveBlockTwo">
            <p>The examples of assignments we can complete will tell you more about the quality our experts provide. Before you ask us, “help me write my essay,” take a look at the samples we’ve composed to make sure we do an extraordinary job.</p>
           </div>
           <div className="fiveBlockBody">
            <AiOutlineLeft className="AiOutlineLeft" onClick={contSampleMinus}/>
            {objListSampl.map((el, index) => {

    if(index >= (contSample - 4) && index < contSample){
    return   <div className="samplesList" key={index}>
                    
    <h1>{el.CourseDetails}</h1>
    <div className="paperTitleDiv">
    <p className="paperTitleP">Paper title</p>
    <h2 className="paperTitleH2">{el.paperTitle}</h2>
    </div>
    
<div className="samplesListEnd">
    <div className="paperType">
    <p>Paper type</p>
    <h2>{el.type}</h2>
    </div>
    <div className="paperFormat">
    <p>Paper Format</p>
    <h2>{el.style}</h2>
    </div>

</div>
<a className="viewSampleA" href={el.href} target="_blank"> View this sample</a>
</div>

}
            })}
      
            <AiOutlineRight className="AiOutlineLeft" onClick={contSamplePlus}/>
           </div>
           <div className="fiveBlockBodyPoint">
            
           </div>
           </div>
          </section>
    )
}