import React from 'react'
import PropTypes from 'prop-types'
import { StyledNewsItem, Cover } from './CollectionsItem.style'
import { CollectionPlaceholder } from 'components/lib/loaders'

const CollectionsItem = ({
  collectionsItem,
  loading,
  onClickCover,
  ...rest
}) => {
  const handleNewsItemClick = () => {
    console.log('Ok')
    // onClickCover && onClickCover(newsItem.slug)
  }

  if (loading) {
    return <CollectionPlaceholder />
  }

  return (
    <StyledNewsItem {...rest}>
      <Cover onClick={handleNewsItemClick} title={collectionsItem.title}>
        <img src={collectionsItem.image} />
      </Cover>
    </StyledNewsItem>
  )
}

CollectionsItem.propTyes = {
  collectionsItem: PropTypes.object.isRequired,
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default CollectionsItem
