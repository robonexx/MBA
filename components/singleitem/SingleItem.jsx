'use client';
import React, { useState } from 'react';
import { GiPlayButton } from 'react-icons/gi';
import Modal from '@/components/modal/Modal';
import ModalContent from '@/components/modal/ModalContent'

const data = {
  author: 'Markus B. Almqvist',
  title: 'Beings',
  customer: 'for solo organ',
  year: '2023',
  desc: 'The concept of this piece touches on the theme of expansion. Working with an instrument that is (most often) placed in spaces with very rich acoustics, I was thinking of how I can take usage of this in my own way, reaching every wall that holds it, and that is too a part of the instrument. I was also curious of getting in contact with the inner world of the instrument. I am trying to create a vivacity and a subtlety that embraces the listener and speaks with a (for me) new voice. With this liveliness, it harmonically and dynamically expands, as well uses the incredible range of this instrument.',
  duration: '7',
  premier: 'Premiere January 2023 in Lund, Sweden, performed by Robert Bennesh',
  score: 'view score',
  songUrl: 'play',
};



const SingleItem = () => {
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
    <div className='w-full flex flex-col items-start justify-between text-sm box-border'>
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
          /*  onMouseEnter={() => (modalOpen ? close() : open())} */
          className='cursor-pointer'
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
