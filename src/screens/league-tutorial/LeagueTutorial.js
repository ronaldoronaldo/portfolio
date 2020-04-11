import React, { Component } from 'react'
import {
  Title,
  AccordionWrapper,
  InstructionBox,
  InstructionNumber,
  InstructionText,
  InstructionTextContainer,
  Spacing
} from './LeagueTutorial.styles'
import ComboAccordion from 'components/league/combo-accordion/ComboAccordion'
import { Column, Grid, Row } from 'components/league/flexboxgrid'
import { Header } from '../../components/site/header'
import { colors } from '../../config/ui'

const renderSection = instructions => {
  return instructions.map((instruction, index) => {
    return (
      <InstructionBox>
        <InstructionNumber>{index + 1}</InstructionNumber>
        <InstructionTextContainer>
          <InstructionText>{instruction}</InstructionText>
        </InstructionTextContainer>
      </InstructionBox>
    )
  })
}

const sections = [
  {
    title: 'O que é a Liga?',
    content: renderSection([
      'A Liga é a celebração dos maiores leitores da Árvore: todos os alunos de escolas clientes participam do torneio na plataforma.',
      'Ao fim de cada mês, premiamos os três melhores leitores do ranking nacional de cada segmento escolar.'
    ]),
    isOpen: false,
    id: 0
  },
  {
    title: 'Como começar?',
    content:
      'Para participar da Liga você precisa acumular 80 pontos em leituras. A partir daí, você já estará participando!',
    isOpen: false,
    id: 1
  },
  {
    title: 'Como ganhar pontos?',
    content: renderSection([
      'O primeiro passo é escolher um livro e iniciar a leitura. Os pontos são conquistados a partir dos livros lidos na plataforma.',
      'Quanto mais você lê, mais pontos vai somando na Liga. Lembre-se: leia o que você gosta para que a leitura seja prazerosa e os pontos serão consequência.'
    ]),
    isOpen: false,
    id: 2
  },
  {
    title: 'Como ver os pontos?',
    content: renderSection([
      'Você visualiza seus pontos, os rankings e sua colocação clicando na aba "LIGA" na página inicial do seu perfil.',
      'Se você não visualiza seus pontos e sua posição na Liga é porque, provavelmente, você ainda não somou pontos de leitura'
    ]),
    isOpen: false,
    id: 3
  },
  {
    title: 'O que são os níveis da Liga?',
    content:
      'A Liga de Leitores é composta pelos níveis Bronze, Prata, Ouro, Platina e Diamante. Todos os participantes começam em Bronze e, quanto mais lêem e acumulam pontos, evoluem para novos níveis.',
    isOpen: false,
    id: 4
  },
  {
    title: 'Como os meus pontos são atualizados?',
    content:
      'A leitura precisa ser computada pelo nosso sistema para depois ser atualizada no ranking. Esse tempo de atualização varia com a quantidade de alunos lendo ao mesmo tempo na plataforma.',
    isOpen: false,
    id: 5
  },
  {
    title: 'Como funciona o Ranking?',
    content: renderSection([
      'Ao longo do mês, mostramos a sua colocação no ranking da Liga, que pode variar conforme você e os outros leitores vão somando pontos ao realizar as leituras.',
      'A Liga é uma competição mensal: a pontuação é zerada ao fim de cada mês e reinicia no mês seguinte. Divulgamos o ranking final para as escolas e nas nossas redes sociais.',
      'Ao fim de cada mês, analisamos os padrões de leitura de milhares de alunos da Árvore. Com isso, o nosso sistema pode detectar e desclassificar padrões não usuais de leitura, o que pode gerar mudanças no ranking final.'
    ]),
    isOpen: false,
    id: 6
  }
]

class LeagueTutorial extends Component {
  state = { sections: sections }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleSectionClick(index) {
    let newSections = [...this.state.sections]
    const clickedSection = newSections[index]

    if (clickedSection.isOpen) {
      newSections[index].isOpen = false
      this.setState({
        sections: newSections
      })
    } else {
      newSections.forEach(section => {
        section.isOpen = false
      })
      newSections[index].isOpen = true
      this.setState({
        sections: newSections
      })
    }
  }

  render() {
    return (
      <>
        <Header leagueHeader bgColor={colors.purple4} />
        <Spacing />
        <Grid>
          <Row>
            <Column s={12} m={10} l={8} xl={6} style={{ padding: 0 }}>
              <Title>Como funciona a Liga</Title>
              <AccordionWrapper>
                {sections.map((section, index) => (
                  <ComboAccordion
                    isOpen={section.isOpen}
                    key={index}
                    headerTitle={section.title}
                    handleClick={this.handleSectionClick.bind(this, index)}
                  >
                    {section.content}
                  </ComboAccordion>
                ))}
              </AccordionWrapper>
            </Column>
          </Row>
        </Grid>
      </>
    )
  }
}

export default LeagueTutorial
