import React from 'react'
import { Spinner } from 'components/lib/loaders'
import { colors } from 'config/ui'
import { Wrapper } from './SpinnerLoader.styles'

const SpinnerLoader = () => (
  <Wrapper>
    <Spinner color={colors.primary} />
  </Wrapper>
)

export default SpinnerLoader
