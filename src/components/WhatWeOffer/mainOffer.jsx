import Header from "../header";
import Footer from "../mainPage/footer";
import OfferFive from "./offerFive";
import OfferFour from "./offerFour";
import OfferOne from "./offerOne";
import OfferSeven from "./offerSeven";
import OfferSix from "./offerSix";
import OfferThree from "./offerThree";
import OfferTwo from "./offetTwo";


import { Pixel } from 'react-facebook-pixel';

export default function MainOffer() {





    return(
        <div >
            
       <Header/>
       <OfferOne/>
       <OfferTwo/>
       <OfferThree/>
       <OfferFour/>
       <OfferFive/>
       <OfferSix/>
       <OfferSeven/>
       <Footer/>

       </div>
    )
}