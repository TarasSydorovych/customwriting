
import {RiVisaLine,} from "react-icons/ri";
import {FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import {SiAmericanexpress,} from "react-icons/si";
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineBehance} from "react-icons/ai";
import logoBlack from '../../img/logoWhite.png'
import { Link} from "react-router-dom";
export default function Footer() {




    return(

        <section id="footer">
            <div className="footer">
                <div className="logoFooter">
                <div className="logoImgBlock">
       <Link to="/">    <img src={logoBlack} className='logoImg'></img></Link>
        </div>
                <ul>
                <li><Link to="/offer">What we offer</Link></li>
            <li><Link to="/prices">Our prices</Link></li>
            <li><Link to="/sample">Sample papers</Link></li>
            <li><Link to="/values">Our values</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
                </ul>
                </div>
                <div className="spcial">
                Our social
                <div className="spcialIco">
                    <AiOutlineInstagram/>
                    <AiOutlineFacebook/>
                    <AiOutlineTwitter/>
                    <AiOutlineBehance/>
                    </div>
                </div>
                <div className="payment">
                We accept
                    <div className="paymentIco">
                    <RiVisaLine/>
                    <FaCcMastercard/>
                    <FaCcDiscover/>
                    </div>
                </div>
            </div>
        </section>
    )
}