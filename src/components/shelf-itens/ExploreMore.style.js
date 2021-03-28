import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'
import Title from 'components/lib/titles/Title'
import Button from 'components/lib/buttons/Button'

export const StyledBook = styled.div`
  width: 160px !important;
  height: ${props => (props.arvore ? 228 : 213)}px;
  border-radius: 10px;
  margin-right: 16px;
  background: ${props => (props.arvore ? colors.primary1 : colors.idGreen1)};
  padding: 16px;
  outline: none;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 120px !important;
    height: ${props => (props.arvore ? 180 : 192)}px;

    padding: 16px 8px 8px 8px;
    margin-right: 16px;
  }
`

export const ImgStyle = styled.img`
  width: 43px;
  height: 43px;
  margin-bottom: ${props => (props.arvore ? 24 : 8)}px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
  }
`

export const TitleStyle = styled(Title)`
  color: ${colors.black5};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.bold};
  line-height: 28px;
  width: 126px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  margin-top: 0;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 0;
  }
`

export const DescriptionStyle = styled.p`
  margin: 0;
  line-height: 16px;
  font-size: ${sizes.bodySmall}px;
  color: ${colors.black5};
  font-weight: ${fontWeights.regular};
  margin-bottom: 16px;
  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: ${props => (props.arvore ? 20 : 16)}px;
  }
`

export const ButtonStyle = styled(Button)`
  border-radius: 10px;
  background: ${props => !props.arvore && colors.idGreen};

  &:hover {
    background: ${props => !props.arvore && colors.idGreenLight};
  }

  @media (max-width: ${sizes.mdScreen}px) {
    height: 32px;
  }
`
