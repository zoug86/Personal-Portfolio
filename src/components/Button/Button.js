import React from 'react';
import { Button } from '@material-ui/core';

// styles
import './Button.css';

const CustomButton = ({ text, icon, link }) => {
    return (
        <Button type="submit" className="custom-btn" endIcon={icon ? <div className="btn-icon-container">{icon}</div> : null}>
            <a href={link} download> <span className="btn-text">{text}</span></a>
        </Button>
    )
}

export default CustomButton;

