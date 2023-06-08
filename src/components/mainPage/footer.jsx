
import {RiVisaLine,} from "react-icons/ri";
import {FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import {SiAmericanexpress,} from "react-icons/si";
import {AiOutlineInstagram, AiOutlineFacebook, AiFillYoutube, AiOutlineBehance} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import oof from '../../img/PublicOffer.pdf'
import logoBlack from '../../img/logoWhite.png'
import { Link} from "react-router-dom";
export default function Footer() {




    return(

        <section id="footer">
              <p className="spanDev">development: <a className="spanDevA" href="https://webui-studio.com/" target='_blanc'>WebUi</a></p>
            <div className="footer">
                <div className="logoFooter">
                <div className="logoImgBlock">
       <Link to="/">    <img src={logoBlack} className='logoImg'></img></Link>
      
        </div>
      
                </div>
                <div className="spcial">    
              
                <div className="spcialIco">
                  <a className="iconSocialHref" href="https://www.instagram.com/essaywanted/" target="_blank"> <AiOutlineInstagram style={{color: '#d53c7c'}}/></a>
                   <a className="iconSocialHref" href='https://www.facebook.com/profile.php?id=100090737010565' target='_blank' ><AiOutlineFacebook style={{color: '#4064ac'}}/></a>
                  <a className="iconSocialHref" href="https://www.youtube.com/@essaywanted" target="_blank">  <AiFillYoutube style={{color: '#f70000'}}/></a>
                   <a className="iconSocialHref" href="https://www.pinterest.com/essaywanted/" target='_blank'> <BsPinterest style={{color: '#c51f26'}}/></a>
                    </div>
                </div>
                <div className="payment">
                <button className="newChatButton">
    <a href="chat" className="newChatButtonLink">
    Live chat
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    </a>
   </button>
                </div>
            </div>
            <div className="privatePolWrap">
                <p className="allRight">Copyright © 2023<br/>All rights reserved</p>
                <p className="termsAnd"><a className="termsAnd" href={oof} target="_blank">Terms of service & privacy policy<br/>Public offer</a></p>
                <p className="phoneAndMail">essaywanted.agent@gmail.com<br/><span className="phoneAndMailSpan">+17165033320</span><br/>
                </p>
            </div>
           
        </section>
    )
}