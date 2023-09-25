import React from 'react';

const SectionOneFourthScreen = ({ children }) => {
  return (
    <div className='relative w-full h-56 max-h-60 md:h-62 md:max-h-[250px] bg-white flex flex-col items-center justify-center overflow-hidden pointer-events-none group'>
      {children}
    </div>
  );
};

export default SectionOneFourthScreen;
