import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  className,
  variant = 'unpadded',
  as: Comp = 'section',
}: BoundedProps) => {
  return <Comp className={clsx('', className)}>Bounded</Comp>;
};

export default Bounded;
