import React from 'react'

type HeadlineType = {
    title: string
}

const TextHeadline = ({title}: HeadlineType) => {
  return (
      <h2 className='font-thin text-4xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          {title}
    </h2>
  )
}

export default TextHeadline