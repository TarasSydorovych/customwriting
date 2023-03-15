import { useEffect, useState } from "react"
import {AiOutlineCheck, AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import one from '../../img/1.jpg'
import two from '../../img/2.jpg'
import thri from '../../img/3.jpg'
import four from '../../img/4.jpg'

export default function FourthBlock() {

const [num, setNum] = useState(0);
const picarr = [one, two, thri, four];
const objList = [{
    step: 1,
    title: 'We find the best writer',
    desc: 'Right after you ask us, “write my essays for me,” a WOW-support assistant checks your instructions and assigns your order to a super-proficient academic expert'
},
{
    step: 2,
    title: 'Your writer creates the draft',
    desc: 'A super-writer composes your paper from scratch according to your requirements and gives it to an experienced editor for proofreading'
},
{
    step: 3,
    title: 'We check your paper for plagiarism',
    desc: 'The writer polishes your paper and checks its originality with plagiarism-detection software'
},
{
    step: 4,
    title: 'We send your essay for approve',
    desc: 'We deliver a PDF version of your order for approval and wait for you to tell us whether it’s exactly what you expected'
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
    “Write my essay” service: How it works
    </h2>
    <p>
    See how we process your order when you use our custom essay writing service.
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
    <div className="blockTextOne">Step: {objList[num].step}</div>
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