import React from 'react'

import {
  Container,
  DescriptionStyle,
  IconButtonStyle
} from './EmptyDataContent.style'
import { Title } from 'components/lib/titles'
import { FontIcon } from 'components/lib/icons'

import PropTypes from 'prop-types'

const EmptyDataContent = ({
  title,
  description,
  textButton,
  onClick,
  iconName,
  iconButton
}) => {
  return (
    <Container>
      <FontIcon iconName={iconName} size={95} sizeMobile={50} color="#DEE1E6" />
      <Title
        text={title}
        size={3}
        sizeMobile={3}
        style={{ marginTop: 28, marginBottom: 8 }}
      />
      <DescriptionStyle>{description}</DescriptionStyle>
      {textButton &&
        <IconButtonStyle
          text={textButton}
          iconName={iconButton}
          iconSize={16}
          primary
          onClick={onClick}
        />
      }
    </Container>
  )
}

EmptyDataContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  onClick: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconButton: PropTypes.string
}

export default EmptyDataContent
