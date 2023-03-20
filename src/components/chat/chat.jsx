import './chat.css'
import { auth, db,app, listAllUsers } from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useState,useRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiFillFile } from "react-icons/ai";
import { Container, Grid, Input, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Header from '../header'
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
import { useEffect } from 'react';
import { async } from '@firebase/util';
import Loading from './loading';
import HeaderUser from '../userMenu/headerUser';


export default function Chat () {
  const storage = getStorage();
    const [message, setMessage] = useState("");
    const [messagesNew, setMessagesNew] = useState([]);
    const [authUser, setAuthUser] = useState(null);
     const [isAdmin, setIsAdmin] = useState(false)
    const [user] = useAuthState(auth)
   const [checkUser, setCheckUser] = useState('')
   const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState('')
   const [countMessage, setCountMessage] = useState({});
   const scroll = useRef()
   const [mesCheck, setMesCheck] = useState([]);
   const [usersListS, setUsersListS] = useState([]);
    const recipientId =  '0A9ZbhLVGJTjz6ObKVSFCuUxleW2';
    const sendMessageNew = async (event) => {
      event.preventDefault();
     
      if (message.trim() === "") {
        alert("Enter valid message");
        return;
      }
      const {uid} = auth.currentUser;
      // Відправка повідомлень адмін
    if(uid === recipientId){
      if(checkUser === ''){
        alert('Select a user')
      }else{
        const chatId = `${checkUser}_${recipientId}`;
        // чи є файл для відравки адмін
  if(file){
    
       
        const storageRef = ref(storage, event.target[1].files[0].name);
        const uploadTask = uploadBytesResumable(storageRef, event.target[1].files[0]);
        
      uploadTask.on('state_changed', 
  (snapshot) => {
    setLoading(true);
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
   ()  => {
    setLoading(false);
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
     
      const messagesCollectionRef = collection(db, `messages/${chatId}/messages`);
      const newMessageRef = await addDoc(messagesCollectionRef, {
        uid,
        recipientId,
        message,
        createdAt: new Date().toISOString(),
        check: 'true',
        downloadURL,
      });
    });
  }
);


  //нема файлу для відправки відправка пустого повідомлення
}else{
try{
  const messagesCollectionRef = collection(db, `messages/${chatId}/messages`);
    const newMessageRef = await addDoc(messagesCollectionRef, {
      uid,
      recipientId,
      message,
      createdAt: new Date().toISOString(),
      check: 'true',
      downloadURL: '',
    });
}catch (error) {
  alert('Помилка додавання повідомлення без файлу Адмін:', error);
}
}
      }
      // відправка повідомлень не адміном
    }else{
      if(file){
try{
  const storageRef = ref(storage, event.target[1].files[0].name);
  const uploadTask = uploadBytesResumable(storageRef, event.target[1].files[0]);
  const chatId = `${uid}_${recipientId}`;
  uploadTask.on('state_changed', 
(snapshot) => {
  setLoading(true);
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
}, 
(error) => {
// Handle unsuccessful uploads
}, 
()  => {
  setLoading(false);
getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  const messagesCollectionRef = collection(db, `messages/${chatId}/messages`);
  const newMessageRef = await addDoc(messagesCollectionRef, {
    uid,
    recipientId,
    message,
    createdAt: new Date().toISOString(),
    check: 'false',
    downloadURL,
  });
});
}
);

}catch (error) {
  alert('Помилка додавання повідомлення з файлом Юзер:', error);
}

      }else{

try{
  const chatId = `${uid}_${recipientId}`;

  const messagesCollectionRef = collection(db, `messages/${chatId}/messages`);
  const newMessageRef = await addDoc(messagesCollectionRef, {
    uid,
    recipientId,
    message,
    createdAt: new Date().toISOString(),
    check: 'false',
    downloadURL: '',
  });
}catch (error) {
  alert('Помилка додавання повідомлення без файлу Юзер:', error);
}


      }

    }
    setMessage("");
    document.getElementById('inputFilesId').value = '';
   
    setFile('');
    setMsg('')
    scroll.current.scrollIntoView({ behavior: 'smooth'},);
    }


  

      useEffect(() => {
 
  
// Провірка адміна
        if (auth.currentUser) {
          if(auth.currentUser.uid === recipientId){
          setIsAdmin(true);
    

          }else{

            // Запит на повідомлення з бази
            const { uid, email, photoURL } = auth.currentUser;
          
            const chatId = `${uid}_${recipientId}`;
            const q = query(
              collection(db, `messages/${chatId}/messages`),
              orderBy("createdAt"),
              limit(50)
            );
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
              
              let messages = [];
              QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
              });
              setMessagesNew(messages);
              
            });
           
          }
        } else {
          setAuthUser(null);
        }
      }, [auth.currentUser]);
    
      // Отримання користувачів
  useEffect(() => {
    const butonUserSearch = async () => {

      const citiesRef = collection(db, "users");
    
   
    const q = query(citiesRef, where("displayName", "!=", "Fuck"));
    const querySnapshot = await getDocs(q);
    let messages = [];
    querySnapshot.forEach((doc) => {

      
      messages.push({ ...doc.data(), id: doc.id });
      setUsersListS(messages)
      
    });
    
    }
    // Перевірка прочитаних повідомлень
    butonUserSearch();
    
   
    
 
  },[]);
  useEffect(() => {
    const checkMessage = async () => {
      if(isAdmin){
    const userOne = [];
     const userArray = [];
    const ads =  usersListS.map((el) => {
       userArray.push(`${el.uid}_${recipientId}`);
       userOne.push(el.uid);
     })
     
      let countMess = {};
     for(let i = 0; i < userArray.length; i++){
      const citiesRef = collection(db, `messages/${userArray[i]}/messages`);
      let messages = [];
      const q = query(citiesRef, where("check", "==", "false"));
      const querySnapshot = await getDocs(q);
      
      
      querySnapshot.forEach((doc) => {
       
        messages.push({ ...doc.data(), id: doc.id });
        setMesCheck(messages)
       
      });
    countMess['g'+userOne[i]] = messages;

     }     
   

 setCountMessage(countMess)
  }
 }
 checkMessage();
 
      
 
  }, [messagesNew, checkUser, usersListS])



  // Зміна кімнати з повідомленнями
