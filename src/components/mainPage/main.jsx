import Header from "./header";

import FirstPage from "./firstBlock";
import SecondBlock from "./secondBlock";
import ThirdBlock from "./thirdBlock";
import FourthBlock from "./fourthBlock";
import FiveBlock from "./fiveBlock";



export default function Main() {

    return (
        <div style={{position: 'relative',}}>
        <Header/>
        <FirstPage/>
        <SecondBlock/>
        <ThirdBlock/>
        <FourthBlock/>
        <FiveBlock/>
        </div>
    )
}