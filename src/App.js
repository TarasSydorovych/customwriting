import Main from "./components/mainPage/main";

import { Routes, Route } from "react-router-dom";
import MainOffer from "./components/WhatWeOffer/mainOffer";
import Pracing from "./components/Pracing/Pracing";
import Contact from "./components/contact/contact";
import AuthProvider from "./auth";
import SignIn from "./components/signIn/signIn";
import MainUser from "./components/userMenu/mainUser";

import Chat from "./components/chat/chat";
import Order from "./components/order/order";
import Sample from "./components/sample/sample";
import OurValues from "./components/values/ourValues";
function App() {
  return (
   <>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/offer' element={<MainOffer/>}/>
    <Route path='/prices' element={<Pracing/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/cabinet' element={<MainUser/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/sample' element={<Sample/>}/>
    <Route path='/values' element={<OurValues/>}/>
    
   </Routes>
   </>
  );
}

export default App;
