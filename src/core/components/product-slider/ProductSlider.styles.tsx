import { palette } from '@core/theme/colors';
import { pxToRem } from '@core/theme/mixins';
import styled from 'styled-components';

export const ProductSliderWrapper = styled.div`
  position: relative;
`;

export const ProductSlider = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
    background-color: transparent;
  }
`;

export const ProductSliderTiles = styled.ul`
  display: flex;
  gap: ${pxToRem(12)};
`;

export const ProductSliderTile = styled.li`
  flex: 0 0 25%;
  scroll-snap-align: 'center';
  min-width: 320px;
  flex: 0 0 calc(100% / 3);

  @media (max-width: 486px) {
    flex: 0 0 calc(70% - 12px);
  }

  @media (min-width: 486px) {
    flex: 0 0 calc(33% - 12px);
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc(25% - 12px);
  }
`;

export const ProductSliderControls = styled.div``;
export const ProductSliderControlsButton = styled.button<{ $align: string }>`
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(33, 33, 33, 0.12);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $align }) => ($align === 'left' ? 'left : 1rem; ' : 'right: 1rem;')}
  border-radius: 50%;
  border: 2px solid ${palette.gray.light};
  background-color: ${palette.white};
  padding: ${pxToRem(12)};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProductSliderControlsButtonImg = styled.img``;

export const ProductSliderPagination = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 1rem 0;
`;

export const ProductSliderPaginationDot = styled.li<{ $isActive?: boolean }>`
  cursor: pointer;
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  border-radius: 50%;
  background-color: ${({ $isActive }) =>
    !$isActive ? palette.gray.medium : palette.red};

  &:hover {
    background-color: ${palette.red};
    opacity: 0.8;
  }
`;
