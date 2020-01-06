import styled from 'styled-components'
import { colors, sizes } from 'config/ui'
import { IconButton } from 'components/lib/buttons'
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

export const ContainerActionsStyle = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${sizes.lgScreen}px) {
    display: none;
  }
`

export const TitleStyle = styled(Title)`
  @media (max-width: ${sizes.mdScreen}px) {
    font-size: ${sizes.h[4].size + 1}px;
  }
`

export const LabelQuickAccessStyle = styled.p`
  font-size: 16px;
  width: 106px;
  color: ${colors.black5};
  margin-right: 16px;
`

export const GutenButtonStyle = styled(IconButton)`
  width: 185px;
  height: 48px;
  > img {
    width: 126px;
    height: 26px;
    margin-right: 0;
  }
`

export const ArvoreButtonStyle = styled(IconButton)`
  width: 185px;
  height: 48px;
  margin-right: 8px;
`
