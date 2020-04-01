import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledBook,
  TitleStyle,
  DescriptionStyle,
  ButtonStyle,
  ImgStyle
} from './ExploreMore.style'

import Book from 'assets/images/symbol-arvore.svg'
import News from 'assets/images/symbol-guten.svg'

import { redirectToPlatform } from 'utils/redirects'

const ExploreMore = ({ arvore, ...rest }) => {
  const [loadingRedirect, setLoadingRedirect] = useState(false)

  const handleRedirect = () => {
    const platform = arvore ? 'arvore' : 'guten'
    setLoadingRedirect(platform)
    redirectToPlatform(platform)
  }

  return (
    <StyledBook {...rest} arvore={arvore}>
      <ImgStyle src={arvore ? Book : News} arvore={arvore} />
      <TitleStyle
        arvore={arvore}
        text="Explore mais!"
        size={3}
        sizeMobile={3}
      />
      <DescriptionStyle arvore={arvore}>
        {arvore
          ? 'Novas leituras na Árvore de Livros!'
          : 'Leia outras notícias no Guten News!'}
      </DescriptionStyle>
      <ButtonStyle
        text="Acessar"
        size="medium"
        arvore={arvore}
        onClick={handleRedirect}
        loading={
          arvore ? loadingRedirect === 'arvore' : loadingRedirect === 'guten'
        }
      />
    </StyledBook>
  )
}

ExploreMore.propTypes = {
  arvore: PropTypes.bool
}

export default ExploreMore
