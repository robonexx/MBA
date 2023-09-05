import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  ref: any;
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // use to contol animation
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // use to trigger animation when in view
  useEffect(() => {
    console.log('is in view');
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);
  return (
    <div className={`relative overflow-hidden ${width}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        className='absolute top-2 bottom-2 left-0 right-0 bg-violet-500'
        variants={{
          hidden: { left: 0, opacity: [0, 0.8] },
          visible: { left: '100%', opacity: 1 },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      ></motion.div>
    </div>
  );
};
