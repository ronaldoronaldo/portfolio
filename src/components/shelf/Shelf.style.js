import styled from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'

export const ShelfWrapper = styled.section`
  margin: 32px 0;

  @media (max-width: ${sizes.smScreen}px) {
    margin-top: 16px;
  }
`

export const Header = styled.div`
  margin-bottom: 16px;
`

export const TitleStyle = styled.div`
    color: ${colors.black6};
    margin: 0;
    font-weight: ${fontWeights.bold};
    line-height: 1.75;
    font-size: 20px;
  
  &::before {
    content: '${props => props.title}'; 
  }
  

  @media (max-width: ${sizes.smScreen}px) {
    font-size: 16px;
    padding-right: 16px;

    &::before {
      content: '${props =>
        props.titleMobile ? props.titleMobile : props.title}'; 
    }
  }
`
