export const LEAGUE_RANK_LEGEND = [
  {
    name: 'diamond',
    title: 'Diamond',
    startAt: 98,
    endsAt: 100
  },
  {
    name: 'platinum',
    title: 'Platinum',
    startAt: 93,
    endsAt: 98
  },
  {
    name: 'gold',
    title: 'Gold',
    startAt: 83,
    endsAt: 93
  },
  {
    name: 'silver',
    title: 'Silver',
    startAt: 60,
    endsAt: 83
  },
  {
    name: 'bronze',
    title: 'Bronze',
    startAt: 0,
    endsAt: 60
  }
]

export const COEFFICIENT_OF_TIME_SPENT_CALC = 1 / 1.3

export const getTotalPoints = totalTimeSpent =>
  Math.round(parseInt(totalTimeSpent) ** COEFFICIENT_OF_TIME_SPENT_CALC)
