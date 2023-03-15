import { useEffect, useState } from "react"
import BlockAcademicWriter from "./blockAcademicWriter";
import Button from "./button";
import CalendarNew from "./calendar";
import Detailed from "./Detailed";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import EducationLevel from "./educationLevel";
import './order.css'
import SevenBlock from "./sevenBlock";
import SixBlock from "./sixBlock";
import ThreBlock from "./ThreBlock";
import TypePaper from "./typePaper";
import * as React from 'react';
import { CreditCard, PaymentsForm } from 'react-square-web-payments-sdk';
import PayBlock from "./payBlock";
import {auth, db} from '../../firebase'
import { useNavigate } from "react-router-dom";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export default function CentralBlock() {
    const [authUser, setAuthUser] = useState(null);
    const [price, setPrise] = useState(2);
   
     const [academicWri, setAcademicWri] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [dekiveryDate, setDekiveryDate] = useState(``);
    const [typeOfPaper, setTypeOfPaper] = useState('Annotated bibliography');
    const [discipline, setDiscipline] = useState('Classic English Literature');
    const [pageCount, setPageCount] = useState(2);
    const [chartOrSlide, setChartOrSlide] = useState('');
    const [textArea, setTextArea] = useState('');
    const [paperFormat, setPaperFormat] = useState('');
    const [countReference, setCountReference] = useState(2);
    const [file, setFile] = useState(null);
    const [procent, setProcent] = useState(1);
    const [paperPreffer, setPaperPreffer] = useState('');
    const [step, setStep] = useState(0);
    const [timeDifference, setTimeDifference] = useState(0)
    const [datePrice, setDatePrice] = useState();
    const [typePaperValue, setTypePaperValue] = useState(1);
    const [adwPaper, setAdwPaper] = useState(1);
    const [adwVriter, setAdwWriter] = useState(false);
    const [printable, setPrintable] = useState(false);
    const [adwVriterText, setAdwWriterText] = useState('');
    const [printableText, setPrintableText] = useState('');
     const [lastSym, setLastSym] = useState(false);
     const [priceNull, setPriceNull] = useState(0);
     const [totalPrice,setTotalPrice] = useState(0);
     const [proceForOne, setProceForOne] = useState(0);
     const [sh1, setSh1] =useState(0);
     const [sh2, setSh2] =useState(0);
     const [checkPayment, setCheckPayment] = useState(false);
     const [orderId, setOrderId] = useState('');
     const storage = getStorage();
     const navigate = useNavigate();




   
    useEffect(() => {
        if(checkPayment === true){
           
        const addOrder = async (e) => {
            
        try{
            
            
            if(file !== null){
                
            const storageRef = ref(storage, file[0].name);
            const uploadTask = uploadBytesResumable(storageRef, file[0]);
            
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('progress',progress)
                 }, 
              (error) => {
                
              }, 
              ()  => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                const arr = []
                arr.push({downloadURL: downloadURL, fileName: file[0].name})
                const frankDocRef = doc(db, "order", orderId.payment.orderId);
               // const messagesCollectionRef = collection(db, `order/${orderId.payment.orderId}/order`);
               // const newMessageRef = await addDoc(messagesCollectionRef, {
                await setDoc(frankDocRef, {
              uid: orderId.payment.orderId,
              academicWri: academicWri,
              educationLevel: educationLevel,
              dekiveryDate: dekiveryDate,
              typeOfPaper: typeOfPaper,
              discipline: discipline,
              pageCount: pageCount,
              chartOrSlide: chartOrSlide,
              textArea: textArea,
              paperFormat: paperFormat,
              downloadURL: arr,
              downloadURLs:'',
              countReference: countReference,
              paperPreffer: paperPreffer,
              adwVriterText: adwVriterText,
              printableText: printableText,
              totalPrice: totalPrice,
              auth: auth.lastNotifiedUid,
              status: 'RECENT',
              orderStatus: 'Waiting for confirmation',
              fileName: file[0].name,

             })
            });
        }
        );
        }else{
            const frankDocRef = doc(db, "order", orderId.payment.orderId);
           //const messagesCollectionRef = collection(db, `order/${orderId.payment.orderId}/order`);
           //const newMessageRef = await addDoc(messagesCollectionRef, {
            await setDoc(frankDocRef, {
          uid: orderId.payment.orderId,
          academicWri: academicWri,
          educationLevel: educationLevel,
          dekiveryDate: dekiveryDate,
          typeOfPaper: typeOfPaper,
          discipline: discipline,
          pageCount: pageCount,
          chartOrSlide: chartOrSlide,
          textArea: textArea,
          paperFormat: paperFormat,
          countReference: countReference,
          paperPreffer: paperPreffer,
          adwVriterText: adwVriterText,
          printableText: printableText,
          totalPrice: totalPrice,
          auth: auth.lastNotifiedUid,
          status: 'RECENT',
         })
        }
          }catch (error) {
                  alert('The user with this login is not registered')
              }
            }
            addOrder();
            alert('Your order has been successfully paid')
            navigate("/cabinet");
            setCheckPayment(false);
        }

   
    }, [orderId, checkPayment])
     const firstRemote = () => {
        setAdwWriter(false);
        setSh1(0);
     }
     const secondRemote = () => {
        setPrintable(false);
        setSh2(0);
     }
     useEffect(() => {
        setProceForOne(datePrice * procent * typePaperValue * adwPaper);
        setPriceNull(datePrice * procent * typePaperValue  * adwPaper * pageCount);
        setTotalPrice(priceNull + sh1 + sh2)

     }, [datePrice, procent, typePaperValue,  adwPaper, adwVriter, printable, sh1, sh2, pageCount, priceNull, totalPrice])

     const buttonMinus = () => {
        if(pageCount > 1){
            setPageCount(prev => prev - 1)
        }
    }
    
    const buttonPlus = () => {
        setPageCount(prev => prev + 1)
    }
