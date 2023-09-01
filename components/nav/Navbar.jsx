'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className='fixed z-20 flex justify-between w-screen px-8 py-2 top-1/4'>
      <div className='flex items-center gap-2 text-white'>
        <Link href='/' className='text-xl text-white'>
          Markus B Almqvist
        </Link>
      </div>
      <ul className='w-full flex items-center text-white/50'>
        <li className='px-2 text-md '>
          <Link href={'/pods'}>Written</Link>
        </li>
        <li className='px-2 text-md'>
          <Link href={'/'}>Stage</Link>
        </li>
        <li className='px-2 text-md'>
          <Link href={'/'}>Film</Link>
        </li>
        <li className='px-2 text-md'>
          <Link href={'/'}>About</Link>
        </li>
        <li className='px-2 text-md'>
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial='initial'
      animate={isScrolling ? 'animate' : 'initial'}
      exit='exit'
      variants={NavAnimations}
      className='fixed z-20 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-10'
    >
      {/* <div className='flex items-center gap-2 text-white'>
        <Link href='/' className='text-xl text-white'>
          Markus B Almqvist
        </Link>
      </div> */}
      <ul className='w-full flex items-center'>
        <li className='px-2 text-white text-md'>
          <Link href={'/pods'}>Written</Link>
        </li>
        <li className='px-2 text-white text-md'>
          <Link href={'/'}>Stage</Link>
        </li>
        <li className='px-2 text-white text-md'>
          <Link href={'/'}>Film</Link>
        </li>
        <li className='px-2 text-white text-md'>
          <Link href={'/'}>About</Link>
        </li>
        <li className='px-4 py-2 ml-2 text-white bg-black rounded-full text-md '>
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: '-50%',
    opacity: 0,
  },
  animate: {
    y: 0,
    x: '-50%',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