const changeChatRoom = async (id) => {

  setCheckUser(id)
  const chatId = `${id}_${recipientId}`;

  for(let i = 0; i<mesCheck.length; i++){
    if(id === mesCheck[i].uid){
      const washingtonRef = doc(db, `messages/${chatId}/messages/${mesCheck[i].id}`);
      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        check: 'true'
      });
    }
  }
  
  const q = query(
    collection(db, `messages/${chatId}/messages`),
    orderBy("createdAt"),
    limit(50)
  );
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let messages = [];
    QuerySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
    setMessagesNew(messages);
    
  });
  
}

    return(
      <>
   <HeaderUser/>
<div className='wrapper'>
  <div className='wrapchat'>
  <div className='listAdmin'>
   {isAdmin &&
    usersListS.map((el, index)=>{
       let id = 'g'+el.uid;
       
       if(!Object.keys(countMessage).length){
        
       }else{
       
       
         return <div className='userListWithName'>
         <div onClick={() => {changeChatRoom(el.uid)}} key={index} className='avatar'>{el.displayName}

  <div className='counerMessage'>{countMessage[id].length}</div>

         
         </div>
         <h3 className='mailUser'>{el.email}</h3>
         </div>
         }
    })
    
   }
   {!isAdmin &&
   
         <div className='userListWithName'>
         <div className='avatar'>Admin

 

         
         </div>
         <h3 className='mailUser'>Essaywanted.agent@gmail.com</h3>
         </div>
         
    
   }

</div>

<Container maxWidth="xs"  sx={{width: '100%',
  height: '500px', margin: '0px', padding: '0px', display: { xs: 'flex', md: 'none' },}}>
<Grid container

style={{width: '100%',
  height: '500px',
  }}>
    <div className='chatBlock' >
    {messagesNew.map((el) => {
  let data = new Date(el.createdAt.seconds);
  let d = data.toString();
  console.log(el.createdAt)
  if(el.uid === user.uid){
    return <div class="bubbleWrapper">
    <div class="inlineContainer">
      {el.downloadURL && 
    <div class="otherBubble other">
    <a href={el.downloadURL}><AiFillFile className='iconFileIcon'/></a>
    </div>
  }
      <div class="otherBubble other">
    
       {el.message}
      </div>
    </div><span class="other">{el.createdAt}</span>
    </div>
  }else{
    return <div class="bubbleWrapperOther">
    <div class="inlineContainer">
      {el.downloadURL && 
    <div class="otherBubble other">
    <a href={el.downloadURL}><AiFillFile className='iconFileIcon'/></a>
    
    </div>
  }
      <div class="otherBubble other">
    
       {el.message}
      </div>
    </div><span class="other">{el.createdAt}</span>
    </div>
  }


})}
   
    <div ref={scroll}></div>
    </div>

</Grid>
</Container>
<Container maxWidth="xl"  sx={{width: '600px',
  height: '500px', margin: '0px', padding: '0px', display: { xs: 'none', md: 'flex' , xl: 'flex'},}}>
<Grid container

style={{width: '575px',
  height: '500px',
  }}>
    <div className='chatBlock' >
    {messagesNew.map((el) => {
  let data = new Date(el.createdAt.seconds);
  let d = data.toString();
  console.log(el.createdAt)
  if(el.uid === user.uid){
    return <div class="bubbleWrapper">
    <div class="inlineContainer">
      {el.downloadURL && 
    <div class="otherBubble other">
    <a href={el.downloadURL}><AiFillFile className='iconFileIcon'/></a>
    </div>
  }
      <div class="otherBubble other">
    
       {el.message}
      </div>
    </div><span class="other">{el.createdAt}</span>
    </div>
  }else{
    return <div class="bubbleWrapperOther">
    <div class="inlineContainer">
      {el.downloadURL && 
    <div class="otherBubble other">
    <a href={el.downloadURL}><AiFillFile className='iconFileIcon'/></a>
    
    </div>
  }
      <div class="otherBubble other">
    
       {el.message}
      </div>
    </div><span class="other">{el.createdAt}</span>
    </div>
  }


})}
   
    <div ref={scroll}></div>
    </div>

</Grid>
</Container>
</div>
{loading &&
      <Loading/>
      }
<form className="send-message" onSubmit={(event) => sendMessageNew(event)}>
    
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >

      </input>


      
      
         <label class="label">
         <input type="file" onChange={(e) => setFile(e.target.files)}
         id="inputFilesId"
   accept=".doc,.docx,.xml,.jpeg,.png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
         <span>Select a file</span>
       </label>
       
   
    
      <button className='chatButton' type="submit">Send</button>
    </form>
   
    </div>
    
    </>
    )
}