import React, { useEffect, useState } from 'react'
import { colors } from 'config/ui'

import { ShowTagsContainer, Tag, ShowTagsLabel } from './ShowTags.styles'
import FontIcon from 'components/lib/icons/FontIcon'

const ShowTags = ({ tags, removeTag, label, style }) => {
  const [haveTags, setHaveTags] = useState(false)

  useEffect(() => {
    tags.length > 0 ? setHaveTags(true) : setHaveTags(false)
  }, [tags])

  const removeItem = index => {
    if (tags.length <= 1) {
      setHaveTags(false)
    }
    removeTag(index)
  }

  return (
    <ShowTagsContainer style={style}>
      <ShowTagsLabel haveTags={haveTags}>{label}</ShowTagsLabel>
      {tags.map((tag, index) => {
        return (
          <Tag key={index}>
            {tag}
            <FontIcon
              iconName={'cancel'}
              onClick={() => removeItem(index)}
              size={8}
              sizeMobile={8}
              style={{
                marginLeft: 8,
                color: colors.purple3,
                cursor: 'pointer'
              }}
            />
          </Tag>
        )
      })}
    </ShowTagsContainer>
  )
}

export default ShowTags
