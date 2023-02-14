import { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineClose,  AiOutlineMenu} from "react-icons/ai";


export default function Header() {

    const [windowDimensions, setWindowDimensions] = useState(true)
    const [menu, setMenu] = useState(false)
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
       <div className="headerWrap">
         <div className="logo">
           <h1>SiteName<span>.com</span></h1>
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
<AiOutlineClose style={{alignSelf: 'flex-end', margin:'5%', fontSize: '3em'}} onClick={() => setMenu(false)}/>
<ul className="ulMobile">
  <li className="liMobile"><a href='/'>What we offer</a></li>
  <li className="liMobile"><a href='/eng/about'>Our prices</a></li>
  <li className="liMobile"><a href='/eng/servise'>Sample papers</a></li>
  <li className="liMobile"><a href='/eng/contact'>Our values</a></li>
  <li className="liMobile"><a href='/eng/contact'>Contact us</a></li>
</ul>
</div>

}




       {windowDimensions &&
        <ul>
            <li><a href="/">What we offer</a></li>
            <li><a href="/">Our prices</a></li>
            <li><a href="/">Sample papers</a></li>
            <li><a href="/">Our values</a></li>
            <li><a href="/">Contact us</a></li>
        </ul>
}
       </nav>
       <div className="signIn">
       <a href="/">
           <AiOutlineUser className="AiOutlineUser"/>
           Sign in</a>
       </div>
       <div className="wraperFixed">
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