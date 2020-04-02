import React from 'react'
import { Wrapper, Title, Description } from './LeagueVacation.styles'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'

const LeagueVacation = () => (
  <Wrapper>
    <FontIcon color={colors.gray1} size={185} iconName="calendar_today_sharp" />
    <Title>A Liga de Leitores da Árvore está de férias!</Title>
    <Description>
      Em março, o maior campeonato de leitura do país estará de volta com novos
      desafios.
    </Description>
    <Description>Mas você não precisa ficar sem ler!</Description>
    <Description noBottom={true}>
      Que tal aproveitar esse tempo para descobrir ainda mais histórias aqui na
      Árvore?
    </Description>
    <Description noTop={true}>
      Escolha um livro e se jogue na leitura.
    </Description>
  </Wrapper>
)

export default LeagueVacation
