import { HTMLAttributes } from 'react';

export interface ImageWrapperProps extends HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}
