import styled, { css } from 'styled-components'
import { colors, sizes } from 'config/ui'

export const Wrapper = styled.div`
  overflow-y: none;
  top: 0;
  left: 0;
  width: 100vw;

  z-index: 10;
  display: flex;
  position: fixed;
  justify-content: center;
  overflow-y: auto;
  min-height: 100vh;
  max-height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${sizes.mdScreen}px) {
    width: auto;
    max-width: 100%;
    transform: translate(-50%);
    left: 50%;
  }
`

export const StyledModal = styled.div`
  ${({ width, banner }) => css`
    background-color: ${colors.white};
    border-radius: ${sizes.radius}px;
    outline: none;
    z-index: 1002;
    pointer-events: all;
    height: 100%;
    position: relative;
    width: 90%;

    @media (min-width: ${sizes.mediumScreen}px) {
      width: auto;
    }

    ${width && `width: ${width};`};

    ${banner &&
      `        
        background-color: transparent;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.2);

        @media(max-width: ${sizes.mScreen}px) {
          width: 94%;
          max-widht: 94%;
        }

      `};
  `};
`
