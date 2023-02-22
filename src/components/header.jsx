import { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineClose,  AiOutlineMenu} from "react-icons/ai";
import { Link} from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged} from 'firebase/auth';
import UserCabinetIcon from "./userCabinetIcon/userCabinetIcon";

export default function Header() {

    const [windowDimensions, setWindowDimensions] = useState(true)
    const [menu, setMenu] = useState(false)
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if(user){
              setAuthUser(user)
          }else{
              setAuthUser(null)
          }
      })
    
  
      return () => {
          listen();
      }
  
  }, [authUser])


    useEffect(() => {
     
      function handleResize() {
       
        if(window.innerWidth < 1279){
    
        setWindowDimensions(false);
      }else{
        setWindowDimensions(true);
      }
      }
      handleResize()
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
       <div className="headerWrapnew">
         <div className="logonew">
          <img></img>
           <h1>Essay-Wanted<span>.com</span></h1>
        </div>
       <div className="headerMenynew">
       <nav className="navnew">
      
       {windowDimensions === false &&
        <div className="outLineMenunew">
  <AiOutlineMenu  onClick={() => setMenu(true)}/>
  </div>
 
}
{menu &&
<div className="menunew">
<AiOutlineClose style={{alignSelf: 'flex-end', margin:'5%', fontSize: '3em'}} onClick={() => setMenu(false)}/>
<ul className="ulMobilenew">
  <li className="liMobilenew"><Link to='offer'>What we offer</Link></li>
  <li className="liMobilenew"><Link to='offer'>Our prices</Link></li>
  <li className="liMobilenew"><Link to='offer'>Sample papers</Link></li>
  <li className="liMobilenew"><Link to='offer'>Our values</Link></li>
  <li className="liMobilenew"><Link to='offer'>Blog</Link></li>
  <li className="liMobilenew"><Link to='/contact'>Contact us</Link></li>
</ul>
</div>

}




       {windowDimensions &&
        <ul>
            <li><Link to='/offer'>What we offer</Link></li>
            <li><Link to='/prices'>Our prices</Link></li>
            <li><Link to='/'>Sample papers</Link></li>
            <li><Link to='offer'>Our values</Link></li>
            <li><Link to='offer'>Blog</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
        </ul>
}
       </nav>
       {authUser === null &&
        <div className="signInnew">
        <Link to="/signin">
            <AiOutlineUser className="AiOutlineUsernew"/>
            Sign in</Link>
        </div>
       }
       {authUser !== null &&
       <UserCabinetIcon/>
       }
      
       <div className="wraperFixednew">
       <button>
        Order now
        <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
       </button>
       </div>
       </div>
       </div>
    )
}