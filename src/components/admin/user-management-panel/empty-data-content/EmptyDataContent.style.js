import styled from 'styled-components'
import { colors } from 'config/ui'

import { IconButton } from 'components/lib/buttons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 99vh;
  min-height: 568px;
  margin-top: -60px;
`

export const DescriptionStyle = styled.p`
  max-width: 418px;
  text-align: center;
  color: ${colors.black3};
  margin: 0;
  margin-bottom: 22px;
`

export const IconButtonStyle = styled(IconButton)`
  width: 188px;

  span {
    margin-right: 16px;
  }
`
