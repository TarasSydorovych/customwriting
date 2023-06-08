import HeaderUser from "../userMenu/headerUser";
import OrderStep from "./orderStep";
import './order.css'
import CentralBlock from "./centralBlock";
import { Pixel } from 'react-facebook-pixel';


export default function Order() {





    return(
        <>
       
        <HeaderUser/>
        <OrderStep/>
        <CentralBlock/>
        
        </>
    )
}