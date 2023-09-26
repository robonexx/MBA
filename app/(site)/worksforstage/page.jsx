'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import IMG from '@/public/images/stageimage.jpg';
import { motion } from 'framer-motion';
import { getStages } from '@/sanity/sanity-utils';

// styles
import styles from './stage.module.scss';
import StageItem from '@/components/works/StageItem';
import StageList from '@/components/works/StageList';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';


const WorksForStage = () => {
  const [show, setShow] = useState(false);

  const stages = getStages()


  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <motion.div
      className={styles.stage}
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        Markus B Almqvist
      </motion.h2>
      <div className={styles.headline}>
        <motion.h4
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Works for stage
        </motion.h4>
      </div>
      <div className={styles.img}>
        <Image src={IMG} alt='stage work' fill></Image>
      </div>
      <StageItem />

      <div className={styles.overlay}></div>
      <button className={styles.fullList} onClick={handleShow}>
        see full list of works for stage
      </button>
      {show ? <StageList /> : <span></span>}
    </motion.div>
  );
};

export default WorksForStage;
