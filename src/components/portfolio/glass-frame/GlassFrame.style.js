import styled, {css} from 'styled-components'
import { colors } from 'config/ui'
import {sizes} from "../../../config/ui"

export const FrameContainer = styled.div`
  display: flex;
  border: 4px solid ${colors.red2};
  position: relative;
  overflow: hidden;
  margin: 0 8px 16px 8px;
  box-shadow: 0 6px 25px 0 rgba(83, 101, 111, 0.2);
`

export const ReflexMask = styled.div`
  ${({animate}) => css`
    display: flex;
    position: absolute;
    top: -100%;
    left: -100%;
    width: 80%;
    height:100%;
    transition: left 0.8s ease-out;
    z-index: 10;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,0.5) 50%,
      transparent 100%
    );
    
    @media (min-width: ${sizes.smdScreen}px) {
      top: ${animate ? 0 : -100}%;
      left: ${animate ? 100 : -100}%;
    }
  `}
`
