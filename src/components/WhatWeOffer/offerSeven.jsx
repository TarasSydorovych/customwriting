import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/Img27.jpg';



export default function OfferSeven() {




    return(
        <section id="tenBlockOffer">
            <div className='teblockwrap'>
                <div className='tenblockContainerOffer'>
               <h1>Need an expert, tutor, editor or proofreader for your<span>text/ essay/ dissertation chapter?</span></h1>
               <button><a href="/contact">
               Get help
                </a>
                <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
               </button>
                </div>
 <img
        src={iconSrc}
             
        className="svgPicImg"
        
    />
    </div>
        </section>
    )
}