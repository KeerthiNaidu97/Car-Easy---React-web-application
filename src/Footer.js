import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
 
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <img src="logo1.png" alt="" className="header__icon" />
        </div>
        <p>© CarEasy Privated Limited</p>
        <div className="icons">
          <Facebook className="facebook" />
          <Instagram className="instagram" />
          <Twitter className="twitter" />
        </div>
      </div>
    </div>
  );
}
 
export default Footer;