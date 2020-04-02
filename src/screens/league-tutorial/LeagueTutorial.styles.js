import styled from 'styled-components'
import { fontWeights, colors, spacing, sizes } from 'config/ui'

export const Wrapper = styled.div``

export const Title = styled.div`
  font-size: 25px;
  font-weight: ${fontWeights.bold};
  color: ${colors.black6};
  margin-bottom: 26px;
  margin-left: ${spacing.small}px;
  @media (min-width: ${sizes.sScreen}px) {
    margin-left: 0;
  }
`

export const AccordionWrapper = styled.div`
  border: 0;
  border-top: 1px solid ${colors.black2};
  border-bottom: 1px solid ${colors.black2};
  @media (min-width: ${sizes.sScreen}px) {
    border: 1px solid ${colors.black2};
    border-radius: 10px;
  }
`

export const InstructionBox = styled.div`
  ${({ bgColor }) => `
    background-color: ${bgColor ? bgColor : colors.idGreen1};
    padding: ${spacing.small}px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: ${spacing.xSmall}px;
    border-radius: 5px;
  `};
`

export const InstructionNumber = styled.div`
  ${({ bgColor, color }) => `
    background-color: ${bgColor ? bgColor : colors.idGreen2};
    border-radius: 100%;
    min-height: 32px;
    min-width: 32px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: ${spacing.small}px;
    font-size: 20px;
    color: ${color ? color : colors.green3};
  `};
`

export const InstructionTextContainer = styled.div``

export const InstructionText = styled.div`
  color: ${colors.black5};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.regular};
  line-height: 28px;
`
