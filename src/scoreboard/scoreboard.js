import React from 'react';
import './scoreboard.scss';

class Scoreboard extends React.Component {
    render () {
        // add state for score and time
        const isTimeBoard = this.props.isTimeBoard;
        let num = isTimeBoard ? '0:00' : '0';
        return(
            <div className="scoreboard">
            <span>{isTimeBoard ? 'Время: ' : 'Очки: '}</span>
            <span>{num}</span>
        </div>
        )
    }
}

export default Scoreboard;