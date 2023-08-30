import { getWork } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { GiPlayButton } from 'react-icons/gi';

type Props = {
  params: { slug: string };
};

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

export default async function Work({ params }: Props) {
  const slug = params.slug;
  const work = await getWork(slug);

  return (
    <div className='w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center text-sm box-border bg-slate-300'>
      {/* <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{work?.title}</h1>
      <a href={work?.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
        View Project
      </a>
    </header> */}
      <div className='w-full h-full flex flex-col items-start justify-evenly text-sm box-border py-20 px-10 md:px-60 md:py-50 text-black'>
        <h3 className='text-base mt-10 mb-20 text-orange-800'>
          {' '}
          {work?.author}
        </h3>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-base pr-6'>{work?.title}</h3>
          <p className='px-4'>{work?.customer}</p>
          <p className='px-4'>{work?.year}</p>
          <p className='px-4'>Durata ca. {work?.duration}&apos;</p>
        </div>
        <PortableText value={work?.desc} />
        <div className='w-full mb-6 flex items-center justify-betweeen text-sm'>
          <p className='flex w-1/2 items-center'>
            <span className='pr-6 text-xl cursor-pointer'>
              <GiPlayButton />
            </span>
            {/* {work?.songUrl} */}
          </p>
          <p
            /*  onClick={() => (modalOpen ? close() : open())} */
            /*  onMouseEnter={() => (modalOpen ? close() : open())} */
            className='cursor-pointer'
          >
            {work?.score}
          </p>
        </div>
        <p>{work?.premier}</p>
        {/* {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<ModalContent />}
        ></Modal> 
      )}*/}
      </div>

      {/* <div className='text-lg text-gray-700 mt-5 text-center'>
        <PortableText value={work?.desc} />
      </div> */}
      <div className='w-full h-full relative z-1 grid place-content-center xs:order-1 p-20 md:p-20 lg:p-40'>
        <Image
          className='object-cover'
          quality={100}
          src={work?.image}
          alt={work?.title}
          fill
          priority
        />
      </div>
    </div>
  );
}
