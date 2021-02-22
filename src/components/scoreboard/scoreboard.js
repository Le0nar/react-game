import React from 'react';
import './scoreboard.scss';

class Scoreboard extends React.Component {
    render () {
        const gameScore = this.props.gameScore;
        const gameTime = this.props.gameTime;
        const isTimeBoard = this.props.isTimeBoard;
        let num = isTimeBoard ? gameTime : gameScore;
        
        return(
            <div className="scoreboard">
            <span>{isTimeBoard ? 'Время: ' : 'Очки: '}</span>
            <span>{num}</span>
        </div>
        )
    }
}

export default Scoreboard;