import Header from "../header";
import Footer from "../mainPage/footer";
import FirstBlock from "./firstBlock";
import SecondBlockSample from "./secondBlock";
import ThreeBlock from "./threBlock";
import SecondBlock from '../mainPage/secondBlock'
import { useNavigate } from "react-router-dom";
export default function Sample() {

    


    return(
<>
    <Header/>
<FirstBlock/>
<SecondBlockSample/>
<ThreeBlock/>
<SecondBlock/>
<Footer/>
    </>
    ) 
}