import React from 'react'
import { ContainerStyle } from './FlexboxGrid.styles'

const Container = ({ children, ...rest }) => (
  <ContainerStyle {...rest}>{children}</ContainerStyle>
)

export default Container
