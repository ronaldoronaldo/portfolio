import React, {useEffect, useState} from 'react'
import {
  ContainerHeaderStyle,
  ContainerActionsStyle,
  IconButtonStyle,
  SubtitleStyle,
  ModalFilterStyle
} from './SearchResults.style'
import Title from 'components/lib/titles/Title'
import { ItemsShelf } from 'components/shelf'
import { Container } from 'components/lib/grid'
import { colors } from 'config/ui'

import books from 'components/shelf/books'
import news from 'components/shelf/news.json'
import BookImage from 'assets/images/book.svg'
import NewsImage from 'assets/images/news.svg'

const didactics = [
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: BookImage,
    platform: 'arvore',
    icon: 'arvore',
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  },
  {
    title: 'Redes sociais, celular e internet: o gênero Notícia',
    subtitle: 'Campo jornalístico/midiático',
    image: NewsImage,
    degrees: ['1º ano', '2º ano', 'Ensino Médio', 'Ensino Fundamental']
  }
]

const SearchResults = props => {
  const [term, setTerm] = useState('')
  const [resultsNumber, setResultsNumber] = useState('')

  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    setTerm(props.match.params.term)
    setResultsNumber(54)
    window.scrollTo(0, 0)
  }, [])

  const handleFilter = values => {
    console.log(values)
  }

  const checkboxes = [
    {
      title: 'Category',
      options: [
        "Science",
        "Arts",
        "Self help",
        "Science fiction",
      ]
    },
    {
      title: 'School Year',
      options: [
        "1º year",
        "2º year",
        "3º year",
        "4º year",
      ]
    }
  ]

  return (
    <>
      {showFilter && (
        <ModalFilterStyle
          closeFilter={() => setShowFilter(false)}
          handleFilter={handleFilter}
          checkboxes={checkboxes}
          iconNext={true}
          title={'Filter by:'}
          handleFilterSubmit={handleFilter}
        />
      )}
      <Container>
        <ContainerHeaderStyle>
          <Title
            text={"Search results: " + term}
            textAlign="left"
            style={{ color: colors.blue, marginTop: 0, marginBottom: 0 }}
            size={4}
            sizeMobile={4}
          />
          <ContainerActionsStyle>
            <IconButtonStyle
              iconName="filter"
              text="Filters"
              invertIconPosition
              color={colors.black4}
              onClick={() => setShowFilter(true)}
              bgColor={colors.primary}
            />
          </ContainerActionsStyle>
        </ContainerHeaderStyle>
        <SubtitleStyle>
          {resultsNumber} resultados obtidos
        </SubtitleStyle>
        <ItemsShelf
          slidesToShow={7.5}
          booksShelf
          title="Books"
          data={books}
        />
        <ItemsShelf
          slidesToShow={4.7}
          newsShelf
          title="News"
          data={news}
        />
        <ItemsShelf
          slidesToShow={3.8}
          didacticsShelf
          title="Teaching Materials"
          data={didactics}
        />
      </Container>
    </>
  )
}

export default SearchResults
