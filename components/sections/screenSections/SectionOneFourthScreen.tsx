import React, {FC } from 'react';
import { motion } from 'framer-motion';

import styles from './sectionOneFourth.module.scss';
import { SectionScreenProps } from '@/types/screenSectionTypes';

const SectionOneFourthScreen: FC<SectionScreenProps> = ({ children }) => {
  return (
    <motion.div
      className={styles.onefourth}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionOneFourthScreen;
