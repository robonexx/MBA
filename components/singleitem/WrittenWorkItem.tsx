import React, { useState } from 'react';
import Image from 'next/image';
import { GiPlayButton } from 'react-icons/gi';
/* import Modal from 'components/modal/Modal';
import ModalContent from 'components/modal/ModalContent'; */
import styles from './writtenWorkItem.module.scss';
import { WrittenTypes } from '@/sanity/types/WrittenType';
import { PortableText } from '@portabletext/react';

interface WrittenWorkItemProps {
  data: WrittenTypes;
}

const WrittenWorkItem: React.FC<WrittenWorkItemProps> = ({ data }) => {
  /* const [modalOpen, setModalOpen] = useState<boolean>(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true); */

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
    image, // Add the image property
  } = data;

  if (!data) {

    return (
      <div>No data</div>
    )
    
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>{author}</h3>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{customer}</p>
          <p>{year}</p>
          <p>Durata ca. {duration}&apos;</p>
        </div>
        <div className={styles.description}>
          <PortableText value={desc}></PortableText>
        </div>
        <div className={styles.media_info}>
          <p className={styles.play_button}>
            <span>
              <GiPlayButton />
            </span>
            {songUrl}
          </p>
          {/* onClick={() => (modalOpen ? close() : open())} */}
          <p className={styles.score}>{score}</p>
        </div>
        <p>{premier}</p>
      </div>
      <div className={styles.image}>
        <Image
          className='object-cover'
          quality={100}
          src={image}
          alt='some text'
          fill
          priority
        />
      </div>
      {/* {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={close} content={<ModalContent />} />
      )} */}
    </div>
  );
};

export default WrittenWorkItem;
