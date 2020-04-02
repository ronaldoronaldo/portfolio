import React from 'react'
import {
  HistoryItem,
  HistoryItemBody,
  HistoryItemFooter,
  HistoryItemMonth,
  HistoryItemPointsLabel,
  RankStatus,
  HistoryItemPointsNumber,
  RankPosition,
  RankTier,
  HistoryItemIcon,
  MonthGhost,
  MonthGhostIcon,
  MonthGhostLabel
} from './RankingHistoryCard.styles'
import { LEAGUE_RANK_LEGEND } from 'utils/league'
import {colors} from 'config/ui'
import {FontIcon} from "../../lib/icons"

// start months at index 1 to prevent month+1
const months = [
  '',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const RankingHistoryCard = ({ item, index }) => {

  // const currentMonth = new Date().getMonth() + 1

  if (item.month >= 10) {
    return (
      <MonthGhost key={index}>
        <FontIcon iconName={'time'} size={34} sizeMobile={34} color={colors.gray4}/>
        <MonthGhostLabel>{months[item.month]}</MonthGhostLabel>
      </MonthGhost>
    )
  }

  const declassified = item.tier === 'declassified'
  const waitingResults = item.tier === 'waiting'
  const didNotParticipate = item.points < 80
  const userReachedTheLeague = !didNotParticipate && !declassified && !waitingResults
  const noPointsFooter = didNotParticipate || declassified
  const iconColor = declassified ? colors.red2 : colors.gray1
  const itemIcon = declassified ? 'clear' :
    waitingResults ? 'autorenew' : 'highlight_off'

  const footerBgColor = userReachedTheLeague ? colors.purple3 :
    declassified ? colors.red2 : colors.black3

  const rankStatus = declassified ?
    'Infelizmente nesse mês você foi suspenso da liga' :
    waitingResults ?
      'O resultado oficial sairá até o dia 05 deste mês' :
      false

  const tier = declassified ? 'Participação suspensa' :
    waitingResults ?
      'Resultado' :
      didNotParticipate ?
        'Não participou' :
        LEAGUE_RANK_LEGEND.find(data => data.name === item.tier).title



  return (
    <HistoryItem
      key={index}
      data-tut={index === 0 ? 'reactour__league-history' : ''}
    >
      <HistoryItemBody declassified={declassified} >
        {
          userReachedTheLeague ?
            <img
              src={`https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/${item.tier.toLowerCase()}.png`}
              alt={tier}
            />
          :
            <HistoryItemIcon
              className={'icon-' + itemIcon}
              iconColor={iconColor}
            />
        }
        <RankTier>
          {tier}
        </RankTier>
        { rankStatus && <RankStatus>{rankStatus}</RankStatus> }
        {
          userReachedTheLeague &&
          <RankPosition>{item.rankPosition}º colocado</RankPosition>
        }
      </HistoryItemBody>
      <HistoryItemFooter bgColor={footerBgColor} noPointsFooter={noPointsFooter}>
        <HistoryItemMonth>{months[item.month]}</HistoryItemMonth>
        {
          !noPointsFooter &&
          <span>
            <HistoryItemPointsNumber>
              {item.points}
            </HistoryItemPointsNumber>
            <HistoryItemPointsLabel>pts</HistoryItemPointsLabel>
          </span>
        }
      </HistoryItemFooter>
    </HistoryItem>
  )
}

export default RankingHistoryCard
