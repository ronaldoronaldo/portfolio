import React from 'react'
import { ContainerStyle, ContainerFluidStyle } from './FlexboxGrid.styles'

const Container = ({ children, ...rest }) => (
  <ContainerStyle {...rest}>{children}</ContainerStyle>
)

const ContainerFluid = ({ children, ...rest }) => (
  <ContainerFluidStyle {...rest}>{children}</ContainerFluidStyle>
)

export default Container
export { ContainerFluid }
