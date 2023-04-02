import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/Img21.jpg';



export default function TenBlock() {




    return(
        <section id="tenBlock">
            <div className='teblockwrap'>
                <div className='tenblockContainer'>
               <h1>Stuck with your troublesome<span>paper?</span></h1>
             
               <button><a href="/order">
               Get help</a>
                <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
               </button>
                </div>
 <img
        src={iconSrc}
             
        className="svgPic"
        
    />
    </div>
        </section>
    )
}