import { useState } from 'react'
import UserBody from './userBody'
import './userMenu.css'
import {auth, db} from '../../firebase'
import { doc, setDoc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiFillFile } from "react-icons/ai";
import { async } from '@firebase/util';
import { arrayUnion } from "firebase/firestore";


export default function OrderSmallPageAdmin({order, statusOrder, setBigBlockProduct, bigBlockProduct, setStatusOrder}) {

    const [file, setFile] = useState();
    const [orderStat, setOrderStat] = useState('');
    const[product, setProduct] = useState([]);
    const storage = getStorage();
    const arrTypePaper = [
        'Waiting for confirmation',
'In progress',
'Finished',
'Canceled',
    ];
    const orderStatusFun = async (e) => {
        setOrderStat(e.target.value)
        console.log('Status order', e.target.value)
        if(e.target.value === 'In progress' || e.target.value === 'Waiting for confirmation'){
            await updateDoc(doc(db, "order", product.uid), {
                orderStatus: e.target.value,
                status: 'RECENT',
            });
            setStatusOrder('RECENT')
        }
        if(e.target.value === 'Finished'){
            console.log('Status order', e.target.value)
            await updateDoc(doc(db, "order", product.uid), {
                orderStatus: e.target.value,
                status: 'FINISHED',
            });
            setStatusOrder('FINISHED')
        }
        if(e.target.value === 'Canceled'){
            console.log('Status order', e.target.value)
            await updateDoc(doc(db, "order", product.uid), {
                orderStatus: e.target.value,
                status: 'CANCELED',
            });
            setStatusOrder('CANCELED')
        }
        window.location.reload();
    }
    const changeFile = async (e) => {

     const arr = [];
     arr.push(product.downloadURL);
    
       
        const storageRef = ref(storage, `${e.currentTarget.files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, e.currentTarget.files[0]);
        
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('progress',progress)
            setFile(snapshot.ref._location.path_)
             }, 
          (error) => {
            
          }, 
          ()  =>  {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL, name) => {
                arr.push(downloadURL)
                await updateDoc(doc(db, "order", product.uid), {
                    downloadURL: arrayUnion({downloadURL: downloadURL, fileName: uploadTask.snapshot.ref._location.path_})
                });
              });
        
    }
)
}
    const productClick = (e, el, index) => {
        setBigBlockProduct(true);
        setProduct(el)
        console.log(el);
    }




    return(
        <>
        {order.length > 0 &&
        <div className="wrapPageStatus">
            <h3 className='headOrder'>Your order</h3>
            
            <div className='orderSection'>
        {
            order.map((el, index) => {
                if(el.status === statusOrder){
         return             <div className='smallOrderBlock' key={index} onClick={(e) => productClick(e, el, index)}>
                <h3 className='h3CartSmOrder'>Academic writing</h3>
                <p className='standartText'>Order status: </p>
                <h4 className='h4CartSmOrder'>{el.orderStatus}</h4>
                <p className='standartText'>Discipline</p>
                <h4 className='h4CartSmOrder'>{el.discipline}</h4>
                <p className='standartText'>Delivery date</p>
                <h4 className='h4CartSmOrder'>{el.dekiveryDate}</h4>


            
         </div>
    }


            })
        }
        </div>
        {bigBlockProduct &&
        
           <div className='joinOrder'>
            <h3 className='h3CartSmOrder'>Academic writing</h3>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Order status</p>
                <h4 className='joinH4block'>{product.orderStatus}</h4>
                <select name="user_profile_color_1" className="calkSelectPaperFormat" onChange={orderStatusFun}>

{arrTypePaper.map((el,index)=>{
    return <option value={el}>{el}</option>
})}
</select>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Education level:</p>
                <h4 className='joinH4block'>{product.educationLevel}</h4>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Delivery date:</p>
                <h4 className='joinH4block'>{product.dekiveryDate}</h4>
            </div>
            <h3 className='h3CartSmOrder'>General requirements</h3>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Type of paper:</p>
                <h4 className='joinH4block'>{product.typeOfPaper}</h4>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Subject or discipline:</p>
                <h4 className='joinH4block'>{product.discipline}</h4>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Pages:</p>
                <h4 className='joinH4block'>{product.pageCount}</h4>
                <p className='joinPblock'>{product.chartOrSlide}</p>
            </div>
            {product.textArea !== '' && 
            <>
            <h3 className='h3CartSmOrder'>additional Instructions</h3>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Instructions:</p>             
            </div>
            <div className='instruction'>
                {product.textArea}
            </div>
            </>
            }
            {product.downloadURL && 
           <div className='fileWrap' >
           {product.downloadURL.map((el, index) => {
               return  <div class="fileBlock" key={index}>
               <a href={el.downloadURL} target='_blanck'><AiFillFile className='iconFileIcon'/></a>
               <p>{el.fileName}</p>
               </div>
               
                      
           })}
          </div>
        }
             <label class="label">
         <input type="file" onChange={changeFile}
         id="inputFilesId"
   accept=".doc,.docx,.xml,.jpeg,.png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
         <span>Select a file</span>
       </label>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Paper format</p>
                <h4 className='joinH4block'>{product.paperFormat}</h4>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>References to be used</p>
                <h4 className='joinH4block'>{product.countReference}</h4>
            </div>
            <div className='joinOrderTwBlock'>
                <p className='joinPblock'>Paper level</p>
                <h4 className='joinH4block'>{product.paperPreffer}</h4>
            </div>
            <h3 className='h3CartSmOrder'>Services </h3>
            <div className='joinOrderTwBlock'>
                {product.adwVriterText && 
                <h4 className='joinH4block'>Advanced writer  </h4>
                }
            {product.printableText && 
                <h4 className='joinH4block'>Printable sources</h4>
            }
            </div>
        </div>
        
        

        }
    
        </div>
        }
        {order.length === 0 &&
        <UserBody/>
        }
        </>
    )
}