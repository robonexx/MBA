import React, { useEffect, useState } from 'react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  return <div className={`relative ${width}`}>{children}</div>;
};
