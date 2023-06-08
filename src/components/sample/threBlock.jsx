
import {AiOutlineCheck, AiOutlineLike} from "react-icons/ai";
import {BiBrain, BiTask, BiCodeBlock} from "react-icons/bi";




export default function ThreeBlock() {






    return(
        <section id="threBlockSamples">
        <div className="eighthBlockWrap">
            <h1>How do we work?</h1>
           
            <div className="eighthBlockWrapLIst">
                <div className="wrapSamplethre">
            <div className="checkIconSample">
    1
    </div>
<div className="wrapH2P">
    <h2>
    Check your task
    </h2>
  
    </div>
    </div>
    <div className="wrapSamplethre">
            <div className="checkIconSample">
    2
    </div>
<div className="wrapH2P">
    <h2>
    Find a writer
    </h2>
    
    </div>
    </div>
    <div className="wrapSamplethre">
            <div className="checkIconSample">
    3
    </div>
<div className="wrapH2P">
    <h2>
    Provide a paper
    </h2>
   
    </div>
    </div>
    
            </div>


            <div className="discipline">
<AiOutlineLike className="GoSmiley"/>
 <p>Hire an expert in your subject today!</p>
  <button><a href="/order">Order now</a>
 <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    </button>
        </div>
        </div>
    </section>
    )
}