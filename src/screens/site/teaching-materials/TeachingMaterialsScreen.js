import React from 'react'
import {
  ContainerHeaderStyle,
  TitleStyle
} from './TeachingMaterialsScreen.style'
import { colors } from 'config/ui'
import { ItemsShelf } from 'components/shelf'

const TeachingMaterialsScreen = props => {
  return (
    <>
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
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para inspirar pequenos leitores (EI e EF1)"
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Planos e sequências para encantar jovens leitores (F2 e EM)"
      />
      <ItemsShelf
        slidesToShow={3.8}
        didacticsShelf
        title="Sequências didáticas para abordar temas sensíveis"
      />
    </>
  )
}

export default TeachingMaterialsScreen
