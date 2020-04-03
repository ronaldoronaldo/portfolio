import React, { useState } from 'react'
import { Wrapper } from './League.styles'
import LeagueBoards from 'components/league/league-boards'
import { Header } from '../../components/site/header'
import { colors } from 'config/ui'

const League = () => {
  const [currentPoints, setCurrentPoints] = useState(892)
  return (
    <>
      <Header leagueHeader bgColor={colors.purple4} />
      <Wrapper>
        <LeagueBoards currentPoints={currentPoints} />
      </Wrapper>
    </>
  )
}

export default League
