import React from 'react';
import Link from 'next/link';
import { motion as mt } from 'framer-motion';
import { slide, scale } from '../animations/MenuAnimations';
import { Darker_Grotesque } from 'next/font/google';
// styles
import './NavItem.scss';

const darkergrotesque = Darker_Grotesque({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '800'],
});

const NavItem = ({ title, path, cls, id, i, active }) => {
  return (
    <mt.li
      className={`${cls} ${darkergrotesque.className}`}
      key={id}
      /* initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }} */
      custom={i}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <Link
        className='nav_link'
        href={path}
        variants={scale}
        animate={active ? 'open' : 'closed'}
      >
        {title}
      </Link>
    </mt.li>
  );
};

export default NavItem;
