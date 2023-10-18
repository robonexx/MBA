'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BGIMG from 'public/Hemsida.jpg';
import Button from '@/components/button/Button';
import styles from './stageItem.module.scss';
import { motion } from 'framer-motion';
import Modal from '@/components/modal/Modal';
import ContentWatch from '@/components/contentWatch/ContentWatch';

const Watch = () => {
  return <ContentWatch videoId='659455320' />;
};
const Read = () => {
  return <div>Read the text of the project and all info here</div>;
};
const Listen = () => {
  return <div>Sound link goes here</div>;
};

const btnList = [{ name: 'watch' }, { name: 'listen' }, { name: 'read' }];

const StageItem = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEl, setCurrentEl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const {
    title,
    producers,
    year,
    description,
    image,
    links: { watch, listen, read },
  } = data;

  useEffect(() => {
    const fetchData = () => {
      // Simulating data fetching delay
      new Promise((resolve) => setTimeout(() => resolve(data), 1000))
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    };

    fetchData();
  }, [data]);

  if (!data) {
    return <div>Laoding...</div>;
  }

  return (
    <motion.div
      className={styles.stage}
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className={styles.contentWrapper}>
        <motion.h2
          initial={{ y: 200 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        >
          By: {producers} Premiere: {year}
        </motion.h2>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>
      </div>
      <motion.div
        className={styles.buttons}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
      >
        {btnList.map(({ name }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i % 2 === 0 ? 100 : 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <Button
              variant='default'
              name={name}
              onClick={(e) => {
                console.log((i, name));
                modalOpen ? close() : open();
                setCurrentEl(name);
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={currentEl === 'watch' ? <Watch /> : null}
        ></Modal>
      )}
      <p>{description}</p>
      <motion.div
        className={styles.bgWrapper}
        initial={{}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {image ? (
          <Image
            alt='background image'
            src={image}
            fill
            priority
            className={styles.img}
          />
        ) : (
          <div>Image missing</div>
        )}
      </motion.div>
      <div className={styles.overlay}></div>
    </motion.div>
  );
};

export default StageItem;
