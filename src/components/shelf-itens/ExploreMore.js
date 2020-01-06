import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledBook,
  TitleStyle,
  DescriptionStyle,
  ButtonStyle,
  ImgStyle
} from './ExploreMore.style'

import Book from 'assets/images/book.svg'
import News from 'assets/images/news.svg'

const ExploreMore = ({ arvore, ...rest }) => {
  return (
    <StyledBook {...rest} arvore={arvore}>
      <ImgStyle src={arvore ? Book : News} />
      <TitleStyle text="Explore mais!" size={3} sizeMobile={3} />
      <DescriptionStyle>
        {arvore
          ? 'Descubra novas leituras na Árvore de Livros!'
          : 'Leia outras notícias no Guten News!'}
      </DescriptionStyle>
      <ButtonStyle
        text="Acessar"
        size="medium"
        arvore={arvore}
        onClick={() => console.log('Ok')}
      />
    </StyledBook>
  )
}

ExploreMore.propTypes = {
  arvore: PropTypes.bool
}

export default ExploreMore
