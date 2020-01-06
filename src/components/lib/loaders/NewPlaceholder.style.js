import styled from 'styled-components'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const NewPlaceholderStyle = styled.div`
  ${AnimatedBg};
  width: 100%;
  max-width: 244px;
  height: 145px;
`

export const TitlePlaceholderStyle = styled.div`
  width: 180px;
  height: 12px;
  margin-top: 8px;
  margin-bottom: 6px;
  ${AnimatedBg};
`

export const SubTitlePlaceholderStyle = styled(TitlePlaceholderStyle)`
  height: 8px;
`

export const DescriptionPlaceholderStyle = styled.div`
  width: 150px;
  height: 8px;
  ${AnimatedBg};
`