const changeState = () => {
    if(step <= 5){
    setStep(el => el+1);
    
}
}
const changeStateBack = () => {
    if(step > 0){
        setStep(el => el-1);
        
    }
}
const infoBlock = [{
    step: 1,
    title: 'What do you need help with?',
    desc: 'Choose the task you want to delegate'
}, 
{
    step: 2,
    title: 'Which year are you in?',
    desc: 'Choose what best describes your education level',
},
{
    step: 3,
    title: 'When is your paper due?',
    desc: 'Pick the date when you need your assignment ready',
}, 
{
    step: 4,
    title: 'Basic paper details',
    desc: 'Provide general requirements',
}, 
{
    step: 5,
    title: 'Detailed requirements',
    desc: 'Specify additional instructions',
}, 
{
    step: 6,
    title: 'What do you expect?',
    desc: 'Choose the paper level you prefer',
}, 
{
    step: 7,
    title: 'Upgrades',
    desc: 'Add more services to your order',
}, 
{
    step: 8,
    title: 'Upgrades',
    desc: 'Proceed to checkout',
}, 
]
const summaryFun = () => {
    setLastSym(true);
    setStep(el => el+1);
}




    return(

       
<div className="wraperBodyMenu">
            <div className="wrapBodyMenu">
            
                {lastSym && 
                
                    <div className="centralBlockOrderFinish">
                     <p className="centrelBlockLeftP">Symmary</p>
                <h2 className="centrelBlockLeftH2">Order details</h2>
                <div className="orderInformation">
                    <div className="orderInformationOne">{academicWri}</div>
                    <div className="orderInformationOne">{educationLevel}</div>
                    <div className="orderInformationOne">{typeOfPaper}</div>
                    <div className="orderInformationOne">{discipline}</div>
                    <div className="orderInformationOne">Delivery date:{dekiveryDate}</div>
                </div>
                <div className="orderInfoCount">
                <div className="orderInfoCountPage">
                    <p className="orderInfoCountPageP">{`${pageCount}pages × $${proceForOne.toFixed(2)}`} 
                    <AiOutlineMinus className="elementPlus" onClick={buttonMinus}/><AiOutlinePlus className="elementPlus" onClick={buttonPlus}/>
                    </p>
                    <p className="orderInfoCountPageP">{`$${priceNull.toFixed(2)}`} </p>
                    </div>
                    {adwVriter && 
                      <div className="orderInfoCountPage">
                      <p className="orderInfoCountPageP">Writer preferences
                      <div className="remove" onClick={firstRemote}>
                        Remove
                      </div>
                      </p>
                      <p className="orderInfoCountPageP">$14.25</p>
                      </div>
                    }
                    {printable && 
                      <div className="orderInfoCountPage">
                      <p className="orderInfoCountPageP">Printable sources
                      <div className="remove" onClick={secondRemote}>
                        Remove
                      </div>
                      </p>
                      <p className="orderInfoCountPageP">$14.95 </p>
                      </div>
                    }
                </div>
                <div className="orderInfoCountTwo">
                <div className="orderInfoCountPageNew">
                    <p className="orderInfoCountPagePNew"><AiOutlineCheck className="checkIconNew"/>Title page
                    </p>
                    <p className="orderInfoCountPagePNew">FREE</p>
                    </div>
                   
                      <div className="orderInfoCountPageNew">

                      <p className="orderInfoCountPagePNew"><AiOutlineCheck className="checkIconNew"/>Reference page
                     
                      </p>
                      <p className="orderInfoCountPagePNew">FREE</p>
                      </div>
                   
                   
                      <div className="orderInfoCountPageNew">
                      <p className="orderInfoCountPagePNew"><AiOutlineCheck className="checkIconNew"/>  Formatting
                     
                      </p>
                      <p className="orderInfoCountPagePNew">FREE</p>
                      </div>
                    
                </div>
                <div className="orderInfoCountLast">
                <div className="orderInfoCountPage">
                    <p className="orderInfoCountPageP">Total price
                    </p>
                    <p className="orderInfoCountPageP">{`$${totalPrice.toFixed(2)}`} </p>
                    </div>
                </div>
                    </div>
                }
                 {!lastSym && 
                 <div className="centralBlockOrder">
                <p className="centrelBlockLeftP">Step {infoBlock[step].step}/7</p>
                <h2 className="centrelBlockLeftH2">{infoBlock[step].title}</h2>
                </div>
                 }
            
            <div className="centralBlockOrderInfo">
                <h2>{infoBlock[step].desc}</h2>
                {step === 0 &&
                <>
                <BlockAcademicWriter setAcademicWri={setAcademicWri} />
                <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                {step === 1 &&
                <>
            <EducationLevel setEducationLevel={setEducationLevel} setProcent={setProcent} procent={procent} educationLevel={educationLevel}/>
            <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                {step === 2 &&
                <>
            <CalendarNew setTimeDifference={setTimeDifference}/>
            <ThreBlock timeDifference={timeDifference} setDatePrice={setDatePrice} setDekiveryDate={setDekiveryDate} datePrice={datePrice}/>
            <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                  {step === 3 &&
                <>
           <TypePaper setTypeOfPaper={setTypeOfPaper} setDiscipline={setDiscipline} setTypePaperValue={setTypePaperValue} setPageCount={setPageCount} pageCount={pageCount} setChartOrSlide={setChartOrSlide}/>
           <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                {step === 4 &&
                <>
           <Detailed setTextArea={setTextArea}  setPaperFormat={setPaperFormat} setCountReference={setCountReference} countReference={countReference} setFile={setFile}/>
           <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                   {step === 5 &&
                <>
           <SixBlock setAdwPaper={setAdwPaper} setPaperPreffer={setPaperPreffer}/>
           <button onClick={changeState} className="buttonOrderMenuNext">
                Next Step 
            </button>
            </>
                }
                {step === 6 &&
                <>
           <SevenBlock setAdwWriter={setAdwWriter} setPrintable={setPrintable} setSh1={setSh1} setSh2={setSh2} setAdwWriterText={setAdwWriterText} setPrintableText={setPrintableText}/>
           <button onClick={summaryFun} className="buttonOrderMenuNext">
                Summary          
                 </button>
            </>
                }
             {step === 7 && 
                <>
           <PayBlock totalPrice={totalPrice.toFixed(0)} setOrderId={setOrderId} setCheckPayment={setCheckPayment}/>
           
            </>
                }
             
            {step > 0 &&
<button onClick={changeStateBack} className="buttonOrderMenuBack">Back</button>
            }
            
            </div>
        </div>
        </div>
    )
}