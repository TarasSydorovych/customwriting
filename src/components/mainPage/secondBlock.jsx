import { AiOutlineDollarCircle, AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function SecondBlock() {
const [pageCount, setPageCount] = useState(1);
const [procent, setProcent] = useState(1);
const [finalPrice, setPrice] = useState(0);
const [indexPage, setIndexPage] = useState(7)
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
    setPrice(price[indexPage].price * procent * pageCount)
}, [procent, pageCount, indexPage])

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
    'Essay (any type)',
    'Admission essay',
    'Analysis (any type)',
    'Annotated bibliography',
    'Argumentative essays',
    'Article review',
    'Assignment',
    'Blog post',
    'Book/movie review',
    'Business plan',
    'Capstone project',
    'Case study',
    'College essay',
    'Coursework',
    'Creative writing',
    'Critical thinking',
    'Discussion Essay',
    'Dissertation/Dissertation chapter',
    'Homework',
    'Journal article',
    'Lab Report',
    'Literature Analysis/Review',
    'Memo/Letter',
    'Outline',
    'Personal reflection',
    'Poem',
    'Presentation/PPT',
    'Project',
    'Question-Answer',
    'Reflection paper/Reflection essay',
    'Report (any type)/Brief report',
    'Research paper',
    'Research proposal',
    'Response essay',
    'Speech',
    'Summary',
    'Term paper',
    'Thesis/Thesis chapter',
    'Other',
];
const arrAcademic = [
    'High School',
    'Undergraduate (yrs. 1-2)',
    'Undergraduate (yrs. 3-4)',
    'Graduate',
    'PhD',
]
console.log(dayjs().hour());
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
    <div className="customSelect">
<span>Type of paper</span>
<select name="user_profile_color_1" className="calkSelect">

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
<span>Words:</span>
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
    <li>{el.time}h</li>
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
    <li>{CurrentTime.getHours() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 72) &&
    <li>{CurrentTime.getHours() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 120) &&
    <li>{CurrentTime.getHours() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 168) &&
    <li>{CurrentTime.getHours() } {month1[CurrentTime.getMonth()]}</li>
}
{(el.time === 336) &&
    <li>{CurrentTime.getHours() } {month1[CurrentTime.getMonth()]}</li>
}
 
    </ul>
     </div>
})}


</div>
<div className="calkthreBlock">
<div className="threBlockOne">
We'll send you the first draft for approval 
</div>
<div className="threBlockTwo">
Total price: <span>${Math.round(finalPrice)}</span>
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
        {features === true && <li className="colorLi" onClick={aboutFeatures}>
        Features
            </li> }
            {features !== true && <li className="greyLi" onClick={aboutFeatures}>
            Features
            </li> }
            {format === true && <li className="colorLi" onClick={FormatFun}>
            Format
            </li> }
            {format !== true && <li className="greyLi" onClick={FormatFun}>
            Format
            </li> }
                   </ul>
    </div>
    <div className="bibliography">
    {features === true &&
        <ul>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE bibliography page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE title page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>FREE formatting </li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>24x7 support</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Part-by-part payment</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>PowerPoint slides</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Review your writer’s samples</li>
        </ul>
}
{format === true &&
        <ul>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Approx. 275 words / page</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Font: 12 point Arial/Times New Roman</li>
            <li><AiOutlineCheck className="AiOutlineCheck"/>Double and single spacing</li>
          
        </ul>
}
    </div>
</div>
</div>
        </div>
        </section>
    )
}