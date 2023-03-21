import {AiOutlineRight, AiOutlineLeft, AiFillStar} from "react-icons/ai";
import { useState } from "react";



export default function NineBlock() {
    const contSamplePlus = () => {
        if (contSample <= 9){
            setContSample(prev => prev + 1)
        }
        }
        const contSampleMinus = () => {
            if (contSample > 3){
                setContSample(prev => prev - 1)
            }
        }
    const [contSample, setContSample] = useState(3);
const vidguk = [
    {
        vid: 'Perfect book review, I mean wow.'
    },
    {
        vid: 'Great writer, really helpful and always on time. I have already finished the entire Business Administration course and my Capstone project with them with no troubles.'
    },
    {
        vid: 'Thank you so much, you help me to fix the paper times and times, thank you for you all hard works, extended revisions and responsiveness .'
    },
    {
        vid: 'Excellent work! Your contribution in my academic achievement is precious'
    },
    {
        vid: 'Exceptional work.  My success with Psy 201 course is only thanks to you. God bless you all for your hard work.'
    },
    {
        vid: 'Thank you, great work done!! All five argumentative essays I got from you were magnificent. I am happy that my friend has once recommended you to me and I definitely advise this service to others.'
    },
    {
        vid: 'Don’t get me wrong, but I was mostly skeptical about customs writing services and prefer to study myself. Still, it happened that my professor has unexpectedly shortened a deadline and I had to hand in my project much earlier. What a mess. I had plenty of ideas and even a plan, but literally no time to make it all up. Essay-wanted have become my saviours. Thanks a million to them.'
    },
    {
        vid: 'Splendid words, perfect structure and unique ideas. Your economic article analysis was the best my professor has ever read. And you know what, you are not only a great help for students, but also an inspiration for learners'
    },
    {
        vid: 'Dissertation writing can be difficult, but not with essay-wanted. Your editing and proofreading options are a real finding for those, who writes the paper late at night. Besides, the revision option is sooo helpful to understand the professor’s remarks.'
    },
    {
        vid: "This is my feedback. I am not a native English speaker. I work as a taxi driver and study MPTM. I really work hard. Sometimes, I haven't enough time. I was afraid to get a paper with too sophisticated words and be disqualified. But no. They use clear ideas, simple phrases. I am grateful to you guys, thank you."
    },
]

    return(

        <section id="nineBlock">
            <div className="nineBlockWrap">
        <h1>What people say about our essay service</h1>
        <p className="nineBlockWrapP">Our research showed that more than 10,000 students who’ve asked us, “write an essay for me,” have also recommended our service to a friend.</p>
        <div className="eighthBlockWrapLIst">
            <div className="vidgukArrow">
<AiOutlineLeft onClick={contSampleMinus}/>
            </div>


            {vidguk.map((el,index) => {
                if(index >= (contSample - 3) && index < contSample){
return <div className="vidgukBlock" key={index}>
 <div className="blockuserinfo">
<div className="blockUserIconVID">
IC
</div>
<p className="blocknik">
<div className="iconStars"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
</p>

</div>
<div className="blockuserinfo1">
<p className="positive">Positive:</p>
</div>
<div className="paragrafvidguk">
{el.vid}
</div>
</div>
}})}
   
<div className="vidgukArrow">
                <AiOutlineRight onClick={contSamplePlus}/>
            </div>
        </div>
        <div className="fiveBlockBodyPoint">
           
           </div>
    </div>
        </section>
    )
} 