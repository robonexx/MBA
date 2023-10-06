'use client';
import React, { useEffect, useRef } from 'react';
// styles
import styles from './MenuBtn.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={`${styles.hamburger_wrapper}`}
        onClick={(e) => onClickHandler()}
        whileHover={{
          translateY: -2,
          backgroundColor: 'rgb(22, 7, 46)',
          filter: 'drop-shadow(1px 5px 10px rgba(36, 36, 36, 0.322))',
        }}
        onHoverStart={(e) => {
          backgroundColor: 'rgb(22, 7, 46)';
        }}
        onHoverEnd={(e) => {
          backgroundColor: 'rgb(137, 87, 218)';
        }}
      >
        <div
          className={`${styles.hamburger} ${active ? `${styles.active}` : ''}`}
          id='hamburger'
        >
          <span>{active ? 'Close' : 'Menu'}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuBtn;
