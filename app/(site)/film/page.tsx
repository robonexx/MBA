import FilmItem from '@/components/singleitem/FilmItem';
import { getFilms } from '@/sanity/sanity-utils';
import { FilmTypes } from '@/sanity/types/FilmType';
import React from 'react';

import styles from './film.module.scss'

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const page = async () => {
  const films: FilmTypes[] = await getFilms();

  console.log(films);
  return (
    <div className={styles.film}>
      {films &&
        films.map((data) => (
          <div key={data._id} className={styles.item}>
            <FilmItem data={data} />
          </div>
        ))}
    </div>
  );
};

export default page;
