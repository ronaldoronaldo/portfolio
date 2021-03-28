import styled from 'styled-components'
import { sizes, shadows } from 'config/ui'

export const StyledBook = styled.div`
  width: 152px;
  height: 228px;
  margin-right: 16px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 120px;
    height: 180px;
    margin-right: 8px;
  }
`

export const Cover = styled.a`
  width: 152px;
  height: 228px;
  display: block;
  border-radius: ${sizes.radius}px;
  position: relative;
  transition: all 0.2s ease-in;

  cursor: pointer;
  > img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    border-radius: 1px 10px 10px 1px;
  }

  &:hover {
    transform: scale(1.04);
    position: relative;
    z-index: 3;
    box-shadow: ${shadows.shadowDown6};
    opacity: 0.75;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    width: 120px;
    height: 180px;
  }
`

export const Mask = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: 152px;
`
