// ItemsList.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dummyDataWritten } from '@/constants/DummyData';
import styles from './itemsList.module.scss'; // Import the SASS styles

const ItemsList = async () => {
  const works = await dummyDataWritten;
  return (
    <div className={styles.wrapper}>
      {works ? (
        works.slice(0, 4).map((work) => (
          <Link
            href={`/work/${work.slug}`}
            key={work._id || work.id}
            className={styles.item}
          >
            {work.image && (
              <div className={`${styles.image_container}`}>
                <Image
                  src={work?.image}
                  alt={work.title}
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                  className={`${styles.image}`}
                />
              </div>
            )}
            <section className={styles.info}>
              <div className={`${styles.title}`}>{work.title}</div>
             {/*  <p className={`${styles.author}`}>Author: {work.author}</p>
              <p className={`${styles.for}`}>For {work.author}</p>
              <p className={`${styles.year}`}>Year: {work.year}</p>
              <p className={`${styles.duration}`}>Duration {work.duration}</p> */}
            </section>
          </Link>
        ))
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default ItemsList;
