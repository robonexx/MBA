import React, { useEffect, useState } from 'react';
import styles from './scrollDown.module.scss'; // Import your CSS file or include the styles here

const ScrollDown: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const handleScroll = () => {
    const windowOffset = window.scrollY - document.body.offsetTop;
    setScrollOffset(windowOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolling = scrollOffset > 10;

  return (
    <>
      <div className={`${styles.wrap} ${isScrolling ? styles.off : ''}`}>
        <div className={styles.scroll_indicator}>
          <a className={styles.scroll_down} href='#primary'>
            <span>[ more ]</span>
            <div className={styles.scrolldown_btn}></div>
          </a>
        </div>
      </div>

      <div className={styles.caption}>
        <h2>I&apos;m happy you want to check my work :D</h2>
      </div>
    </>
  );
};

export default ScrollDown;
