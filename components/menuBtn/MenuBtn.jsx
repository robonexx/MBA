'use client';
import React, { useEffect, useRef } from 'react';
// styles
import styles from './MenuBtn.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

const MenuBtn = ({ active, setActive, scrollY }) => {
  const menuRef = useRef();

  const onClickHandler = () => {
    setActive(!active);
  };

  /*   console.log('scroll y pos is', scrollY)
  console.log('scroll y pos is', 2 * window.innerHeight)
  console.log('window innerheight', window.innerHeight) */

  useEffect(() => {
    if (window !== undefined) {
      // browser code
      if (scrollY > 2 * window.innerHeight) {
        // Apply styles or add a class to center the button
        menuRef.current.classList.add(`${styles.menu_center}`);
      } else {
        // Remove the class if scroll position is less than 200vh
        menuRef.current.classList.remove(`${styles.menu_center}`);
      }
    }
  }, [scrollY]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        ref={menuRef}
        className={styles.hamburger_wrapper}
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
