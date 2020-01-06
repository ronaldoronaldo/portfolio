import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'
import Title from 'components/lib/titles/Title'
import Button from 'components/lib/buttons/Button'

export const StyledBook = styled.div`
  width: 100%;
  max-width: 160px;
  background: ${props => (props.arvore ? colors.primary1 : colors.white)};
  padding: 20px 16px 16px 16px;
  height: 228px;
  border-radius: 10px;

  @media (max-width: ${sizes.mdScreen}px) {
    padding: 10px 12px 8px 12px;
    max-width: 130px;
    height: 177px;
  }
`

export const ImgStyle = styled.img`
  width: 45px;
  height: 45px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 32px;
    height: 32px;
  }
`

export const TitleStyle = styled(Title)`
  color: ${colors.black5};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.bold};
  line-height: 1.75;
  width: 126px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 8px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 0px;
    margin-top: 0;
  }
`

export const DescriptionStyle = styled.p`
  margin: 0;
  line-height: 1.25;
  font-size: 13px;
  color: ${colors.black5};
  font-weight: ${fontWeights.regular};

  margin-bottom: 16px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 8px;
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
