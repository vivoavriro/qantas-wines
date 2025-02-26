import { basePageFontSizeInPixel } from './font';

export const pxToRem = (sizeInPx: number) => {
  return `${sizeInPx / basePageFontSizeInPixel}rem`;
};
