
import {RiVisaLine,} from "react-icons/ri";
import {FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import {SiAmericanexpress,} from "react-icons/si";
import {AiOutlineInstagram, AiOutlineFacebook, AiFillYoutube, AiOutlineBehance} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";

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
               
            <li><Link to="/contact">Contact us</Link></li>
                </ul>
                </div>
                <div className="spcial">    
                Our social
                <div className="spcialIco">
                  <a className="iconSocialHref" href="https://www.instagram.com/essaywanted/" target="_blank"> <AiOutlineInstagram style={{color: '#d53c7c'}}/></a>
                   <a className="iconSocialHref" href='https://www.facebook.com/profile.php?id=100090737010565' target='_blank' ><AiOutlineFacebook style={{color: '#4064ac'}}/></a>
                  <a className="iconSocialHref" href="https://www.youtube.com/@essaywanted" target="_blank">  <AiFillYoutube style={{color: '#f70000'}}/></a>
                   <a className="iconSocialHref" href="https://www.pinterest.com/essaywanted/" target='_blank'> <BsPinterest style={{color: '#c51f26'}}/></a>
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