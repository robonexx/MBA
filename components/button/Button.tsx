'use client';
import React from 'react';

// styles using module on this one
import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  name: string;
  variant: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  children,
  variant,
  name,
  onClick = () => {},
}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[variant]}`}>
      {name}
      {children}
    </button>
  );
};

export default Button;
