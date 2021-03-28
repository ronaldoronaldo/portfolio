import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GithubTile from './GithubTile';

export default class GithubTiles extends React.PureComponent {
    static propTypes = {
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        data: PropTypes.array.isRequired
    };

    mountTiles(filteredData){
        const { startDate, endDate } = this.props;

        const relation = this._findFrequencyRelation(filteredData);

        let currentDate = new Date(startDate);
        let tiles = [];
        let column = [];
        let counter = 0;
        let week = 0;
        while (currentDate <= endDate){
            const copiedDate = new Date(currentDate);
            const count = this._findCount(filteredData, currentDate);
            let tile = <GithubTile key={`tile-${currentDate.toISOString()}`} tooltip date={copiedDate} contributions={count} colorTone={this._findColor(relation, count)}/>
            column.push(tile);
            counter++;
            if (counter === 7){
                tiles.push(<div key={`week-${week}`} className='github-tiles-column'>{column}</div>)
                week++;
                column = [];
                counter = 0;
            }
            currentDate.setDate(currentDate.getDate() + 1 );
            currentDate.setHours(0, 0, 0, 0);
        }
        if (counter > 0) {
            tiles.push(<div key={`week-${week}`} className='github-tiles-column'>{column}</div>)
        }
        return tiles;
    }

    _findFrequencyRelation(filteredData){
        const contributions = _.map(filteredData, 'count');
        const max = _.max(contributions);
        if (max <= 5){
            return {high: 4, medium: 3, low: 2, veryLow: 1};
        }
        return { high: max, medium: max / 4 * 3, low: max / 4 * 2, veryLow: max / 4 };
    }

    _findCount(filteredData, currentDate){
        let month = currentDate.getMonth() + 1;
        month = (month < 10) ? `0${month}`: `${month}`;

        let day = currentDate.getDate();
        day = (day < 10) ? `0${day}` : `${day}`;

        const currentFormattedDate = `${currentDate.getFullYear()}-${month}-${day}`;
        const count = _.find(filteredData, {date: currentFormattedDate});
        return (count) ? count.count : 0;
    }

    _findColor(relation, count){
        if (count === relation.high){
            return 'dark';
        }
        if (count > relation.medium){
            return 'normal';
        }
        if (count > relation.low) {
            return 'light';
        }
        if (count === 0 ){
            return 'nothing';
        }
        return 'weak'
    }

    filterData(){
        const { startDate, endDate, data } = this.props;
        return _.filter(data, (row) => {
            const rowDate = new Date(row.date);
            return rowDate >= startDate && rowDate <= endDate;
        });
    }

    render(){
        const filteredData = this.filterData();
        return (
            <div className='github-tiles'>
                {this.mountTiles(filteredData)}
            </div>
        );
    }
}