import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.black2};
  cursor: pointer;
  &:first-child {
    border: 0;
  }
`

export const AccordionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 18px 0 16px;
`

export const AccordionHeader = styled.div`
  font-size: ${sizes.text}px;
  display: flex;
`

export const AccordionHeaderTitle = styled.h3`
  font-size: ${sizes.text}px;
  color: ${colors.black6};
  font-weight: ${fontWeights.bold};
  margin-left: 0 0 0 5px;
`

export const AccordionContent = styled.div`
  ${({ isOpen }) => `
    max-height: ${isOpen ? '500px' : '0'};
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, margin 0.3s linear;
    font-size: ${sizes.text};
    line-height: 28px;
    margin: 0 16px ${isOpen ? '30px' : '10px'}  16px;
  `};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black5};
  ${props => props.isOpen && 'transform: rotate(90deg);'};
`
