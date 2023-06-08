import { useEffect, useState } from "react";






export default function ThreBlock({timeDifference, setDatePrice, datePrice, setDekiveryDate}) {
        const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const d = new Date();
        let hour = d.getHours();
        let day = d.getDate();
        let month = d.getMonth();
        let minutes = d.getMinutes();
        const [todayFour, setTodayFour] = useState(false);
        const [todayEight, setTodayEight] = useState(false);
        const [today24, setToday24] = useState(false);
        const [today24After, setToday24After] = useState(false);
        const priceTime = (id, e) => {
                if(id === 4){
                        setDekiveryDate(`${month1[month]} ${day}, ${hour+4}:${minutes}`)
                        setDatePrice(39); 
                }else if(id === 8){
                        setDekiveryDate(`${month1[month]} ${day}, ${hour+8}:${minutes}`)
                        setDatePrice(34);  
                }else if(id === 24){
                        setDekiveryDate(`${month1[month]} ${day+1}, ${hour}:${minutes}`)
                        setDatePrice(27);  
                }else if(id === 48){
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(24);  
                }else if(id >= 72 && id < 120){
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(20);  
                }else if(id >= 120 && id < 168){
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(18);  
                }else if(id >= 168 && id < 336){
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(16);  
                }else if(id === 336){
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(10);  
                }else{ 
                        setDekiveryDate(`${month1[month]} ${day+timeDifference}, ${hour}:${minutes}`)
                        setDatePrice(10);    
                }
                for(let i = 0; i < document.getElementsByClassName('blockLikeAcademic').length; i++){
                        document.getElementsByClassName('blockLikeAcademic')[i].style.background = 'white';
                }
                e.currentTarget.style.background = '#DCDEDF';
              
        }
        useEffect(() => {
                if (timeDifference === 0){
                        setToday24(false);
                        setToday24After(false)
                        setToday24(false)
                        if((hour+4) < 24){
                                setTodayFour(true);
                        }
                        if((hour+8) < 24){
                                setTodayEight(true);
                        }
                }
                if (timeDifference === 1){
                        setToday24(false);
                        setToday24After(false)
                        setTodayFour(false);
                        if((hour+8) < 24){
                                setTodayEight(true);
                        }
                                setToday24(true)
                }else if(timeDifference >= 2 ){
                        setTodayEight(false);
                        setToday24(false)
                        setToday24After(true)

                }
                console.log(document.getElementsByClassName('blockLikeAcademic'));

        }, [timeDifference,todayFour,todayEight,today24])
       

    return(
        <>
        {todayFour &&
        <div className="blockLikeAcademic" onClick={(e) => priceTime(4, e)}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Super Fast</h4>
        <p className='blockLikeAcademicP'>{month1[month]} {day}, {hour+4}:{minutes}</p>
        </div>
        <div className="onDueDate">
            <p>4-hour delivery</p>
        </div>
                </div>
                }
                {todayEight &&
                <div className="blockLikeAcademic" onClick={(e) => priceTime(8,e)}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Urgent</h4>
        <p className='blockLikeAcademicP'>{month1[month]} {day}, {hour+8}:{minutes}</p>
        </div>
        <div className="onDueDate">
        <p>8-hour delivery</p>
        </div>
                </div>
                }
                {today24 &&
                <div className="blockLikeAcademic" onClick={(e) => priceTime(24, e)}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Close to deadline</h4>
        <p className='blockLikeAcademicP'>{month1[month]} {day + 1}, {hour}:{minutes}</p>
        </div>
        <div className="onDueDate">
        <p>On due date</p>
        </div>
                </div>
                }
                {today24After &&
                <>
                <div className="blockLikeAcademic" onClick={(e) => priceTime(24, e)}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Recommended</h4>
        <p className='blockLikeAcademicP'>{month1[month]} {day + 1}, {hour}:{minutes}</p>
        </div>
        <div className="onDueDate">
        <p>24-hour delivery</p>
        </div>
                </div>
                 <div className="blockLikeAcademic" onClick={(e) => priceTime(24 * timeDifference, e)}>
                 <div className="recomendedDate">
                         <h4 className='blockLikeAcademicH4'>Close to deadline</h4>
                         <p className='blockLikeAcademicP'>{month1[month]} {day + timeDifference}, {hour}:{minutes}</p>
                         </div>
                         <div className="onDueDate">
                         <p>On due date</p>
                         </div>
                                 </div>
                                 </>
                }
                </>
        )
}