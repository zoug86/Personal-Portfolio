import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { GiNightSleep } from 'react-icons/gi'
import { WiDaySunny } from 'react-icons/wi';
import './DarkMode.css';

const DarkMode = () => {

    const { toggle, sliderHandler } = useContext(ToggleContext);
    console.log(toggle)
    return (
        <div>
            <div className={toggle ? "toggle dark-mode" : "dark-mode"}>
                <span className='day'><WiDaySunny /></span>
                <label className="switch">
                    <input type="checkbox" onClick={sliderHandler} />
                    <span className="slider round"></span>
                </label>
                <span className='night'><GiNightSleep /></span>
            </div>
        </div>
    )
}

export default DarkMode;
