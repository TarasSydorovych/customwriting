
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
            <div className='container'>
        <div className='wraper'>
            <div className='contact'>
<h1>Contact us</h1>
<p>Let us know if we can help with your paper or if you have any other questions regarding our services.</p>
            </div>
            <div className='info'>
<div className='sectionInfo'>
<div className='phone'>
    <BsFillPinMapFill  className='icon'/><h1>Our location</h1>
    <p>East 46th Street, New York City, NY </p>
    <img src={imgCard} style={{width: '450px', height: '350px'}}/>
    </div>
    <div className='phone'>
    <AiOutlinePhone className='icon'/><h1>Do not hesitate and contact us</h1>
    <p>Phone: +420607710989</p>
    <p>Email: essaywanted.agent@gmail.com</p>
    <p>Chat:  <button>
    <a href="chat">
    Live chat
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    </a>
   </button></p>
    </div>
   
</div>
<div className='sectionInfo'>
    <div className='phone'>
    <div className="spcialIcoContact">
    <a className="iconSocialHrefContact" href="https://www.instagram.com/essaywanted/" target="_blank"> <AiOutlineInstagram style={{color: '#d53c7c'}}/></a>
                   <a className="iconSocialHrefContact" href='https://www.facebook.com/profile.php?id=100090737010565' target='_blank' ><AiOutlineFacebook style={{color: '#4064ac'}}/></a>
                  <a className="iconSocialHrefContact" href="https://www.youtube.com/@essaywanted" target="_blank">  <AiFillYoutube style={{color: '#f70000'}}/></a>
                   <a className="iconSocialHrefContact" href="https://www.pinterest.com/essaywanted/" target='_blank'> <BsPinterest style={{color: '#c51f26'}}/></a>
                    </div>
    </div>
    <div className='phone'>
    
    </div>
</div>
            </div>
            </div>
        </div>


        </section>
    )
}