import React, {FC } from 'react';
import { motion } from 'framer-motion';

import styles from './sectionOneFourth.module.scss';
import { SectionScreenProps } from '@/types/screenSectionTypes';

const SectionOneFourthScreen: FC<SectionScreenProps> = ({ children }) => {
  return (
    <motion.div
      className={styles.onefourth}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default SectionOneFourthScreen;
