import { AiOutlineDollarCircle, AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import picToFea from '../../img/img5.png'
import { useNavigate } from "react-router-dom";
export default function SecondBlock() {
    const navigate = useNavigate();
const [pageCount, setPageCount] = useState(1);
const [procent, setProcent] = useState(1);
const [finalPrice, setPrice] = useState(0);
const [indexPage, setIndexPage] = useState(7)
const [typePap, setTypePap] = useState(1);
const d = new Date();
let hour = d.getHours();
let minutes = d.getMinutes();
let day = d.getDay();
let month = d.getMonth();
const a = dayjs();
const [features, setFeatures] = useState(true);
const [format, setFormat] = useState(false);
const aboutFeatures = () => {
    setFeatures(true);
    setFormat(false);
}
const FormatFun = () => {
    setFeatures(false);
    setFormat(true)
    
}

useEffect(() => {
    document.getElementsByClassName('secondBlockPrice')[indexPage].style.backgroundColor = '#03a9f4';
    setPrice(price[indexPage].price * procent * pageCount * typePap)
}, [procent, pageCount, indexPage,typePap])

const buttonMinus = () => {
    if(pageCount > 1){
        setPageCount(prev => prev - 1)
    }
}

const buttonPlus = () => {
        setPageCount(prev => prev + 1)
}
const selectCheckValue = (e) => {
const numValue = +e.target.value
   
    if(numValue === 0){
        setProcent(1);
    }else if(numValue === 1){
        setProcent(1.102);
    }else if(numValue === 2){
        setProcent(1.186);
    }else if(numValue === 3){
        setProcent(1.196);
    }else if(numValue === 4){
        setProcent(1.196);
    }
}
const checkFunc = (index, e) => {
    const listBack = document.getElementsByClassName('secondBlockPrice');
    for(let i = 0; i<listBack.length; i++){
        listBack[i].style.backgroundColor = 'white';
    }
    document.getElementsByClassName('secondBlockPrice')[index].style.backgroundColor = '#03a9f4';
    setIndexPage(index)
}


const price = [
    {
   price: 39,
   time: 4,
},
{
    price: 34,
    time: 8,
 },
 {
    price: 27,
    time: 24,
 },
 {
    price: 24,
    time: 48,
 },
 {
    price: 20,
    time: 72,
 },
 {
    price: 18,
    time: 120,
 },
 {
    price: 16,
    time: 168,
 },
 {
    price: 10,
    time: 336,
 },
]

const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const arrTypePaper = [
    'Annotated bibliography',
    'Article review',
    'Blog',
    'Book/movie review',
    'Business plan',
    'Capstone project',
    'Cover letter',
    'Course work',
    'Creative writing',
    'CV',
    'Discussion post',
    'Dissertation',
    'Editing',
    'Essay (any type)',
    'Lab report',
    'Literature review',
    'Outline',
    "PPT with speaker's notes",
    "PPT without speaker's notes",
    'PDF poster',
    'Question-answer',
    'Reflection paper',
    'Research paper',
    'Research proposal',
    'Response paper',
    'Rewriting',
    'Speech',
    'Term paper',
    'Thesis',
    
];
const arrAcademic = [
    'High School',
    'Undergraduate (yrs. 1-2)',
    'Undergraduate (yrs. 3-4)',
    'Graduate',
    'PhD',
]

const selectCheckType = (e) => {
    const numValue = +e.target.value
   
    if(numValue === 18){
        setTypePap(0.5);
    }else if(numValue === 19){
        setTypePap(3);
    }else if(numValue === 12){
        setTypePap(0.3333333333333333);
    }else if(numValue === 25){
        setTypePap(0.5);
    }else {
        setTypePap(1);
    }
}
const arr = [];
for(let i = 0; i< price.length; i++){
   arr.push(dayjs().add(price[i].time, 'hour').$M) 
}
    return(
        <section id="secondBloc"> 
        <div className="secondBlockWrap">
<div className="secodFirst">
<div className="bubleGroup">
<div className="buble">

</div>

<h1>Our prices are flexible and transparent</h1>
</div>



</div>
<div className="secondTwo">
The longer the deadline – the cheaper the paper
</div>
<div className="secondThree"> 
<div className="calkWrapper">
<div className="clakfirstBblock">
    <div className="customSelect">
<span>Type of paper</span>
<select name="user_profile_color_1" className="calkSelect" onChange={selectCheckType}>

    {arrTypePaper.map((el,index)=>{
        return <option value={index}>{el}</option>
    })}
</select>
</div>
<div className="customSelect">
<span>Academic level</span>
<select name="academic" className="calkSelect" onChange={selectCheckValue}>

    {arrAcademic.map((el,index)=>{
        return <option value={index}>{el}</option>
    })}
</select>
</div>
<div className="customSelectInput">
    <label>Pages</label>
<input type="text" className="calkInput" id="page" value={pageCount} onChange={(e) => setPageCount(e.target.value)}  name="page"></input>
<span></span>
<div className="buttonPlus">
    
    <button onClick={buttonMinus} className="minus">-</button>
    <button onClick={buttonPlus} className="plus">+</button>
</div>
</div>

</div>
<div className="clakSecondBlock">
{price.map((el, index) => {
      let CurrentTime = new Date();
      CurrentTime.setHours(CurrentTime.getHours() + el.time);
    return <div onClick={(e) => checkFunc(index, e)} key={index} className="secondBlockPrice">
    <ul>
    <li>${Math.round(el.price * procent)}</li>
    <li>page</li>
    <li>{el.time <= 24 &&
    <>
        {el.time}h
        </>
        }
        {el.time > 24 &&
    <>
        {el.time/24}d
        </>
        }
        
        
        </li>
    <li>deadline</li>
{((el.time === 4) && ((hour+4) < 24) ) &&
    <li>today at {`${hour + el.time}`}</li>
}
{((el.time === 4) && ((hour+4) >= 24) ) &&
    <li>tomorrow at {`${hour + el.time-24}`}</li>
}
{((el.time === 8) && ((hour+8) < 24) ) &&
    <li>today at {`${hour + el.time}`}</li>
}
{((el.time === 8) && ((hour+8) > 24) ) &&
    <li>tomorrow at {`${(hour + el.time)-24}`}</li>
}
{((el.time === 24) && ((hour+8) < 24) ) &&
    <li>today at {`${hour + el.time}`}</li>
}
{((el.time === 24) && ((hour+8) > 24) ) &&
    <li>tomorrow at {`${(hour + el.time)-24}`}</li>
}
{(el.time === 48) &&
    <li>{CurrentTime.getDate() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 72) &&
    <li>{CurrentTime.getDate() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 120) &&
    <li>{CurrentTime.getDate() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 168) &&
    <li>{CurrentTime.getDate() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 336) &&
    <li>{CurrentTime.getDate() } {month1[CurrentTime.getMonth()]}</li>
}
 
    </ul>
     </div>
})}


</div>
<div className="calkthreBlock">
<div className="threBlockOne">
Inform us through chat/ messages if you need a draft for approval 
</div>

<button onClick={() => navigate("/order")}>
Order now
<span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
</button>
<div className="threBlockTwo">
Total price: <span>${Math.round(finalPrice)}</span>
</div>
</div>
</div>
<div className="futureFormatWrap">
    <div className="future">
        <ul>
        {features === true && <li className="colorLi" onClick={aboutFeatures}>
            <img src={picToFea} className="AiOutlineCheckimg"/>
        What you get
            </li> }
            {features !== true && <li className="greyLi" onClick={aboutFeatures}>
            What you get
            </li> }
          
                   </ul>
    </div>
    <div className="bibliography">
    {features === true &&
        <ul>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE Title page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE Reference page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>24/7 support</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>300 words per page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>12 point Arial/Times New Roman</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Free revisions for 3 days after the deadline</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Money-back guarantee</li>
        </ul>
}
{format === true &&
        <ul>
            <li><img src={picToFea} className="AiOutlineCheckimg"/>Approx. 275 words / page</li>
            <li><img src={picToFea} className="AiOutlineCheckimg"/>Font: 12 point Arial/Times New Roman</li>
            <li><img src={picToFea} className="AiOutlineCheckimg"/>Double and single spacing</li>
          
        </ul>
}
    </div>
</div>
</div>
        </div>
        </section>
    )
}