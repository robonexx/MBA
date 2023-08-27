'use client';
import React, { useState } from 'react';

// styles
import './MenuBtn.scss';

const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div className='hamburger_wrapper' onClick={(e) => onClickHandler()}>
      <div className={`hamburger ${active ? 'active' : ''}`} id='hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuBtn;
