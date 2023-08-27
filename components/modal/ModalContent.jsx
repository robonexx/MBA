import Image from 'next/image';
import './ModalContentWrapper.scss';
const ModalContent = () => (
  <>
    <div className='relative grid place-content-center p-40 w-full h-full md:w-10/12'>
      <div className='absolute grid content-center z-10 shadow-lg p-10 md:p-40 bg-slate-800/75'>
        <h1>Some modal content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          eligendi ducimus libero assumenda incidunt est nulla a quaerat
          blanditiis pariatur. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Velit eligendi ducimus libero assumenda incidunt est
          nulla a quaerat blanditiis pariatur.
        </p>
      </div>
      <div className='aspect-w-16 aspect-h-9 -z-0 opacity-80'>
        <Image
          src='https://images.unsplash.com/photo-1605709355253-07265c27e2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
          fill
          alt='Picture of the author'
          priority
        />
      </div>
    </div>
  </>
);

export default ModalContent;
