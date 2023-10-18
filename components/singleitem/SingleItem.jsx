'use client';
import React, { useState } from 'react';
import { GiPlayButton } from 'react-icons/gi';
import Modal from '@/components/modal/Modal';
import ModalContent from '@/components/modal/ModalContent';
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

  if (!data) {

    return (
      <div>No data</div>
    )
    
  }
  return (

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
