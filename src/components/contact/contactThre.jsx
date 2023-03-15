import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/1123.svg';




export default function ContactThre() {




    return(

        <section id="tenBlockOffer">
        <div className='teblockwrap'>
            <div className='tenblockContainerOffer'>
           <h1>Need your complex paper done ASAP? Get it done in no time<span>with our help!</span></h1>
           <button>
            <a href="/order">
            Order now
            </a>
            <span className="pulse-button__rings"></span>
<span className="pulse-button__rings"></span>
<span className="pulse-button__rings"></span>
           </button>
            </div>
<HandySvg
    src={iconSrc}
    width="400"
    height="400"
    
/>
</div>
    </section>
    )
}