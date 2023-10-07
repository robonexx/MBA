import React, {FC } from 'react';

import styles from './sectionFullScreen.module.scss';
import { SectionScreenProps } from '@/types/screenSectionTypes';

const SectionFullScreen: FC<SectionScreenProps> = ({ children }) => {
  return (
    <section
      className={styles.fullscreen}>
      {children}
    </section>
  );
};

export default SectionFullScreen;
