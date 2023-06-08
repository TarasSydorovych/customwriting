import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/Img 29.jpg';




export default function ContactThre() {




    return(

        <section id="tenBlockOffer">
        <div className='teblockwrap'>
            <div className='tenblockContainerOffer'>
           <h1>Stressed out? Our writers are available&nbsp;<span>24/7</span></h1>
           <button>
            <a href="/order">
            Get help
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