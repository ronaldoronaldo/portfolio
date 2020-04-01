import React from 'react'
import { Container, ItemText, ItemImage } from './Item.style'
import { FontIcon } from 'components/lib/icons'
import { colors, fontWeights, spacing } from 'config/ui'

const Item = ({
  onClick,
  text,
  imagePath,
  type,
  disabled,
  iconName,
  ...props
}) => {
  return (
    <Container disabled={disabled} onClick={onClick} {...props}>
      {type === 'img-left-text-left' && (
        <>
          <ItemImage disabled={disabled} src={imagePath} />
          <ItemText>{text}</ItemText>
        </>
      )}

      {type === 'icon-left-text-left' && (
        <>
          <FontIcon
            iconName={iconName}
            size={16}
            sizeMobile={16}
            color={colors.black5}
            style={{
              fontWeight: fontWeights.bold,
              marginRight: spacing.spacingSmall
            }}
          />
          <ItemText>{text}</ItemText>
        </>
      )}
    </Container>
  )
}

export default Item
