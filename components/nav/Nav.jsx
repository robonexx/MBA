import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navSlide } from '../animations/MenuAnimations';
import { Playfair_Display } from 'next/font/google';

// styles
import './Nav.scss';
import Curve from '../curve/Curve';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

export default function Nav({ active, setActive, children }) {
  return (
    <motion.nav
      className='nav'
      variants={navSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <ul className={`menu ${active ? 'open' : ''}`}>
        {' '}
        <Link
          className={`${playfair.className} text-thin text-base md:text-2xl lg:text-3xl text-slate-100`}
          href='/'
        >
          Markus B Almqvist
        </Link>
        {children}
      </ul>
      <Curve />
    </motion.nav>
  );
}
