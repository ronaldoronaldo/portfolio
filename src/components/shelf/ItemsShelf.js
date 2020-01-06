import React, { useState, useEffect } from 'react'
import { Book } from 'components/shelf-itens/book'
import { NewsItem } from 'components/shelf-itens/news-item'
import { CollectionsItem } from 'components/shelf-itens/collections-item'
import { ProjectsItem } from 'components/shelf-itens/projects-item'
import { DidacticCard } from 'components/shelf-itens/didactics-card'
import ExploreMore from 'components/shelf-itens/ExploreMore'
import ShelfItemDetails from 'components/shelf-itens/ShelfItemDetails'
import { Overlay } from 'styles/common/Common.styles'

import Shelf from './Shelf'

import image1 from 'assets/images/mock/Modelo_Colecao.jpg'
import image2 from 'assets/images/mock/Modelo_Colecao_2.jpg'
import image3 from 'assets/images/mock/Modelo_Colecao_3.jpg'
import image4 from 'assets/images/mock/Modelo_Colecao_4.jpg'
import image5 from 'assets/images/mock/Modelo_Colecao_5.jpg'
import image6 from 'assets/images/mock/Modelo_Colecao_6.jpg'

import books from './books.json'
import news from './news.json'
const collections = [
  { image: image4, title: 'Histórias inspiradoras' },
  { image: image1, title: 'Viajando sem sair de casa' },
  { image: image6, title: 'Para abrir o apetite' },
  { image: image5, title: 'Luz, câmera, ação!' },
  { image: image2, title: 'Aventuras animais' },
  { image: image3, title: 'Rumos do planeta' }
]

import BookImage from 'assets/images/book.svg'
import NewsImage from 'assets/images/news.svg'
const didactics = [
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore'
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    genre: 'Campo jornalístico/midiático',
    image: NewsImage
  }
]

const ItemsShelf = ({
  title,
  titleMobile,
  onClickItemShelf,
  booksShelf,
  newsShelf,
  collectionsShelf,
  projectsShelf,
  didacticsShelf,
  ...props
}) => {
  const [showShelfItemDetails, setShowShelfItemDetails] = useState(false)
  const [itemDetails, setItemDetails] = useState({})
  const [type, setType] = useState('')
  const [loading, setLoading] = useState({
    book: true,
    news: true,
    collections: true,
    projects: true,
    didactics: true
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading({
        book: false,
        news: false,
        collections: false,
        projects: false,
        didactics: false
      })
    }, 1000)
  }, [])

  const handleShowShelfItemDetails = (item, type) => {
    setItemDetails(item)
    setShowShelfItemDetails(true)
    setType(type)
  }

  const renderBooks = () => {
    return books.map((book, index) => {
      return (
        <Book
          key={index}
          book={book}
          percentage={book.percentage}
          loading={loading.book}
          onClickCover={() => handleShowShelfItemDetails(book, 'book')}
        />
      )
    })
  }

  const renderNews = () => {
    return news.map((newsItem, index) => {
      return (
        <NewsItem
          key={index}
          newsItem={newsItem}
          percentage={newsItem.percentage}
          loading={loading.news}
          onClickCover={() => handleShowShelfItemDetails(newsItem, 'newsItem')}
        />
      )
    })
  }

  const renderCollections = () => {
    return collections.map((collectionsItem, index) => {
      return (
        <CollectionsItem
          key={index}
          collectionsItem={collectionsItem}
          loading={loading.collections}
          onClickCover={onClickItemShelf}
        />
      )
    })
  }

  const renderProjects = () => {
    return collections.map((project, index) => {
      return (
        <ProjectsItem
          key={index}
          project={project}
          loading={loading.projects}
          onClickCover={() => console.log('Ok')}
        />
      )
    })
  }

  const renderDidacticsCards = () => {
    return didactics.map((didacticsCard, index) => {
      return (
        <DidacticCard
          key={index}
          didacticsCard={didacticsCard}
          loading={loading.didactics}
          onClickCover={() => console.log('Ok')}
        />
      )
    })
  }

  return (
    <>
      <Shelf
        title={title}
        titleMobile={titleMobile}
        newsShelf={newsShelf}
        {...props}
      >
        {booksShelf && renderBooks()}
        {newsShelf && renderNews()}
        {collectionsShelf && renderCollections()}
        {projectsShelf && renderProjects()}
        {didacticsShelf && renderDidacticsCards()}
        {booksShelf ? <ExploreMore arvore /> : newsShelf ? <ExploreMore /> : ''}
      </Shelf>
      <Overlay
        showOverlay={showShelfItemDetails}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {showShelfItemDetails && (
          <ShelfItemDetails
            item={itemDetails}
            setShowShelfItemDetails={setShowShelfItemDetails}
            type={type}
          />
        )}
      </Overlay>
    </>
  )
}

export default ItemsShelf
