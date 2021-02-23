import React from 'react';
import Timer from '../timer/timer';
import './scoreboard.scss';

class Scoreboard extends React.Component {
    render () {
        const gameTime = this.props.gameTime;
        const gameTimeEl = <Timer gameTime={gameTime} onChangeState={this.props.onChangeState}/>;
        const gameScoreEl = <>{this.props.gameScore}</>
        const isTimeBoard = this.props.isTimeBoard;
        return(
            <div className="scoreboard">
            <span>{isTimeBoard ? 'Время: ' : 'Очки: '}</span>
            {isTimeBoard ? gameTimeEl :gameScoreEl}
        </div>
        )
    }
}

export default Scoreboard;