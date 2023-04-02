import {AiOutlineCheck} from "react-icons/ai";
import img18 from '../../img/img18.png'
import img19 from '../../img/Img19.png'
import img20 from '../../img/Img20.png'


export default function EighthBlock() {




    return(
<section id="eighthBlock">
    <div className="eighthBlockWrap">
        <h1>Confidentiality</h1>
        <p className="eighthBlockWrapP">We respect your privacy and understand your confidentiality concerns. We NEVER share your personal data with any third parties. With us, you get:</p>
        <div className="eighthBlockWrapLIst">
        <div className="checkIcon">
<img src={img18}/>
</div>
<p>Only the unique plagiarism-free texts that are never reused</p>

<div className="checkIcon">
<img src={img19}/>
</div>

<p>Payments with trusted reliable systems</p>

<div className="checkIcon">
<img src={img20}/>
</div>

<p>Released payment to the writer only after your confirmation </p>

        </div>
    </div>
</section>
    )
}