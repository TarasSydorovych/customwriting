
import './contact.css'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { BsFillChatRightDotsFill, BsFillPinMapFill } from "react-icons/bs";
import imgCard from '../../img/img22.png'
import {AiOutlineInstagram, AiOutlineFacebook, AiFillYoutube, AiOutlineBehance} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";

export default function Phone() {



    return(
        <section id="phone">
           <div className='phoneWrap'>
            <h1 className='h1Contact'>Contact Us</h1>
            <div className="spcialIcoContactTwo">
    <a className="iconSocialHrefContact" href="https://www.instagram.com/essaywanted/" target="_blank"> <AiOutlineInstagram style={{color: '#d53c7c'}}/></a>
                   <a className="iconSocialHrefContact" href='https://www.facebook.com/profile.php?id=100090737010565' target='_blank' ><AiOutlineFacebook style={{color: '#4064ac'}}/></a>
                  <a className="iconSocialHrefContact" href="https://www.youtube.com/@essaywanted" target="_blank">  <AiFillYoutube style={{color: '#f70000'}}/></a>
                   <a className="iconSocialHrefContact" href="https://www.pinterest.com/essaywanted/" target='_blank'> <BsPinterest style={{color: '#c51f26'}}/></a>
                    </div>
                    <div className='wrapPhoneAndMail'>
                    <p className='em'>essaywanted.agent@gmail.com</p>
                        <p className='ph'>+17165033320</p>
                        
                    </div>
                    <div className='constactButWrapOr'>
                    <button className="newChatButton"><a className="newChatButtonLink" href="/order">
            Place an order</a>
            <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
         </button>
                    <button className="newChatButtonRight">
    <a href="chat" className="newChatButtonLink">
    Live chat
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    </a>
   </button>
  
                    </div>
    </div>
           
        </section>
    )
}