import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledDidacticCard,
  LineColor,
  Cover,
  TitleStyle,
  HeaderCardStyle,
  ImageStyle,
  GenreStyle,
  TitleRecommendedForStyle,
  ContainerTagsStyle,
  TagStyleCustom,
  ViewMore
} from './DidacticCard.style'
import { DidacticsCardPlaceholder } from 'components/lib/loaders'
import { redirectToPlatform } from 'utils/redirects'

import BookImage from 'assets/images/symbol-arvore.svg'
import NewsImage from 'assets/images/symbol-guten.svg'

const DidacticCard = ({ didacticsCard, loading, ...rest }) => {
  if (loading) {
    return <DidacticsCardPlaceholder />
  }

  return (
    <StyledDidacticCard {...rest}>
      <Cover platform={didacticsCard.icon}>
        <LineColor platform={didacticsCard.icon} />
        <HeaderCardStyle>
          <TitleStyle platform={didacticsCard.icon}>
            {didacticsCard.title}
          </TitleStyle>
          <ImageStyle
            src={didacticsCard.icon === 'arvore' ? BookImage : NewsImage}
            platform={didacticsCard.icon}
          />
        </HeaderCardStyle>
        <GenreStyle>
          {didacticsCard.icon === 'arvore'
            ? didacticsCard.subtitle
            : 'Campo jornalístico/midiático'}
        </GenreStyle>
        {didacticsCard.degrees && (
          <>
            <TitleRecommendedForStyle>
              Recomendado para:
            </TitleRecommendedForStyle>
            <ContainerTagsStyle>
              {didacticsCard.degrees.slice(0, 2).map(item => {
                return <TagStyleCustom key={item} text={`${item}`} noIcon />
              })}
              {didacticsCard.degrees.length > 2 && (
                <ViewMore>+{didacticsCard.degrees.length - 2}</ViewMore>
              )}
            </ContainerTagsStyle>
          </>
        )}
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
