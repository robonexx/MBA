'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
/* import { navSlide } from '../animations/MenuAnimations'; */
import { Playfair_Display } from 'next/font/google';

// styles
import './NavDefault.scss';
import { navData } from 'constants/NavData';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

const NavDefault = () => {
  return (
    <motion.nav className={`default_nav`}>
      <Link className={`${playfair.className} default_link`} href='/'>
        Markus B. Almqvist
      </Link>
      <ul className={`default_menu`}>
        {navData.map(({ title, path, id }, i) => (
          <Link
            key={id}
            className='default_nav_link'
            onClick={() => setActive(false)}
            href={path}
          >
            {title}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavDefault;
