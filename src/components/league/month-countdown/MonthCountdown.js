import React, { Component } from 'react'
import { Countdown, StyledDots } from './MonthCountdown.styles'
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
    const now = Date.now()
    const days = differenceInDays(endOfMonth(now), now).toString()
    const hours = differenceInHours(endOfDay(now), now).toString()
    const minutes = differenceInMinutes(endOfHour(now), now).toString()
    const seconds = differenceInSeconds(endOfMinute(now), now).toString()

    return (
      <Countdown>
        <span>
          {this.formateInfo(days)} <span>dias</span>
        </span>
        <StyledDots>{` : `}</StyledDots>
        <span>
          {this.formateInfo(hours)} <span>horas</span>
        </span>
        <StyledDots>{` : `}</StyledDots>
        <span>
          {this.formateInfo(minutes)} <span>min</span>
        </span>
        <StyledDots>{` : `}</StyledDots>
        <span>
          {this.formateInfo(seconds)} <span>seg</span>
        </span>
      </Countdown>
    )
  }
}

export default MonthCountdown
