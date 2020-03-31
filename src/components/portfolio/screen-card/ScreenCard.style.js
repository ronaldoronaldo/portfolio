import styled  from 'styled-components'
import { fontWeights, spacing, colors } from 'config/ui'

export const CardContainer = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  margin-left: ${spacing.xSmall}px;
  margin-right: ${spacing.xSmall}px;
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
  background-color: ${colors.black4};
  height: 190px;
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
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.black1} 78%);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 130px;
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
  color: ${colors.black4};
  position: absolute;
  bottom: 0;
  line-height: 0.6;
  font-weight: ${fontWeights.bold};
`
