'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IMG from '/public/images/stageimage.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { getStages } from '@/sanity/sanity-utils';

// styles
import styles from './stage.module.scss';
import StageItem from 'components/works/StageItem';
import StageList from 'components/works/StageList';
import { StageTypes } from '@/sanity/types/StageType';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
    },
  },
};

const Stage = () => {
  /*  const [show, setShow] = useState(false); */

  const [stages, setStages] = useState<StageTypes[]>([]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const stagesData = await getStages();
      setStages(stagesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIndex((prevIndex) => (prevIndex + 1) % stages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [stages]);

  console.log(stages);

  /* const handleShow = () => {
    setShow((prev) => !prev);
  }; */
  return (
    <motion.div
      className={styles.stage}
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
    >
      <div className={styles.headline}>
        <motion.h4
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          Markus B Almqvist
        </motion.h4>
        <motion.h4
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Works for stage
        </motion.h4>
        <h4>empty</h4>
      </div>
      <AnimatePresence>
        {stages.map((data, index) => (
          <motion.div
            key={data._id}
            style={{ display: index === currentStageIndex ? 'block' : 'none' }}
            variants={variants}
            animate={index == currentStageIndex ? 'animate' : 'initial'}
          >
            <StageItem data={data} />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className={styles.overlay}></div>
      {/*  <button className={styles.fullList} onClick={handleShow}>
        see full list of works for stage
      </button>
      {show ? <StageList /> : <span></span>} */}
    </motion.div>
  );
};

export default Stage;
