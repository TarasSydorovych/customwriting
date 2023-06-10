
import './order.css'
import { useState } from 'react';


export default function EducationLevel({setProcent, setEducationLevel, educationLevel}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const arrAcademic = [
    'Senior in high school',
    'Undergraduate student  (years 1-2)',
    'Undergraduate student  (years 3-4)',
    'Graduate student',
    'PhD student',
]
const educationLevelFun = (index) => {
  const numValue = index;
   
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

    setSelectedItem(index);
}



    return(
      <ul className='educationLevelUl'>
        {arrAcademic.map((el,index)=>{
          const isSelected = selectedItem === index;
          const className = isSelected ? 'educationLevelLi selected' : 'educationLevelLi';

        return <li key={index}
        style={isSelected ? { backgroundColor: '#DCDEDF' } : null}
        className={className} onClick={() => educationLevelFun(index)}>{el}</li>
        
    })}
       

      </ul>
    )
}