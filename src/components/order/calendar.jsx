
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './order.css'

export default function CalendarNew({setTimeDifference}) {
  
  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  


    const [value, onChange] = useState(new Date());
    const d = new Date();
    let hour = d.getHours();
    const [difference, setDifference] = useState();
    
  useEffect(() => {
    setDifference(dateDiffInDays(d, value)) 
   setTimeDifference(difference)
   
  })

 console.log('ourValue', difference);
  return (
    <div className='calendarStyle'>
         <Calendar onChange={onChange} value={value} />
    </div>
  );
}

