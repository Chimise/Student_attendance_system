import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}


const Button = ({children, className, ...props}: ButtonProps) => {
    return (<button className={`${styles.button} ${className}`} {...props}>
        {children}
    </button>)
}

export default Button;