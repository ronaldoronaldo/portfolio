import React, { useState, useEffect } from 'react'
import {
  Container,
  ContainerHeaderStyle,
  TitleStyle
} from './TeachingMaterialsScreen.style'
import { colors } from 'config/ui'
import { ItemsShelf } from 'components/shelf'
import { withApollo } from 'react-apollo'
import { getTeachinMaterialsDataQuery } from 'api/queries'

const TeachingMaterialsScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    client
      .query({
        query: getTeachinMaterialsDataQuery
      })
      .then(res => {
        setData(res.data)
        setLoadingData(false)
      })
      .catch(err => {})
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
        slidesToShow={3}
        projectsShelf
        title="Projetos para despertar grandes leitores"
        data={data.readingProjects}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para inspirar pequenos leitores (EI e EF1)"
        data={data.teachingMaterial && data.teachingMaterial.kinderGarden}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para encantar jovens leitores (F2 e EM)"
        data={data.teachingMaterial && data.teachingMaterial.highSchool}
        loading={loadingData}
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Sequências didáticas para abordar temas sensíveis"
        data={data.teachingMaterial && data.teachingMaterial.sensiveThemes}
        loading={loadingData}
      />
    </Container>
  )
}

export default withApollo(TeachingMaterialsScreen)
