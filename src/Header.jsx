import React from "react";
import {Link} from "react-router-dom";
import Card1 from "./Card1";

 

const Header=()=>{

        return(
            <>
          
        <div className="top_nav_new">
        <div className="list_new">
        <ul>
      <h1>
      <Link to="/" className="tilt_new">LOGO</Link></h1>
      <li><Link to="/Home" className="click_new">Home</Link></li>
      <li><Link to="/Portfolio" className="click_new">MyPorfolio</Link></li>
      <li><Link to="/Clients" className="click_new">Clients</Link></li>
      <li><Link to="/Touch" className="click_new">Get in Touch</Link></li>
        </ul>
      </div>
        
    </div>

    <Card1/>
     
   </>
    )
}

export default Header;