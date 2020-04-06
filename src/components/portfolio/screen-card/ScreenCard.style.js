import styled from 'styled-components'
import { fontWeights, spacing, colors, sizes } from 'config/ui'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left: 0;
  margin-right: 0;
  display: none;
  margin-bottom: ${spacing.large}px;
  position: relative;
  min-height: 143px;
  border: 3px solid ${colors.black2Dark};
  transition: all 0.2s ease-in;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${sizes.mScreen}px) {
    width: 33%;
    margin-left: ${spacing.mSmall}px;
    margin-right: ${spacing.mSmall}px;
    margin-bottom: ${spacing.small}px;
    height: 464px;
    display: flex;
  }
`

export const CardContainerMobile = styled(CardContainer)`
  display: flex;
  @media (min-width: ${sizes.mScreen}px) {
    display: none;
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
`

export const OpacityMask = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    ${colors.black1} 78%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;

  @media (min-width: ${sizes.sScreen}px) {
    height: 145px;
  }
`

export const ScreenTitle = styled.div`
  font-size: 28px;
  color: ${colors.black3Light};
  position: absolute;
  bottom: -6px;
  line-height: 0.6;
  font-weight: ${fontWeights.bold};
  transition: all 0.2s ease-in;
  padding: 0 16px;
  text-align: center;
  background-color: ${colors.black1};
  ${CardContainer}:hover & {
    color: ${colors.black4};
  }
`
