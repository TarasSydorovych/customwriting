import HeaderUser from "../userMenu/headerUser";
import OrderStep from "./orderStep";
import './order.css'
import CentralBlock from "./centralBlock";
import { Pixel } from 'react-facebook-pixel';
import Header from "../header";


export default function Order() {





    return(
        <>
       
        <Header/>
        <OrderStep/>
        <CentralBlock/>
        
        </>
    )
}