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
        vid: 'Perfect book review, I mean wow.',
        name: 'Susan L.'
    },
    {
        vid: 'Great writer, really helpful and always on time. I have already finished the entire Business Administration course and my Capstone project with them with no troubles.',
        name: 'Ahmed A.'
    },
    {
        vid: 'Thank you so much, you help me to fix the paper times and times, thank you for you all hard works, extended revisions and responsiveness .',
        name: 'Sourabh K.'
    },
    {
        vid: 'Excellent work! Your contribution in my academic achievement is precious',
        name: 'Vijay K.'
    },
    {
        vid: 'Exceptional work.  My success with Psy 201 course is only thanks to you. God bless you all for your hard work.',
        name: 'Jake S.'
    },
    {
        vid: 'Thank you, great work done!! All five argumentative essays I got from you were magnificent. I am happy that my friend has once recommended you to me and I definitely advise this service to others.',
        name: 'Helen L.'
    },
    {
        vid: 'Don’t get me wrong, but I was mostly skeptical about customs writing services and prefer to study myself. Still, it happened that my professor has unexpectedly shortened a deadline and I had to hand in my project much earlier. What a mess. I had plenty of ideas and even a plan, but literally no time to make it all up. Essay-wanted have become my saviours. Thanks a million to them.',
        name: 'Mathew T.'
    },
    {
        vid: 'Splendid words, perfect structure and unique ideas. Your economic article analysis was the best my professor has ever read. And you know what, you are not only a great help for students, but also an inspiration for learners',
        name: 'John H.'
    },
    {
        vid: 'Dissertation writing can be difficult, but not with essay-wanted. Your editing and proofreading options are a real finding for those, who writes the paper late at night. Besides, the revision option is sooo helpful to understand the professor’s remarks.',
        name: 'Oliver K.'
    },
    {
        vid: "This is my feedback. I am not a native English speaker. I work as a taxi driver and study MPTM. I really work hard. Sometimes, I haven't enough time. I was afraid to get a paper with too sophisticated words and be disqualified. But no. They use clear ideas, simple phrases. I am grateful to you guys, thank you.",
        name: 'Irene F.'
    },
]

    return(

        <section id="nineBlock">
            <div className="nineBlockWrap">
        <h1>See What Clients Say about Us</h1>
        <p className="nineBlockWrapP">The students, who requested to “write an essay”, “write a project”, “write a capstone project”, “write a poem,” “write a nursing discussion”, ”respond to a post”, “create professional presentation”, “write a speech” or other services left the following feedbacks:</p>
        <div className="eighthBlockWrapLIst">
            <div className="vidgukArrow">
<AiOutlineLeft onClick={contSampleMinus}/>
            </div>


            {vidguk.map((el,index) => {
                if(index >= (contSample - 3) && index < contSample){
return <div className="vidgukBlock" key={index}>
 <div className="blockuserinfo">
<div className="blockUserIconVID">
{el.name}
</div>
<p className="blocknik">
<div className="iconStars"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
</p>

</div>
<div className="blockuserinfo1">

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