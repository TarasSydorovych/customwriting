
import './contact.css'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { BsFillChatRightDotsFill, BsFillPinMapFill } from "react-icons/bs";


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
    <AiOutlinePhone className='icon'/><h1>Phone</h1>
    <p>US, CA +420607710989</p>
    <p>Phone working hours: Monday 00:00 AM - Saturday 08:00 PM (UTC).</p>
    <p>Toll-free for US & Canada (1-855…) only. International callers are charged for outgoing calls.</p>
    </div>
    <div className='phone'>
    <BsFillPinMapFill  className='icon'/><h1>Our location</h1>
    <p>Company address</p>
    </div>
</div>
<div className='sectionInfo'>
    <div className='phone'>
    <BsFillChatRightDotsFill className='icon'/><h1>Chat</h1>
   <button>
    Live chat
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
   </button>
    <p>We will be happy to talk to you either through live chat, Facebook Messenger, or WhatsApp from Monday 00:00 AM to Saturday 08:00 PM (UTC).</p>
    </div>
    <div className='phone'>
    <AiOutlineMail className='icon' /><h1>Email</h1>
    <p>Essaywanted.agent@gmail.com</p>
    </div>
</div>
            </div>
            </div>
        </div>


        </section>
    )
}