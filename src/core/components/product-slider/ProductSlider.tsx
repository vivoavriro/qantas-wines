import { useEffect, useRef, useState } from 'react';
import * as Styled from './ProductSlider.styles';
import { ProductSliderProps } from './ProductSlider.types';

import NextArrow from '@core/assets/icons/arrow_next.svg';
import PrevArrow from '@core/assets/icons/arrow-previous.svg';

const ProductSlider: React.FC<ProductSliderProps> = ({
  items = [],
  hasNavigationArrow = true,
  hasPaginationDot = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [tilePositions, setTilePositions] = useState<number[]>([]);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [tilesInView, setTilesInView] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const length = items.length;

  const updateNextPrev = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current ?? {
      scrollLeft: 0,
      offsetWidth: 0,
      scrollWidth: 0,
    };

    const scrollLeftRounded = Math.round(scrollLeft);

    const scrollValue = scrollWidth - offsetWidth;

    setShowNext(scrollValue > 0 && scrollLeftRounded < scrollValue);
    setShowPrev(scrollValue > 0 && scrollLeftRounded > 0);
  };

  const handleOnScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = Math.round(scrollRef.current.scrollLeft);

      const currentPosition = Math.round(
        scrollLeft / (scrollRef.current.scrollWidth / length)
      );
      const currentPageFromPosition = pages.indexOf(currentPosition);
      updateNextPrev();

      if (
        currentPageFromPosition >= 0 &&
        currentPageFromPosition !== currentPage
      ) {
        setCurrentPage(currentPageFromPosition);
      }

      // if no matching page, check if last page
      if (currentPosition + tilesInView === length) {
        setCurrentPage(pages.length - 1);
      }
    }
  };

  const scrollTo = (newPage?: number) => {
    const { offsetWidth, scrollWidth } = scrollRef.current ?? {
      offsetWidth: 0,
      scrollWidth: 0,
    };

    let left =
      typeof newPage === 'number' && newPage >= 0
        ? tilePositions[pages[newPage]]
        : scrollWidth - offsetWidth;

    // handle last tile
    if (
      newPage &&
      newPage === pages.length &&
      scrollRef?.current?.scrollWidth
    ) {
      left = scrollRef?.current?.scrollWidth;
    }

    if (scrollRef?.current?.scrollTo) {
      scrollRef?.current?.scrollTo({
        left,
        behavior: 'smooth',
      });
    }

    if (typeof newPage === 'number' && newPage >= 0) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const handlePageLayout = () => {
      const { scrollWidth, offsetWidth } = scrollRef.current ?? {
        scrollWidth: 0,
        offsetWidth: 0,
      };

      const shouldHandlePageLayout =
        length > 0 && scrollRef.current && scrollWidth > 0 && offsetWidth > 0;

      if (shouldHandlePageLayout) {
        // calculate layout on page load, page resize, or change in items
        const tileWidthOnLayout = scrollWidth / length;
        const tilesInViewOnLayout = Math.round(offsetWidth / tileWidthOnLayout);

        const numberOfPages = Math.ceil(length / tilesInViewOnLayout);
        // create an array representing each tile position (always update on resize)
        setTilePositions(
          Array.from({ length }, (_, i) => tileWidthOnLayout * i)
        );
        // update the number of visible items
        setTilesInView(tilesInViewOnLayout);
        // create an array representing pages
        if (numberOfPages > 0 && numberOfPages < 999) {
          setPages(
            Array.from(
              { length: numberOfPages },
              (_, i) => tilesInViewOnLayout * i
            )
          );
        }
        // call scroll handler to re-set pagination
        handleOnScroll();

        // update visibility of next prev arrows
        updateNextPrev();
      }
    };

    handlePageLayout();

    // reset scroll position on change items (not on layout change)
    scrollTo(0);

    window.addEventListener('resize', handlePageLayout);

    return () => window.removeEventListener('resize', handlePageLayout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  return (
    <Styled.ProductSliderWrapper>
      <Styled.ProductSlider
        data-testid="product-slider"
        ref={scrollRef}
        onScroll={handleOnScroll}
      >
        <Styled.ProductSliderTiles>
          {items.map((item, i) => (
            <Styled.ProductSliderTile
              key={i}
              data-index={i}
              data-testid="product-slider-tile-wrapper"
            >
              {item}
            </Styled.ProductSliderTile>
          ))}
        </Styled.ProductSliderTiles>
      </Styled.ProductSlider>
      {hasNavigationArrow && (
        <Styled.ProductSliderControls data-testid="product-slider-controls">
          {showPrev && (
            <Styled.ProductSliderControlsButton
              onClick={() => scrollTo(currentPage - 1)}
              $align="left"
            >
              <Styled.ProductSliderControlsButtonImg src={PrevArrow} />
            </Styled.ProductSliderControlsButton>
          )}
          {showNext && (
            <Styled.ProductSliderControlsButton
              onClick={() => scrollTo(currentPage + 1)}
              $align="right"
            >
              <Styled.ProductSliderControlsButtonImg src={NextArrow} />
            </Styled.ProductSliderControlsButton>
          )}
        </Styled.ProductSliderControls>
      )}
      {hasPaginationDot && (
        <Styled.ProductSliderPagination data-testid="product-slider-pagination">
          {pages.map((_, index) => (
            <Styled.ProductSliderPaginationDot
              $isActive={index === currentPage}
              key={index}
              onClick={() => {
                scrollTo(index);
              }}
            />
          ))}
        </Styled.ProductSliderPagination>
      )}
    </Styled.ProductSliderWrapper>
  );
};

export default ProductSlider;
