
import {AiOutlineCheck, AiOutlineLike} from "react-icons/ai";
import {BiBrain, BiTask, BiCodeBlock} from "react-icons/bi";




export default function ThreeBlock() {






    return(
        <section id="threBlockSamples">
        <div className="eighthBlockWrap">
            <h1>The perks you get when you choose us</h1>
           
            <div className="eighthBlockWrapLIst">
                <div className="wrapSamplethre">
            <div className="checkIconSample">
    <BiBrain/>
    </div>
<div className="wrapH2P">
    <h2>
    Expert writers
    </h2>
    <p>All our experts pass multiple tests before being hired. They can professionally help you with more than 80 disciplines, from English 101 to biology.</p>
    </div>
    </div>
    <div className="wrapSamplethre">
            <div className="checkIconSample">
    <BiTask/>
    </div>
<div className="wrapH2P">
    <h2>
    100% original papers
    </h2>
    <p>We complete all our papers from scratch, following your instructions. Our experts only give you well-written and correctly formatted essays.</p>
    </div>
    </div>
    <div className="wrapSamplethre">
            <div className="checkIconSample">
    <BiCodeBlock/>
    </div>
<div className="wrapH2P">
    <h2>
    Safety and confidentiality
    </h2>
    <p>We regularly check and update our encryption to make our website safe. Your confidentiality is our priority, so we never disclose your private data.</p>
    </div>
    </div>
    
            </div>


            <div className="discipline">
<AiOutlineLike className="GoSmiley"/>
 <p>Hire an expert in your subject today!</p>
 <a href="/"> <button>Order now
 <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    </button></a>
        </div>
        </div>
    </section>
    )
}