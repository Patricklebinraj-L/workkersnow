import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const handleToggle = () => {
        document.body.classList.toggle('dark-mode');
    };

    return (
        <button className='dark-mode-toggle' onClick={handleToggle}>
            <FaMoon className='dark-mode-icon' />
            <FaSun className='light-mode-icon' />
        </button>
    );
};

export default DarkModeToggle;
