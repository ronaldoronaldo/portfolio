import React from 'react'
import {
  ContainerHeaderStyle,
  ContainerActionsStyle,
  LabelQuickAccessStyle,
  GutenButtonStyle,
  ArvoreButtonStyle,
  TitleStyle
} from './BooksAndNewsScreen.style'
import { ItemsShelf } from 'components/shelf'

import { colors } from 'config/ui'
import LogoGuten from 'front-end/images/guten-news.svg'

import { redirectToPlatform } from 'utils/redirects'

const BooksAndNewsScreen = props => {
  return (
    <>
      <ContainerHeaderStyle>
        <TitleStyle
          text="O que vamos ler hoje?"
          textAlign="left"
          style={{ color: colors.blue, marginTop: 0, marginBottom: 0 }}
          size={3}
          sizeMobile={3}
        />
        <ContainerActionsStyle>
          <LabelQuickAccessStyle>Acesso rápido:</LabelQuickAccessStyle>
          <ArvoreButtonStyle
            iconImgSrc=""
            text="Arvore"
            color={colors.black4}
            onClick={() => redirectToPlatform('arvore')}
            bgColor={colors.primary}
          />
          <GutenButtonStyle
            iconImgSrc={LogoGuten}
            bgColor={colors.idGreen}
            bgColorHover={colors.idGreenLight}
            onClick={() => redirectToPlatform('guten')}
          />
        </ContainerActionsStyle>
      </ContainerHeaderStyle>
      <ItemsShelf
        booksShelf
        title="Destaques da Árvore de Livros para você"
        titleMobile="Destaques da Árvore de Livros"
      />
      <ItemsShelf
        newsShelf
        title="As atualidades do Guten News que você vai adorar"
        titleMobile="Atualidades do Guten News"
      />
      <ItemsShelf collectionsShelf title="Nossas Coleções" />
      <TitleStyle
        text="Especiais para você"
        textAlign="left"
        style={{ color: colors.blue, marginTop: 56, marginBottom: 0 }}
        size={3}
        sizeMobile={3}
      />
      <ItemsShelf
        slidesToShow={7.5}
        booksShelf
        title="Por que você leu a matéria “Natureza em perigo”"
      />
      <ItemsShelf
        newsShelf
        title="Por que você leu o livro “Para educar crianças feministas”"
      />
    </>
  )
}

export default BooksAndNewsScreen
