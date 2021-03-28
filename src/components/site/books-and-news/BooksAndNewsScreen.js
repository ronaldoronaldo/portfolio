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
import { withApollo } from 'react-apollo'
import image1 from 'assets/images/mock/Modelo_Colecao.jpg'
import image2 from 'assets/images/mock/Modelo_Colecao_2.jpg'
import image3 from 'assets/images/mock/Modelo_Colecao_3.jpg'
import image4 from 'assets/images/mock/Modelo_Colecao_4.jpg'
import image5 from 'assets/images/mock/Modelo_Colecao_5.jpg'
import image6 from 'assets/images/mock/Modelo_Colecao_6.jpg'

import books from 'components/shelf/books'
import news from 'components/shelf/news.json'

const booksClone = [...books]
const newsClone = [...news]

const collections = [
  { image: image4, title: 'Histórias inspiradoras' },
  { image: image1, title: 'Viajando sem sair de casa' },
  { image: image6, title: 'Para abrir o apetite' },
  { image: image5, title: 'Luz, câmera, ação!' },
  { image: image2, title: 'Aventuras animais' },
  { image: image3, title: 'Rumos do planeta' }
]

const BooksAndNewsScreen = ({ client, ...props }) => {
  const [loadingData, setLoadingData] = useState(true)
  const [loadingRecommendations, setLoadingRecommendations] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setLoadingData(false)
      setLoadingRecommendations(false)
    }, 2000)
  }, [loadingData])

  return (
    <Container>
      <ContainerHeaderStyle>
        <TitleStyle
          text="What are we going to read?"
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
            onClick={() => console.log('arvore')}
            bgColor={colors.primary}
            loading={false}
          />
          <GutenButtonStyle
            iconImgSrc={LogoGuten}
            bgColor={colors.idGreen}
            bgColorHover={colors.idGreenLight}
            onClick={() => console.log('guten')}
            loading={false}
          />
        </ContainerActionsStyle>
      </ContainerHeaderStyle>
      <ItemsShelf
        booksShelf
        exploreMore
        title="Trending books for you"
        titleMobile="Trending books"
        data={booksClone}
        loading={loadingData}
      />
      <ItemsShelf
        newsShelf
        exploreMore
        title="Most recent news that you will love"
        titleMobile="Atualidades do Guten News"
        data={newsClone}
        loading={loadingData}
      />
      <ItemsShelf
        collectionsShelf
        title="Our Collections"
        data={collections}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={7.5}
        booksShelf
        exploreMore
        data={books.reverse()}
        title={`Because you read the book “O Menino Maluquinho” `}
        loading={loadingRecommendations}
      />
      <ItemsShelf
        newsShelf
        exploreMore
        data={news.reverse()}
        title={`Because you read the news “Descobertas literárias”`}
        loading={loadingRecommendations}
      />
    </Container>
  )
}

export default withApollo(BooksAndNewsScreen)
