import React from 'react'
import {
  Container,
  TopWrapper,
  MidWrapper,
  BotWrapper,
  Title,
  Subtitle,
  BotText,
  MidText,
  RoundIconContainerTop,
  RoundIconContainerBot,
  DivisionImageTop,
  DivisionImageBot,
  StyledGrid,
  StyledColumn
} from './LeagueVacation.styles'
import { colors, sizes } from 'config/ui'
import MonthCountdown from 'components/league/month-countdown'
import bookOpen from 'assets/images/portfolio/book-open.svg'
import trophy from 'assets/images/portfolio/trophy.svg'
import { Row } from 'components/league/flexboxgrid'
import { ThemeProvider } from "styled-components"

const vacationTheme = {
  wrapper: {
    width: '100%',
    padding: '0 0 0 0',
    marginLeft: '15px',
    marginLeftBig: '25px'
  },
  box: {
    width: '60.8px',
    widthBig: '103px',
    height: '78.3px',
    heightBig: '132.6px',
    padding: '6px 0',
    marginLeft: '14.5px',
    marginLeftBig: '25px',
    bgColor: colors.white,
    borderRadius: '7.4px'
  },
  number: {
    fontSize: 34.2,
    fontSizeBig: 58,
    color: colors.leagueOnVacationPurple1
  },
  label: {
    fontSize: sizes.bodySmall,
    fontSizeBig: 22,
    color: colors.leagueOnVacationPurple1
  }
}

const LeagueVacation = () => {
  const now = new Date()
  const month = now.getMonth()
  const year = month < 2 ? now.getFullYear() : now.getFullYear() + 1
  const vacationEndDate = new Date(year, month - 1)

  return (

          <Container>
            <TopWrapper>
              {/*<StyledGoBackHeader bgColor={colors.leagueOnVacationPurple1} />*/}
              <Title>A Liga de Leitores está de férias!</Title>
              <Subtitle>Estamos contando os dias para o retorno da Liga:</Subtitle>
              <ThemeProvider theme={vacationTheme}>
                <MonthCountdown endDate={vacationEndDate} removeSeparators />
              </ThemeProvider>
              <RoundIconContainerTop>
                <img alt={''} src={trophy} />
              </RoundIconContainerTop>
              <DivisionImageTop
                src={
                  'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/curva-dep-baixo_2.png'
                }
              />
            </TopWrapper>
            <MidWrapper>
              <MidText>
                A partir de 01 de março de 2020, a Liga estará de volta e novos
                desafios serão lançados. Aguarde as novidades!
              </MidText>
            </MidWrapper>
            <BotWrapper>
              <DivisionImageBot
                src={
                  'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/curva-dep-baixo.png'
                }
              />
              <RoundIconContainerBot>
                <img alt={''} src={bookOpen} />
              </RoundIconContainerBot>
              <BotText>
                Enquanto isso, aproveite para relaxar e ler seus livros preferidos na
                Árvore.
              </BotText>
            </BotWrapper>
          </Container>

  )
}

export default LeagueVacation
