import React from 'react';
import PropTypes from 'prop-types';

export default class GithubTile extends React.PureComponent {
    static propTypes = {
        contributions: PropTypes.number,
        date: PropTypes.instanceOf(Date),
        colorTone: PropTypes.string.isRequired,
        description: PropTypes.bool
    };

    static months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    render(){
        const {contributions, date, colorTone, description = false} = this.props;
        const contributionsText = (contributions > 0) ? contributions : 'No';
        
        let text;
        if (description){
            text = '<p>A summary of pull requests, issues opened, and commits to the default and gh-pages branchs.</p>'
        }else{
            const dateText = `${GithubTile.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            text = `<p><b>${contributionsText} contributions </b> on ${dateText}</p>`;
        }
        return <div className={`github-tile github-color-tone-${colorTone}`} data-tip={text}/>
    }
}