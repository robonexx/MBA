'use client';
import React, { useState } from 'react';
import { GiPlayButton } from 'react-icons/gi';
import Modal from 'components/modal/Modal';
import ModalContent from 'components/modal/ModalContent';
import styles from './singleItem.module.scss';

const SingleItem = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const {
    author,
    title,
    customer,
    year,
    desc,
    duration,
    premier,
    score,
    songUrl,
  } = data;
  return (
    /*  <div className='w-full h-full flex flex-col items-start justify-between text-sm box-border'>
      <h3 className='text-base mb-10 text-orange-300'> {author}</h3>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-base pr-6'>{title}</h3>
        <p className='px-4'>{customer}</p>
        <p className='px-4'>{year}</p>
        <p className='px-4'>Durata ca. {duration}&apos;</p>
      </div>
      <p className='mb-4'>{desc}</p>
      <div className='w-full mb-6 flex items-center justify-betweeen text-sm'>
        <p className='flex w-1/2 items-center'>
          <span className='pr-6 text-xl'>
            <GiPlayButton />
          </span>
          {songUrl}
        </p>
        <p
          onClick={() => (modalOpen ? close() : open())}
          className='cursor-pointer'
        >
          {score}
        </p>
      </div>
      <p>{premier}</p> */
    <div className={styles.single_item}>
      <h3> {author}</h3>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{customer}</p>
        <p>{year}</p>
        <p>Durata ca. {duration}&apos;</p>
      </div>
      <p className={styles.description}>{desc}</p>
      <div className={styles.media_info}>
        <p className={styles.play_button}>
          <span>
            <GiPlayButton />
          </span>
          {songUrl}
        </p>
        <p
          onClick={() => (modalOpen ? close() : open())}
          /*  onMouseEnter={() => (modalOpen ? close() : open())} */
          className={styles.score}
        >
          {score}
        </p>
      </div>
      <p>{premier}</p>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<ModalContent />}
        ></Modal>
      )}
    </div>
  );
};

export default SingleItem;
