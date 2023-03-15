import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/1234.svg';


export default function PriceBlockTwo() {





    return(
        <section id="tenBlockOffer">
        <div className='teblockwrap'>
            <div className='tenblockContainerOffer'>
           <h1>First time here and want to pay less <span>for your paper?</span></h1>
           <p>Get a free page and save up to 33% on your first order</p>
           <button>
            <a href="/order">
            Get offer
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