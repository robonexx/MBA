'use client';
import React from 'react';
// styles
import './MenuBtn.scss';

import { motion, AnimatePresence } from 'framer-motion';

const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
  };
  /* 
  const navBtn = useRef();

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current.classList.add('hamburger_wrapper bg');
          navRef.current.classList.remove('hide');
        } else {
          navRef.current.classList.add('hide');
          navRef.current.classList.remove('hamburger_wrapper bg');
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); */

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='hamburger_wrapper'
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
        <div className={`hamburger ${active ? 'active' : ''}`} id='hamburger'>
          <span>{active ? 'Close' : 'Menu'}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuBtn;
