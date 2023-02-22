
import iconSrc from '../../img/121.svg';
import {HandySvg} from 'handy-svg';

export default function OfferOne() {





    return(
        <div >
     <section id="offerfirstblock">
            <div className='teblockwrap'>
                <div className='OfferOneBlock'>
               <h1>What we offer</h1>
              <p>We provide help of every kind, from completing an essay to solving math problems and writing code.</p>
                </div>
 <HandySvg
        src={iconSrc}
        width="400"
        height="400"
        
    />
    </div>
        </section>

       </div>
    )
}