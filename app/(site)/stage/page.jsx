'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import BGIMG from '@/public/Hemsida.jpg';
import Button from '@/components/button/Button';
import './stage.scss';
import Link from 'next/link';
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

const btnList = [{ title: 'watch' }, { title: 'listen' }, { title: 'read' }];

const Stage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className='stage'>
      <div className='contentWrapper'>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
        >
          Things That Could Survive in Space
        </motion.h1>
        <motion.h2
          initial={{ y: 200 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        >
          by Anika Edström Kawaji & Robin Haghi Premiere 2022
        </motion.h2>
      </div>
      <motion.div
        className='buttons'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
      >
        {btnList.map(({ title, content }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i % 2 === 0 ? 100 : 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <Button
              variant='default'
              title={title}
              onClick={() => (modalOpen ? close() : open())}
            />
          </motion.div>
        ))}
      </motion.div>

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<Watch />}
        ></Modal>
      )}

      <motion.div
        className='bgWrapper'
        initial={{}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Image
          alt='background image'
          src={BGIMG}
          fill
          priority
          className='img'
        />
      </motion.div>
      <div className='overlay'></div>
      <Link href='#' className='linkToAll'>
        See all stage work
      </Link>
    </div>
  );
};

export default Stage;
