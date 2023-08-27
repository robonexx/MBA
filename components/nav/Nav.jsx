import React from 'react';
import { motion } from 'framer-motion';
import { navSlide } from '../animations/MenuAnimations';

// styles
import './Nav.scss';
import Curve from '../curve/Curve';

export default function Nav({ active, setActive, children }) {
  return (
    <motion.nav
      className='nav'
      variants={navSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <ul className={`menu ${active ? 'open' : ''}`}>{children}</ul>
      <Curve />
    </motion.nav>
  );
}
