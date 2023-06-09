import { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineClose,  AiOutlineMenu} from "react-icons/ai";
import { Link} from "react-router-dom";

import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import UserCabinetIcon from "../userCabinetIcon/userCabinetIcon";
import logoBlack from '../../img/logoWhite.png'
import { useNavigate } from "react-router-dom";
export default function Header() {
    
    
    const [windowDimensions, setWindowDimensions] = useState(true)
    const [menu, setMenu] = useState(false)
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
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

    const orderButton= () =>{
      
       navigate("/order")
      }

    return (
       <div className="headerWrap">
         <div className="logoImgBlock">
       <Link to="/">    <img src={logoBlack} className='logoImg'></img></Link>
        </div>
       <div className="headerMeny">
       <nav className="nav">
      
       {windowDimensions === false &&
        <div className="outLineMenu">
  <AiOutlineMenu  onClick={() => setMenu(true)}/>
  </div>
 
}
{menu &&
<div className="menu">

<ul className="ulMobile">
<AiOutlineClose className="closeIconMenu" onClick={() => setMenu(false)}/>
  <li className="liMobile"><Link to='/offer'>What we offer</Link></li>
  <li className="liMobile"><Link to='/prices'>Our prices</Link></li>
  <li className="liMobile"><Link to='/sample'>Sample papers</Link></li>
  <li className="liMobile"><Link to='/values'>Our values</Link></li>
  <li className="liMobile"><Link to='/blog'>Blog</Link></li>
  <li className="liMobile"><Link to='/contact'>Contact us</Link></li>
</ul>
</div>

}




       {windowDimensions &&
        <ul>
            <li><Link to='/offer'>What we offer</Link></li>
            <li><Link to='/prices'>Our prices</Link></li>
            <li><Link to='/sample'>Sample papers</Link></li>
            <li><Link to='/values'>Our values</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
        </ul>
}
       </nav>
       {authUser === null &&
       <div className="signIn">
       <Link to="/signin">
           <AiOutlineUser className="AiOutlineUser"/>
           Sign in</Link>
       </div>
       }
       {authUser !== null &&
       <UserCabinetIcon/>
       }
       <div className="wraperFixed">
       <button onClick={orderButton}>
        Order now
       </button>
       </div>
       </div>
       </div>
    )
}