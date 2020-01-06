import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledNewsItem,
  Cover,
  TitleStyle,
  DescriptionStyle,
  ContainerInfoStyle,
  ContainerImg
} from './NewsItem.style'
import { NewPlaceholder } from 'components/lib/loaders'

const NewsItem = ({ newsItem, loading, onClickCover, ...rest }) => {
  if (loading) {
    return <NewPlaceholder />
  }

  return (
    <StyledNewsItem {...rest}>
      <Cover onClick={onClickCover}>
        <ContainerImg>
          <img src={newsItem.image} alt={newsItem.name} />
        </ContainerImg>
        <ContainerInfoStyle>
          <TitleStyle>{newsItem.title}</TitleStyle>
          <DescriptionStyle>{newsItem.subtitle}</DescriptionStyle>
        </ContainerInfoStyle>
      </Cover>
    </StyledNewsItem>
  )
}

NewsItem.propTyes = {
  newsItem: PropTypes.object.isRequired,
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default NewsItem
