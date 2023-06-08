import Header from '../header'
import Footer from '../mainPage/footer'
import './contact.css'
import ContactThre from './contactThre'
import ContactTwo from './contactTwo'
import Phone from './phone'

import { Pixel } from 'react-facebook-pixel';

export default function Contact() {




    return(

    <>
      
    <Header/>
    <Phone/>
    <ContactTwo/>
    <ContactThre/>
    <Footer/>
    </>
    )
}