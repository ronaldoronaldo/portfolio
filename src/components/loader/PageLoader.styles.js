import styled, { css, keyframes } from 'styled-components'
import { colors } from 'config/ui'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const rotate = keyframes`
  0% {
      transform: rotate(0)
  }
  50% {
      transform: rotate(180deg)
  }
  100% {
      transform: rotate(360deg)
  }
}
`

export const BallRotate = styled.div`
  > div,
  > div:after,
  > div:before {
    background-color: ${colors.primary};
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }

  position: relative;

  > div {
    position: relative;
    margin: 2px;
    animation-fill-mode: both;
  }

  > div:first-child {
    ${css`
      animation: ${rotate} 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
    `}
  }

  > div:after,
  > div:before {
    margin: 2px;
    content: '';
    position: absolute;
    opacity: 0.8;
  }

  > div:before {
    top: 0;
    left: -28px;
  }

  > div:after {
    top: 0;
    left: 25px;
  }
`

export const StyledPageLoader = styled.div`
  ${({ active }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    z-index: 11;

    ${active === true
      ? css`
          animation: ${fadeIn} 150ms linear forwards;
        `
      : css`
          animation: ${fadeOut} 150ms linear forwards;
        `};
  `};
`
