import './chat.css'
import { auth, db } from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  query,
 
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { useEffect } from 'react';


export default function Chat () {
    const [message, setMessage] = useState("");

    const [user] = useAuthState(auth)
    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid, email, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: message,
          name: email,
          avatar: photoURL,
          createdAt: serverTimestamp(),
          uid,
        });
        setMessage("");
      };
const [messagesNew, setMessagesNew] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessagesNew(messages);
      console.log(user)
    });
    return () => unsubscribe;
  }, []);

    return(
<div className='wrapper'>
<div className='chatBlock'>
{messagesNew.map((el) => {
  if(el.uid === user.uid){
    return <div class="bubbleWrapper">
    <div class="inlineContainer">
      
      <div class="otherBubble other">
    
       {el.text}
      </div>
    </div><span class="other">11:11</span>
    </div>
  }else{
    return <div class="bubbleWrapperOther">
    <div class="inlineContainer">
      
      <div class="otherBubble other">
    
       {el.text}
      </div>
    </div><span class="other">11:11</span>
    </div>
  }


})}
	

  
</div>

<form className="send-message" onSubmit={(event) => sendMessage(event)}>
      <label htmlFor="messageInput" hidden style={{color: 'black'}}>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    </div>

    )
}