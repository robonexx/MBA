import React, { ReactNode, FC } from 'react';
import { motion } from 'framer-motion';
import { SectionScreenProps } from '@/types/screenSectionTypes';
// styles
import styles from './sectionHalfScreen.module.scss';


const SectionHalfScreen: FC<SectionScreenProps> = ({ children }) => {
  return (
    <motion.section
      className={styles.halfscreen}
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

export default SectionHalfScreen;
