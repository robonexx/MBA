'use client';
import Image from 'next/image';
import styles from './filmItem.module.scss';
import { PortableText } from '@portabletext/react';
import { FilmTypes } from '@/sanity/types/FilmType';
import { motion } from 'framer-motion';
import { SlideInLeft } from '../animations/reveal/SlideInLeft';
import { fadeIn, fadeInUp } from '../animations/Animations';

interface FilmItemProps {
  data: FilmTypes;
}

const FilmItem: React.FC<FilmItemProps> = ({ data }) => {
  const { title, producers, image, description, link, slug } = data;

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.producers}>
        <SlideInLeft>
          <h2>{producers}</h2>
        </SlideInLeft>
      </div>
      <div className={styles.info}>
        <motion.h1
          variants={fadeIn}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          {title}
        </motion.h1>
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
      <motion.div
        className={styles.desc}
        variants={fadeInUp}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <PortableText value={description} />
      </motion.div>
    </div>
  );
};

export default FilmItem;
