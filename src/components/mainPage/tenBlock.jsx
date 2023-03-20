import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/120.svg';



export default function TenBlock() {




    return(
        <section id="tenBlock">
            <div className='teblockwrap'>
                <div className='tenblockContainer'>
               <h1> Get your troublesome papers finished by our <span>competent writers</span></h1>
               <button><a href="/order">
                Order now</a>
                <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
               </button>
                </div>
 <HandySvg
        src={iconSrc}
             
        className="svgPic"
        
    />
    </div>
        </section>
    )
}