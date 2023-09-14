import React from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
// styles
import './Header.scss';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

export default function Header({ children }) {
  return (
    <motion.header
      className={`${playfair.className} px-4 text-thin text-2xl md:text-3xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
       <span
          className={`${playfair.className} text-thin text-xl md:hidden text-white`}
        >
          Markus B Almqvist
        </span>
      <Link href='/'>{children}</Link>
    </motion.header>
  );
}
