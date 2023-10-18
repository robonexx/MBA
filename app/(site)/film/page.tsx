import FilmItem from '@/components/singleitem/FilmItem';
import { getFilms } from '@/sanity/sanity-utils';
import { FilmTypes } from '@/sanity/types/FilmType';
import React from 'react';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const page = async () => {
  const films: FilmTypes[] = await getFilms();

  console.log(films);
  return (
    <div className='w-full h-screen bg-orange text-black font-black'>
      {films &&
        films.map((data) => (
          <div key={data._id}>
            <FilmItem data={data} />
          </div>
        ))}
    </div>
  );
};

export default page;
