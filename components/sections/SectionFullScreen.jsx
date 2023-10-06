import React from 'react';
import { motion } from 'framer-motion';

import styles from './sectionFullScreen.module.scss'

const SectionFullScreen = ({ children }) => {
  return (
    <motion.div
      className={styles.fullscreen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionFullScreen;
