import styled, { keyframes } from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Image = styled.img<{ $isLoading?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ $isLoading }) => ($isLoading ? 'none' : 'block')};
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;
