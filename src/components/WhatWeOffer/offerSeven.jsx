import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/120.svg';



export default function OfferSeven() {




    return(
        <section id="tenBlockOffer">
            <div className='teblockwrap'>
                <div className='tenblockContainerOffer'>
               <h1> Need an expert to help you write a<span>compelling text?</span></h1>
               <button><a href="/contact">
                Contact us
                </a>
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