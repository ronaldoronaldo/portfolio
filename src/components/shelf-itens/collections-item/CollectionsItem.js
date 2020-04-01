import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCollectionsItem,
  Cover,
  ContText,
  ContImg
} from './CollectionsItem.style'
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
    <StyledCollectionsItem {...rest}>
      <Cover onClick={handleNewsItemClick} title={collectionsItem.title}>
        <ContImg>
          <img src={collectionsItem.image} />
        </ContImg>
        <ContText>{collectionsItem.title}</ContText>
      </Cover>
    </StyledCollectionsItem>
  )
}

CollectionsItem.propTyes = {
  collectionsItem: PropTypes.object.isRequired,
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default CollectionsItem
