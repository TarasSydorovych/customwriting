import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/Img28.jpg';


export default function PriceBlockTwo() {





    return(
        <section id="tenBlockOffer">
        <div className='teblockwrap'>
            <div className='tenblockContainerOffer'>
           <h1>Ordering with us for the first time have doubts?<br/><span>Ask for a draft for your paper in chat</span></h1>
          
           <button>
            <a href="/order">
            Order now
            </a>
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