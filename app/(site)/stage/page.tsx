'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IMG from '/public/images/stageimage.jpg';
import { motion } from 'framer-motion';
import { getStages } from '@/sanity/sanity-utils';

// styles
import styles from './stage.module.scss';
import StageItem from 'components/works/StageItem';
import StageList from 'components/works/StageList';
import { StageTypes } from '@/sanity/types/StageType';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';


const Stage = () => {
 /*  const [show, setShow] = useState(false); */

 const [stages, setStages] = useState<StageTypes[]>([]);

 useEffect(() => {
   const fetchData = async () => {
     const stagesData = await getStages();
     setStages(stagesData);
   };

   fetchData();
 }, []); // empty dependency array to ensure it runs once on mount

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
      {stages.map((data) => (
        <StageItem data={data} key={data._id} />
      ))}

      <div className={styles.overlay}></div>
     {/*  <button className={styles.fullList} onClick={handleShow}>
        see full list of works for stage
      </button>
      {show ? <StageList /> : <span></span>} */}
    </motion.div>
  );
};

export default Stage;
