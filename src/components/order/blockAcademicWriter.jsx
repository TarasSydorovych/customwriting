
import { useEffect,useState } from 'react';
import './order.css'



export default function BlockAcademicWriter({setAcademicWri}) {
const [focus, setFocus] = useState(false);
const academClick = () => {


}
useEffect(() => {
    setAcademicWri('Academic writing');
    
})



    return(

        <>
       
        <div className="blockAcademic" onClick={academClick}>

<h4 className='blockAcademicH4'>Academic writing</h4>
<p className='blockAcademicP'>E.g. essay, research paper, coursework in any subject</p>
        </div>
    
   
    </>
    )
}