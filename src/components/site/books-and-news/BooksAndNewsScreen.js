import React, { useState, useEffect } from 'react'
import {
  Container,
  ContainerHeaderStyle,
  ContainerActionsStyle,
  LabelQuickAccessStyle,
  GutenButtonStyle,
  ArvoreButtonStyle,
  TitleStyle
} from './BooksAndNewsScreen.style'
import { ItemsShelf } from 'components/shelf'

import { colors } from 'config/ui'
import LogoGuten from 'assets/images/logo-guten-white.svg'
import LogoArvore from 'assets/images/logo-arvore.svg'

import { redirectToPlatform } from 'utils/redirects'

import { withApollo } from 'react-apollo'
import {
  getBooksAndNewsRecommendationsQuery,
  getArvoreRecommendationsQuery,
  getGutenRecommendationsQuery,
  getBooksAndNewsQuery
} from 'api/queries'

const BooksAndNewsScreen = ({ client, ...props }) => {
  const [data, setData] = useState(null)
  const [recommendations, setRecommendations] = useState(null)
  const [loadingData, setLoadingData] = useState(true)
  const [loadingRecommendations, setLoadingRecommendations] = useState(true)
  const [loadingRedirect, setLoadingRedirect] = useState(false)

  const handleGetContents = () => {
    client
      .query({
        query: getBooksAndNewsQuery
      })
      .then(res => {
        setData(res.data)
        setLoadingData(false)
      })
      .catch(err => {})
  }

  const handleGetRecommendations = () => {
    if (!loadingData) {
      const { categoryIds: categoryIdsArvore, title: termArvore } = data
        .contentsArvore.lastViewedBook
        ? data.contentsArvore.lastViewedBook
        : []
      const { categoryIds: categoryIdsGuten, title: termGuten } = data
        .contentsGuten.lastViewedBook
        ? data.contentsGuten.lastViewedBook
        : []

      if (categoryIdsArvore && categoryIdsGuten) {
        getRecommendation(getBooksAndNewsRecommendationsQuery, {
          categoryIdsArvore,
          termArvore,
          categoryIdsGuten,
          termGuten
        })
      }

      if (categoryIdsArvore && !categoryIdsGuten) {
        getRecommendation(getGutenRecommendationsQuery, {
          categoryIdsArvore,
          termArvore
        })
      }

      if (categoryIdsGuten && !categoryIdsArvore) {
        getRecommendation(getArvoreRecommendationsQuery, {
          categoryIdsGuten,
          termGuten
        })
      }
    }
  }

  const getRecommendation = (query, vars) => {
    client
      .query({
        query: query,
        variables: vars
      })
      .then(res => {
        setRecommendations(res.data)
        setLoadingRecommendations(false)
      })
      .catch(err => {
        console.log('RES', err)
      })
  }

  useEffect(() => {
    handleGetContents()
    handleGetRecommendations()
  }, [loadingData])

  const handleRedirectToPlatform = platform => {
    setLoadingRedirect(platform)
    redirectToPlatform(platform)
  }

  const haveRecommendations =
    (data && data.contentsGuten.lastViewedBook) ||
    (data && data.contentsArvore.lastViewedBook)

  return (
    <Container>
      <ContainerHeaderStyle>
        <TitleStyle
          text="O que vamos ler hoje?"
          textAlign="left"
          style={{ color: colors.blue3, marginTop: 0, marginBottom: 0 }}
          size={3}
          sizeMobile={3}
        />
        <ContainerActionsStyle>
          <LabelQuickAccessStyle>Acesso rápido:</LabelQuickAccessStyle>
          <ArvoreButtonStyle
            iconImgSrc={LogoArvore}
            color={colors.black4}
            bgColorHover={colors.primaryLight}
            onClick={() => handleRedirectToPlatform('arvore')}
            bgColor={colors.primary}
            loading={loadingRedirect === 'arvore'}
          />
          <GutenButtonStyle
            iconImgSrc={LogoGuten}
            bgColor={colors.idGreen}
            bgColorHover={colors.idGreenLight}
            onClick={() => handleRedirectToPlatform('guten')}
            loading={loadingRedirect === 'guten'}
          />
        </ContainerActionsStyle>
      </ContainerHeaderStyle>
      <ItemsShelf
        booksShelf
        exploreMore
        title="Destaques da Árvore de Livros para você"
        titleMobile="Destaques da Árvore de Livros"
        data={data && data.contentsArvore.highlights}
        loading={loadingData}
      />
      <ItemsShelf
        newsShelf
        exploreMore
        title="As atualidades do Guten News que você vai adorar"
        titleMobile="Atualidades do Guten News"
        data={data && data.contentsGuten.highlights}
        loading={loadingData}
      />
      {/* <ItemsShelf collectionsShelf title="Nossas Coleções" /> */}
      {haveRecommendations && (
        <TitleStyle
          text="Especiais para você"
          textAlign="left"
          style={{ color: colors.blue3, marginTop: 56, marginBottom: 0 }}
          size={3}
          sizeMobile={3}
        />
      )}
      {data && data.contentsGuten.lastViewedBook && (
        <ItemsShelf
          slidesToShow={7.5}
          booksShelf
          exploreMore
          title={`Por que você leu a matéria “${data.contentsGuten.lastViewedBook.title}”`}
          data={recommendations && recommendations.recommendationsForArvore}
          loading={loadingRecommendations}
        />
      )}
      {data && data.contentsArvore.lastViewedBook && (
        <ItemsShelf
          newsShelf
          exploreMore
          title={`Por que você leu o livro “${data.contentsArvore.lastViewedBook.title}” `}
          data={recommendations && recommendations.recommendationsForGuten}
          loading={loadingRecommendations}
        />
      )}
    </Container>
  )
}

export default withApollo(BooksAndNewsScreen)
