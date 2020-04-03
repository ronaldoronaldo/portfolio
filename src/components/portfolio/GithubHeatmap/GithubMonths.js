import React from 'react';
import PropTypes from 'prop-types';

export default class GithubMonths extends React.PureComponent {
    static propTypes = {
        startsAt: PropTypes.number.isRequired
    };
    static months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    formatMonths(startsAt){
        let formattedMonths = [];
        for(let i = startsAt; i < startsAt + 12; i++){
            formattedMonths.push(GithubMonths.months[i%12]);
        }
        return formattedMonths;
    }

    render(){
        const { startsAt } = this.props;
        const formattedMonths = this.formatMonths(startsAt);
        return (
            <div className='github-months-box'>
                {formattedMonths.map((month) => {
                    return <div key={month} className='github-months-box-item'>{month}</div>
                    })
                }
            </div>
        );
    }
}