import React from 'react'
import { Title, Header, GoBackButton } from './GoBackHeader.styles'
import { colors } from 'config/ui'
import FontIcon from 'components/lib/icons/FontIcon'

const GoBackHeader = ({ ...props }) => {
  const { bgColor, color, title, path } = props
  return (
    <Header bgColor={bgColor}>
      <GoBackButton to={path}>
        <FontIcon
          iconName={'arrow-left'}
          size={30}
          sizeMobile={20}
          color={colors.white}
        />
      </GoBackButton>
      <Title color={color}>{title}</Title>
    </Header>
  )
}

export default GoBackHeader
