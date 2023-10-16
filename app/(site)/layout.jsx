'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '@/app/globals.scss';
import { Inter } from 'next/font/google';
import Header from 'components/header/Header';
import MenuBtn from 'components/menuBtn/MenuBtn';
import Nav from 'components/nav/Nav';
import NavItem from 'components/nav/NavItem';
import { navData } from 'constants/NavData';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
      <Cursor cursor={cursor} onMouseMove = { (e) => {
  const cursor = document.querySelector(".cursor")
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `${e.pageY}px`
  }}/>
        <Header></Header>
        <MenuBtn active={active} setActive={setActive} scrollY={scrollY} />
        <AnimatePresence mode='wait'>
          {active && (
            <Nav active={active} setActive={setActive}>
              {navData.map(({ title, path, cls, id }, i) => (
                <NavItem
                  title={title}
                  path={path}
                  cls={cls}
                  key={id}
                  i={i}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </Nav>
          )}
        </AnimatePresence>
        <div className='scrolling'>
        {scrollY > 500
          ? 'Scrolled more than 500px'
          : 'Still somewhere near the top!'}
        </div>
        {children}
      </body>
    </html>
  );
}
