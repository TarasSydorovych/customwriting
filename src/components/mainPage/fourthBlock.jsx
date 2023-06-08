import { useEffect, useState } from "react"
import {AiOutlineCheck, AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import one from '../../img/Image11.jpg'
import two from '../../img/Image12.jpg'
import thri from '../../img/Image13.jpg'
import four from '../../img/Image14.jpg'

export default function FourthBlock() {

const [num, setNum] = useState(0);
const picarr = [one, two, thri, four];
const objList = [{
    step: 1,
    title: 'No sleepless nights',
    desc: 'Order your task in the evening, go to bed, and check the written essay in the morning.'
},
{
    step: 2,
    title: 'No stress',
    desc: 'Stay in touch with the preferred writer, get the drafts and inform on the essential points or ideas.'
},
{
    step: 3,
    title: 'Find time for self',
    desc: 'Spend time with friends, family or practice yoga while our writer works for you.'
},
{
    step: 4,
    title: 'Make a progress',
    desc: 'Get “A” for your paper and order your next task.'
},
];
const clickPoint = (i) => {
    setNum(i);
}

const arrowLeft = () => {
    if(num === 0){
    }else{
        setNum(prev => prev - 1)
    }
}
const arrowRight = () => {
    if(num === 3){
    }else{
       
        setNum(prev => prev + 1)
    }
}

    return(
<section id="fourthBlock">
<div className="wrapFourthBlock">
    <h2>
    <span className="essaySpan">ESSAY WANTED &nbsp;</span> solves your problems
    </h2>
    <p>
    No stressful writing any more!
    </p>
<div className="fourthBlockInfo">
<div className="fourthBlockInfoImg">
<img 
     src={picarr[num]}
    ></img>
</div>
<div className="fourthBlockInfoList">
<div className="blockNumbers">
    
{objList.map((el, index) => {
    if(el.step <= (num + 1)){
        return <><div className="numCheckline"></div><div key={index} className="numCheck"><AiOutlineCheck/></div> </>
     
    }else{
        return  <><div className="numline"></div><div key={index} className="num">{el.step}</div></>
    }
})}
</div>
<div className="blockText">
    <div className="blockTextOne"></div>
    <div className="blockTextTwo">{objList[num].title}</div>
    <div className="blockTextThree">{objList[num].desc}</div>
    {objList[num].step === 4 && 

<button className="placeAnOrderButton">
<a href="/order">
Place an order
</a>
<span className="pulse-button__rings"></span>
<span className="pulse-button__rings"></span>
<span className="pulse-button__rings"></span>
</button>
}
</div>
<div className="blockArrow">
    <AiOutlineCaretLeft className="AiOutlineCaretLeft" onClick={arrowLeft}/>
    <div className="fullPoint">
    {objList.map((el, index) => {
        if(objList[num].step === (index + 1)){
            
            return <div key={index} className="pointShi" onClick={() => {clickPoint(index)}}></div>
        }else{
            return <div key={index} className="point" onClick={() => {clickPoint(index)}}></div>
    }
        
    })}
    </div>
    <AiOutlineCaretRight className="AiOutlineCaretRight" onClick={arrowRight}/>
</div>
</div>
</div>



</div>
</section>
    )
}