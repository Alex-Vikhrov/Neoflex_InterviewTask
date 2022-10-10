import React from 'react';
import clases from './styles/Button.module.css';

const Button = ({ children, type, onClick, className }) => {
    return (
        <button
            type={type || 'button'}
            className={className || clases.buttonDefault}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export { Button };
