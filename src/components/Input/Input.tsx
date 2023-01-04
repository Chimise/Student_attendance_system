import React from 'react';
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | boolean;
}

const Input = ({error, className, ...props}: InputProps) => {
  return (
    <div className={styles['form-control']}>
        <input {...props} className={`${styles.input} ${className}`} />
        <div className={styles.error}>
            {error && <p className={styles.message}>{error}</p>}
        </div>
    </div>
  );
};

export default Input;
