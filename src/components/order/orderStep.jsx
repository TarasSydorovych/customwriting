import { AiFillPlusCircle,AiFillEdit,AiFillFileText } from "react-icons/ai";
import {GiFinishLine} from "react-icons/gi";

import './order.css'





export default function OrderStep() {





    return(
        <>
        <div className="wraperHeadMenu">
            <div className="wrapListMenu">
               <div className="elementMenu">
<h4 className="h4ElementOrder">Placing an order</h4>
<AiFillPlusCircle className="iconElementOrder"/>
<p className="pElementOrder">Feb 28, 5:34 PM</p>
               </div>
               <div className="arrowOrderMenu"></div>
               <div className="elementMenu">
<h4 className="h4ElementOrder">Work in progress</h4>
<AiFillEdit className="iconElementOrder"/>
<p className="pElementOrder">Feb 28, 5:34 PM</p>
               </div>
               <div className="arrowOrderMenu"></div>
               <div className="elementMenu">
<h4 className="h4ElementOrder">Delivery date</h4>
<AiFillFileText className="iconElementOrder"/>
<p className="pElementOrder">Feb 28, 5:34 PM</p>
               </div>
               <div className="arrowOrderMenu"></div>
               <div className="elementMenu">
<h4 className="h4ElementOrder">Due date</h4>
<GiFinishLine className="iconElementOrder"/>
<p className="pElementOrder">Feb 28, 5:34 PM</p>
               </div>
               </div>
        </div>
        </>
    )
}