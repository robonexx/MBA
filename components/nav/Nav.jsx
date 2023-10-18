import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navSlide } from '../animations/MenuAnimations';
import { Playfair_Display } from 'next/font/google';

// styles
import styles from './nav.module.scss';
import Curve from '../curve/Curve';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

const Nav = ({ active, children, scrollY }) => {
  const navRef = useRef();

  useEffect(() => {
    if (window !== undefined) {
      // browser code
      if (scrollY > 2 * window.innerHeight) {
        // Apply styles or add a class to center the button
        console.log('nav is 2 vh down')
        navRef.current.classList.add(`${styles.nav_center}`);
      } else {
        // Remove the class if scroll position is less than 200vh
        navRef.current.classList.remove(`${styles.nav_center}`);
      }
    }
  }, [scrollY]);

  return (
    <motion.nav
      ref={navRef}
      className={styles.nav}
      variants={navSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        <Link className={`${playfair.className} ${styles.link}`} href='/'>
          Markus B. Almqvist
        </Link>
        {children}
      </ul>
      <Curve />
    </motion.nav>
  );
};

export default Nav;
