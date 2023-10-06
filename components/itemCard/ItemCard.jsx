import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './itemCard.module.scss';

const ItemCard = ({ work }) => {

    console.log(work)
  return (
    <Link to={ `/work/${work.slug}`} className={styles.work_card}>
        <div className={styles.image_container}>
          <Image
            src={work.image}
            alt={work.title}
            fill
            priority
            className={styles.image}
          />
        </div>
      <section className={styles.content}>
        <div className={styles.title}>{work.title}</div>
        <p className={styles.info}>Author: {work.author}</p>
        <p className={styles.info}>For {work.author}</p>
        <p className={styles.info}>Year: {work.year}</p>
        <p className={styles.info}>Duration {work.duration}</p>
      </section>
    </Link>
  );
};

export default ItemCard;
