'use client'
import React from "react";

// styles using module on this one
import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  title: string;
  variant: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
  children,
  variant,
  title,
  onClick = () => {},
  }) => { 
  return (
    <button 
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {title}
    {children}
    </button>
  );
}

export default Button;