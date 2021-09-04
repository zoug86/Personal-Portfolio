import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const sliderHandler = () => {
        setToggle(!toggle);
    }
    return (
        <ToggleContext.Provider value={{ toggle, setToggle, sliderHandler }} >
            {children}
        </ToggleContext.Provider >
    )
}
