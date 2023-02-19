import React from "react";
import './App.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () =>{

    return(
        <div className="footer">
            <h1>TAZA KHABAR</h1>
            <hr/>
            <div className="footer-icons">
                <div className="footer-inner-icons"><FacebookRoundedIcon/></div>
                <div className="footer-inner-icons"><InstagramIcon/></div>
                <div className="footer-inner-icons"><WhatsAppIcon/></div>
                <div className="footer-inner-icons"><TwitterIcon/></div>
            </div>
            <span style={{fontSize:"1vw"}}>Copyright © 2023 TAZA KHABAR</span>
            <button>Donate</button>

        </div>
    )
}

export default Footer;