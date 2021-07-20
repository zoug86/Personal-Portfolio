import { Typography } from '@material-ui/core';
import React from 'react';
import resumeData from '../../utils/resumeData';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
           <div className="fotter-left">
               <Typography className="footer-name">Houssem Marzougui</Typography>
           </div>
           <div className="fotter-right">
                <Typography className="footer-copyright">
                    Designed and Developed by <a href="/" target="_blank" rel="noreferrer">{resumeData.name}</a>
                    <br/>
                    Inspired by <a href="https://themeforest.net/user/tavonline" target="_blank" rel="noreferrer">TavOnline.</a>
                </Typography>
           </div>
        </div>
    )
}

export default Footer;
