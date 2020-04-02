import React, { Component } from 'react'
import {
  StyledDots,
  CountdownWrapper,
  UnityBox,
  UnityLabel,
  UnityNumber
} from './MonthCountdown.styles'
import {
  endOfMonth,
  endOfDay,
  endOfHour,
  endOfMinute,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from 'date-fns'

class MonthCountdown extends Component {
  interval = null

  tick = () => {
    this.forceUpdate()
  }

  formateInfo = info => (info.length === 1 ? `0${info}` : info)

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval)
  }

  render() {
    const { endDate, removeSeparators } = this.props
    const now = Date.now()
    const countdown = {
      dias: differenceInDays(
        endOfMonth(endDate ? endDate : now),
        now
      ).toString(),
      horas: differenceInHours(endOfDay(now), now).toString(),
      min: differenceInMinutes(endOfHour(now), now).toString(),
      seg: differenceInSeconds(endOfMinute(now), now).toString()
    }

    const renderUnityBox = label => {
      return (
        <UnityBox isTheFirstBox={label==='dias'}>
          <UnityNumber>{this.formateInfo(countdown[label])}</UnityNumber>
          <UnityLabel>{label}</UnityLabel>
        </UnityBox>
      )
    }

    return (
      <CountdownWrapper>
        {renderUnityBox('dias')}
        {!removeSeparators && <StyledDots>{` : `}</StyledDots>}
        {renderUnityBox('horas')}
        {!removeSeparators && <StyledDots>{` : `}</StyledDots>}
        {renderUnityBox('min')}
        {!removeSeparators && <StyledDots>{` : `}</StyledDots>}
        {renderUnityBox('seg')}
      </CountdownWrapper>
    )
  }
}

export default MonthCountdown
