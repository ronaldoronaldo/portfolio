import styled from 'styled-components'
import { AnimatedBg } from 'styles/common/Animation.styles'
import { sizes } from 'config/ui'

export const Container = styled.div`
  width: 252px
  margin-right: 16px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 228px;
  }
`

export const NewPlaceholderStyle = styled.div`
  width: 252px;
  margin-right: 16px;
  ${AnimatedBg};
  border-radius: 10px;
  height: 145px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 212px;
  }
`

export const TitlePlaceholderStyle = styled.div`
  width: 90%;
  height: 12px;
  margin-top: 8px;
  margin-bottom: 6px;
  ${AnimatedBg};
`

export const SubTitlePlaceholderStyle = styled(TitlePlaceholderStyle)`
  height: 8px;
`

export const DescriptionPlaceholderStyle = styled.div`
  width: 80%;
  height: 8px;
  ${AnimatedBg};
`
