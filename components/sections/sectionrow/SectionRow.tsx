import React, { ReactNode } from 'react';

type PropsWithChildren = {
  children?: ReactNode;
};

const SectionRow = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-screen h-screen block bg-slate-100 m-0 p-0'>
      {children}
    </div>
  );
};

export default SectionRow;
