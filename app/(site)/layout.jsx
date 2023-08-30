'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import MenuBtn from '@/components/menuBtn/MenuBtn';
import Nav from '@/components/nav/Nav';
import NavItem from '@/components/nav/NavItem';
import { navData } from '@/constants/NavData';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);

  

  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header>
          <span>Markus B Almqvist</span>
        </Header>
        <MenuBtn active={active} setActive={setActive}/>
        <AnimatePresence mode='wait'>
          {active && (
            <Nav active={active} setActive={setActive}>
              {/* <NavItem
                title='Markus B Almqvist'
                path='/'
                key='mba2024'
                active={active}
              /> */}
              {navData.map(({ title, path, cls, id }, i) => (
                <NavItem
                  title={title}
                  path={path}
                  cls={cls}
                  key={id}
                  i={i}
                  active={active}
                />
              ))}
            </Nav>
          )}
        </AnimatePresence>
        {children}
      </body>
    </html>
  );
}
