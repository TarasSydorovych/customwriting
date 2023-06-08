import { useState, useEffect } from "react";
import HeaderUser from "./headerUser";
import StatusOrder from "./statusOrder";
import UserBody from "./userBody";
import { Pixel } from 'react-facebook-pixel';
import {
    query,
   doc,
   getDocs,
    orderBy,
    onSnapshot,
    limit,
    where,
    updateDoc,
  } from "firebase/firestore";
  import { addDoc, collection, serverTimestamp } from "firebase/firestore";
  import { auth, db,app, listAllUsers } from '../../firebase';
import OrderSmallPage from "./orderSmallPage";
import OrderSmallPageAdmin from "./orderSmallPageAdmin";


export default function MainUser() {

 const [statusOrder, setStatusOrder] = useState('NEW')
 const [order, setOrder] = useState([]);
 const [orderUser, setOrderUser] = useState([]);
 const [bigBlockProduct, setBigBlockProduct] = useState(false);
 useEffect(() => {
 
    const butonUserSearch = async () => {
      
      const citiesRef = collection(db, "order");
    
   
    const q = query(citiesRef, where("auth", "==", `${auth.lastNotifiedUid}`));
    const querySnapshot = await getDocs(q);
    let messages = [];
    const rece = [];
    const finish = [];
    const cancel = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
      setOrder(messages);
    });
    
    };
   
    butonUserSearch();
    setTimeout(() => {
      butonUserSearch();
    },1000)
   
   
  
 
  },[statusOrder]);
  useEffect(() => {
 
    const butonUserSearch = async () => {
      
      const citiesRef = collection(db, "order");
    
   
    const q = query(citiesRef, where("auth", "!=", ';sa'));
    const querySnapshot = await getDocs(q);
    let messages = [];
    const rece = [];
    const finish = [];
    const cancel = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
      setOrderUser(messages);
      
    });
    
    };
   
    butonUserSearch();
   
    setTimeout(() => {
      butonUserSearch();
     
    },1000)
  },[statusOrder]);



    return(
        <>
       
        <HeaderUser/>

        <StatusOrder statusOrder={statusOrder} setStatusOrder={setStatusOrder} setBigBlockProduct={setBigBlockProduct}/>
        {auth.lastNotifiedUid !== 'UplbllesPdOk4VfPQejOXT4Nsm43' &&
        
        <OrderSmallPage order={order} statusOrder={statusOrder} setBigBlockProduct={setBigBlockProduct} bigBlockProduct={bigBlockProduct}/>
      
      }
    {auth.lastNotifiedUid === 'UplbllesPdOk4VfPQejOXT4Nsm43' &&

        
        <OrderSmallPageAdmin setStatusOrder={setStatusOrder} order={orderUser} statusOrder={statusOrder} setBigBlockProduct={setBigBlockProduct} bigBlockProduct={bigBlockProduct}/>
      
      }
        
        
        </>
    )
}