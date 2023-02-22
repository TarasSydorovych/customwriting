
import {RiVisaLine,} from "react-icons/ri";
import {FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import {SiAmericanexpress,} from "react-icons/si";
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineBehance} from "react-icons/ai";

export default function Footer() {




    return(

        <footer>
            <div className="footer">
                <div className="logoFooter">
                <h1>Essay-Wanted<span>.com</span></h1>
                <ul>
                <li><a href="/">What we offer</a></li>
            <li><a href="/">Our prices</a></li>
            <li><a href="/">Sample papers</a></li>
            <li><a href="/">Our values</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact us</a></li>
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
        </footer>
    )
}