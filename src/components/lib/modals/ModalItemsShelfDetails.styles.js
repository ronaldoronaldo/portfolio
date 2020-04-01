import styled from 'styled-components'
import { colors, sizes } from 'config/ui'
import ModalBase from './ModalBase'
import { IconButton } from 'components/lib/buttons'
import Mask from 'assets/images/mask-color.svg'
export const Container = styled(ModalBase)`
  width: 100%;
  max-width: 841px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 68px 56px 56px;
  position: relative;
  top: 32px;
  margin-bottom: 32px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 100%;
    border-radius: 0;
    top: 0;
    margin-bottom: 0px;
    min-height: 100vh;
  }

  @media (max-width: ${sizes.smScreen}px) {
    padding: 33px 5px 33px 0;
    max-width: 480px;
  }
`

export const IconButtonClose = styled(IconButton)`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 50%;
  display: block;
  top: 16px;
  right: 16px;
  z-index: 2;
  padding: 1px 0 0 1px;

  > span {
    font-size: 15px;
    color: ${colors.black5};
  }

  @media (max-width: ${sizes.mdScreen}px) {
    top: 24px;
    right: 24px;
  }
`

export const BackgroundContainerTop = styled.div`
  width: 100%;
  height: 215px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: background-color 300ms ease-in;
  background: url(${Mask}) no-repeat center 103%
    ${props =>
      props.background
        ? `rgb(${props.background.r}, 
    ${props.background.g}, 
    ${props.background.b})`
        : colors.black2};
  opacity: 0.3;
  background-size: 100%;
  border-radius: 11px 11px 0 0;
  overflow: hidden;

  @media (max-width: ${sizes.mdScreen}px) {
    border-radius: 1px 1px 0 0;
  }
`

export const ImageGetColor = styled.img`
  width: 1px;
  height: 1px;
  position: absolute;
  left: -9999px;
`
