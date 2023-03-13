
import './order.css'



export default function EducationLevel({setProcent, setEducationLevel, educationLevel}) {

  const arrAcademic = [
    'Senior in high school',
    'Undergraduate student  (years 1-2)',
    'Undergraduate student  (years 3-4)',
    'Graduate student',
    'PhD student',
]
const educationLevelFun = (id) => {
  const numValue = id;
   
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

    setEducationLevel(document.getElementsByTagName('li')[id+3].innerText);
    for(let i = 3; i < document.getElementsByTagName('li').length; i++){
              if(i === (id + 3)){
                document.getElementsByTagName('li')[id+3].style.background = '#f9fcff';
              }else{
                document.getElementsByTagName('li')[i].style.background = 'white';
              }
    }
   
    
}



    return(
      <ul className='educationLevelUl'>
        {arrAcademic.map((el,index)=>{

        return <li key={index} className='educationLevelLi' onClick={() => educationLevelFun(index)}>{el}</li>
        
    })}
       

      </ul>
    )
}