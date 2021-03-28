import React, { useState, useEffect } from 'react'
import {
  Container,
  ContainerHeaderStyle,
  TitleStyle
} from './TeachingMaterialsScreen.style'
import { colors } from 'config/ui'
import { ItemsShelf } from 'components/shelf'
import { withApollo } from 'react-apollo'

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


const TeachingMaterialsScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoadingData(false)
      setData(didactics)
    }, 500)
  }, [])

  return (
    <Container>
      <ContainerHeaderStyle>
        <TitleStyle
          text="Promova a leitura em sala de aula"
          textAlign="left"
          style={{ color: colors.blue, marginTop: 0, marginBottom: 0 }}
          size={3}
          sizeMobile={3}
        />
      </ContainerHeaderStyle>
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para inspirar pequenos leitores (EI e EF1)"
        data={data}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para encantar jovens leitores (F2 e EM)"
        data={data}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Sequências didáticas para abordar temas sensíveis"
        data={data}
        loading={loadingData}
      />
    </Container>
  )
}

export default withApollo(TeachingMaterialsScreen)
