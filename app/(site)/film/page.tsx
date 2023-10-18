'use client';

import React, { useEffect, useRef } from 'react';
import FilmItem from '@/components/singleitem/FilmItem';
import { getFilms } from '@/sanity/sanity-utils';
import { FilmTypes } from '@/sanity/types/FilmType';
import styles from './film.module.scss';

const FilmPage: React.FC = () => {
  const [films, setFilms] = React.useState<FilmTypes[]>([]);

  const filmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const filmsData: FilmTypes[] = await getFilms();
      setFilms(filmsData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const parentContainer = filmRef.current?.addEventListener; // Access current property

    if (parentContainer) {
      parentContainer('scroll', handleScroll);

      return () => {
        const currentRef = filmRef.current; // Capture the current value
        currentRef?.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Add filmRef.current to dependencies

  const handleScroll = (event: Event) => {
    const scrollPos = (event.currentTarget as HTMLDivElement).scrollTop;
    const childHeight = (event.currentTarget as HTMLDivElement).clientHeight;

    // Calculate the index of the currently visible item
    const currentIndex = Math.round(scrollPos / childHeight);

    // Smoothly scroll to the next item
    (event.currentTarget as HTMLDivElement).scrollTo({
      top: currentIndex * childHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.film} ref={filmRef}>
      {films &&
        films.map((data) => (
          <div key={data._id} className={styles.item}>
            <FilmItem data={data} />
          </div>
        ))}
    </div>
  );
};

export default FilmPage;
