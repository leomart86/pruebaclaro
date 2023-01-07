import React from "react";
import "../css/styles.css";
import { SocialIcon } from 'react-social-icons';

function Footer(){
    return (
        <div className='row'>
            <div className='col-4 pt-3'>
              <p>Aviso de privacidad/Contacto</p>
            </div>
            <div className='col-4 text-center'>
              <img src={require(`../images/logo-sochi.png`)} alt='logo Sochi'/>
            </div>
            <div className='col-4 pt-3'>
                <SocialIcon url='#' network='tumblr'   className='me-2' style={{ height: 30, width: 30 }}/>
                <SocialIcon url='#' network='twitter'  className='me-2' style={{ height: 30, width: 30 }}/>
                <SocialIcon url='#' network='facebook' className='me-2' style={{ height: 30, width: 30 }}/>
                <SocialIcon url='#' network='youtube'  className='me-2' style={{ height: 30, width: 30 }}/>
            </div>
        </div>
    );
}

export default Footer;