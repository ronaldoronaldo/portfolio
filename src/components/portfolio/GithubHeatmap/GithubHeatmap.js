import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactTooltip from 'react-tooltip'
import GithubMonths from './GithubMonths'
import GithubTiles from './GithubTiles'
import GithubTile from './GithubTile'
import {GithubHeatmapBox, GithubHeatmapControls, GithubHeatmapHeader} from './GithubHeatmap.style'

export default class GithubHeatmap extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  constructor(props){
    super(props)
    const today = new Date()
    const { startDate, endDate } = this.findThresholdData(today.getFullYear(), today)
    const totalYearContribution = this.sumContributions(props.data, startDate, endDate)
    this.state = {
      data: props.data,
      year: today.getFullYear(),
      startsAt: today.getMonth() + 1,
      today,
      startDate,
      endDate,
      totalYearContribution
    }
  }

  sumContributions(data, startDate, endDate){
    return _.reduce(data, function (sum, row) {
      const rowData = new Date(row.date)
      rowData.setHours(0, 0, 0, 0)
      if (rowData >= startDate && rowData <= endDate){
        return sum + row.count
      }
      return sum
    }, 0)
  }

  _findMinDate(data){
    const minRow = _.minBy(data, (row) => new Date(row.date))
    return new Date(minRow.date).getFullYear()

  }

  mountSelectYears(){
    const {today, data, year} = this.state
    const minYear = this._findMinDate(data)
    let options = []
    for (let i = today.getFullYear() ; i >= minYear ; i--){
      let yearButtonClass = 'year-button-class'
      if(i === year){
        yearButtonClass += ' year-button-class-selected'
      }
      options.push(<li className={yearButtonClass} key={i} onClick={this.changeYear.bind(this, i)}><span className="year-label">{i}</span></li>)
    }
    return <ul>{options}</ul>
  }

  changeYear(year){
    const startsAt = (year === this.state.today.getFullYear()) ? this.state.today.getMonth() + 1 : 0
    const {startDate, endDate} = this.findThresholdData(year, this.state.today)
    const totalYearContribution = this.sumContributions(this.state.data, startDate, endDate)
    this.setState({ year, startsAt, startDate, endDate, totalYearContribution})
  }

  findThresholdData(year, today){
    let endDate, startDate
    if(year === today.getFullYear()){
      endDate = today
      startDate = new Date()
      startDate.setDate(startDate.getDate() - 364 - startDate.getDay())
    }else{
      endDate = new Date(year, 11, 31)
      startDate = new Date(year, 0, 1)
      startDate.setDate(startDate.getDate() - startDate.getDay())
    }
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    return {startDate, endDate}
  }

  render(){
    const { startsAt, data, startDate, endDate, year, today, totalYearContribution} = this.state
    const contributionYear = (year === today.getFullYear()) ? 'the last year' : year
    return (
      <React.Fragment>
        <GithubHeatmapHeader>
          <h2 className='total-contributions'>{totalYearContribution} contributions in {contributionYear}</h2>
        </GithubHeatmapHeader>
        <GithubHeatmapBox>
          <ReactTooltip key={`tooltip-key-${year}`} html/>

          <GithubMonths startsAt={startsAt} />
          <GithubTiles data={data} startDate={startDate} endDate={endDate}/>
          <div className='github-heatmap-footer'>
            <a className="learn-how-link" href="https://help.github.com/en/articles/why-are-my-contributions-not-showing-up-on-my-profile">Learn how we count contributions</a>
            <div className="legend">
              <span className="legend-label">Less </span>
              <div className="legend-tiles">
                <GithubTile colorTone='nothing' description/>
                <GithubTile colorTone='weak' description/>
                <GithubTile colorTone='light' description/>
                <GithubTile colorTone='normal' description/>
                <GithubTile colorTone='dark' description/>
              </div>
              <span className="legend-label">More</span>
            </div>
          </div>
        </GithubHeatmapBox>
        <GithubHeatmapControls>
          {this.mountSelectYears()}
        </GithubHeatmapControls>
      </React.Fragment>
    )
  }
}