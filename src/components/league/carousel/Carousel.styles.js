import styled, { css } from 'styled-components'
import { sizes } from 'config/ui'

export const SliderWrapper = styled.div`
  ${({ forceAlignLeftAndHideArrows, hideArrowRight }) => css`
    position: relative;
    margin-bottom: 40px;

    * {
      min-height: 0;
      min-width: 0;
    }

    .slick-list {
      overflow: hidden;
    }

    .slick-slider {
      position: relative;
    }

    .slick-track {
      display: flex;
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .slick-disabled {
      display: none !important;
    }

    @media (max-width: ${sizes.sScreen}px) {
      padding: 0;
      margin-bottom: 0;

      .slick-arrow {
        display: none !important;
      }
    }

    ${forceAlignLeftAndHideArrows &&
      `
    .slick-track {
      transform: translateX(0) !important;
    }

    .slick-arrow {
      display: none !important;
    }
  `} ${hideArrowRight &&
      `
    .slick-next {
      display: none !important;
    }
  `};
  `};
`
