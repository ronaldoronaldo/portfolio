import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledDidacticCard,
  Cover,
  TitleStyle,
  HeaderCardStyle,
  ImageStyle,
  GenreStyle,
  TitleRecommendedForStyle,
  ContainerTagsStyle,
  TagStyleCustom
} from './DidacticCard.style'
import { NewPlaceholder } from 'components/lib/loaders'

const DidacticCard = ({ didacticsCard, loading, onClickCover, ...rest }) => {
  if (loading) {
    return <NewPlaceholder />
  }

  return (
    <StyledDidacticCard {...rest}>
      <Cover onClick={onClickCover} platform={didacticsCard.platform}>
        <HeaderCardStyle>
          <TitleStyle>{didacticsCard.title}</TitleStyle>
          <ImageStyle
            src={didacticsCard.image}
            platform={didacticsCard.platform}
          />
        </HeaderCardStyle>
        <GenreStyle>{didacticsCard.genre}</GenreStyle>
        <TitleRecommendedForStyle>Recomendado para: </TitleRecommendedForStyle>
        <ContainerTagsStyle>
          <TagStyleCustom text={'1º ano'} noIcon />
          <TagStyleCustom text={'2º ano'} noIcon />
        </ContainerTagsStyle>
      </Cover>
    </StyledDidacticCard>
  )
}

DidacticCard.propTyes = {
  didacticsCard: PropTypes.object.isRequired,
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default DidacticCard
