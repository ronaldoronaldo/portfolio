import styled from 'styled-components'
import { fontWeights, spacing, colors } from 'config/ui'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left: ${spacing.mSmall}px;
  margin-right: ${spacing.mSmall}px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HeaderBox = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ScreenImage = styled.img`
  width: 100%;
  transition: all 0.2s ease-in;
  ${CardContainer}:hover & {
    transform: scale(1.04);
  }
`

export const OpacityMask = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    ${colors.black1} 70%
  );
  position: absolute;
  bottom: -10px;
  width: 105%;
  height: 145px;
`

export const CardFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  height: 100px;
`

export const Label = styled.div`
  font-size: 17px;
  color: ${colors.black5};
`

export const Number = styled.div`
  font-size: 24px;
  color: ${colors.black5};
`

export const ScreenTitle = styled.div`
  font-size: 28px;
  color: ${colors.black2Dark};
  position: absolute;
  bottom: -16px;
  line-height: 0.6;
  font-weight: ${fontWeights.bold};
  transition: all 0.2s ease-in;
  ${CardContainer}:hover & {
    color: ${colors.black4};
  }
`
