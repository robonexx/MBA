'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dummyData } from '@/constants/DummyData';
import styles from './itemsList.module.scss'; // Import the SASS styles

const ItemsList = () => {
  const [works, setWorks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // Simulating data fetching delay
      new Promise((resolve) => setTimeout(() => resolve(dummyData), 1000))
        .then((result) => {
          setWorks(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        works &&
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
            </section>
          </Link>
        ))
      )}
    </div>
  );
};

export default ItemsList;
