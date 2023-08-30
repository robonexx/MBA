'use client';
import React from 'react';
// styles
import './MenuBtn.scss';

const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };
  /* 
  const navBtn = useRef();

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current.classList.add('hamburger_wrapper bg');
          navRef.current.classList.remove('hide');
        } else {
          navRef.current.classList.add('hide');
          navRef.current.classList.remove('hamburger_wrapper bg');
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); */

  return (
    <div
      className='hamburger_wrapper'
      onClick={(e) => onClickHandler()}
      /*  onMouseEnter={(e) => setActive(true)} */
    >
      <div className={`hamburger ${active ? 'active' : ''}`} id='hamburger'>
        <span>{active ? 'Close' : 'Menu'}</span>
      </div>
    </div>
  );
};

export default MenuBtn;
