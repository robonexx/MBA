import React, { ReactNode, FC } from 'react';
import { motion } from 'framer-motion';

import styles from './sectionFullScreen.module.scss';
import { SectionScreenProps } from '@/types/screenSectionTypes';

const SectionFullScreen: FC<SectionScreenProps> = ({ children }) => {
  return (
    <motion.section
      className={styles.fullscreen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionFullScreen;
