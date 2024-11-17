import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import React, { useState } from 'react';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <>
            <Hamburger onToggle={toggled => { toggleMenu() }} />
            <ul className="menu__toggle" style={{ display: isOpen ? 'flex' : 'none' }}>
                <li className="menu__toggle__item"><Link className="menu__toggle__link" to="/">Начало</Link></li>
                <li className="menu__toggle__item"><Link className="menu__toggle__link" to="/braids">Плитки</Link></li>
                {/* <li className="menu__toggle__item"><Link className="menu__toggle__link" to="/makeup">Грим</Link></li> */}
                <li className="menu__toggle__item"><Link className="menu__toggle__link" to="/nails">Маникюр</Link></li>
            </ul>
        </>
    );
};