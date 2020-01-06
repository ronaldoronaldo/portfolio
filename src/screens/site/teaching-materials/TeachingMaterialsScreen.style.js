import styled from 'styled-components'
import { sizes } from 'config/ui'
import Title from 'components/lib/titles/Title'

export const ContainerHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;

  @media (max-width: ${sizes.smScreen}px) {
    margin-bottom: 16px;
    padding-right: 16px;
  }
`

export const TitleStyle = styled(Title)`
  @media (max-width: ${sizes.mdScreen}px) {
    font-size: ${sizes.h[4].size + 1}px;
  }
`
