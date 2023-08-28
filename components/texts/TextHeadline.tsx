import React from 'react';

type HeadlineType = {
  title: string;
};

const TextHeadline = ({ title }: HeadlineType) => {
  return (
    <h2 className='font-thin text-4xl relative text-center mt-20 mb-2 px-2'>
      {title}
    </h2>
  );
};

export default TextHeadline;
