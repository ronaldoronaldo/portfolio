import React, { useState } from 'react'
import { Wrapper } from './League.styles'
import LeagueBoards from 'components/league/league-boards'

const League = () => {
  const [currentPoints, setCurrentPoints] = useState(892)
  return (
    <Wrapper>
      <LeagueBoards currentPoints={currentPoints} />
    </Wrapper>
  )
}

export default League
