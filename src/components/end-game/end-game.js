import React from 'react';
import './end-game.scss';
import ToMainMenuBtn from '../to-main-menu-btn/to-main-menu-btn';


class EndGame extends React.Component {
    addDataToStatistics = () => {
        let statistics = localStorage.getItem('statistics');
        if (statistics === null) {
            localStorage.setItem('statistics', '[]');
            statistics = localStorage.getItem('statistics');
        }

        const today = new Date();
        const hour = today.getHours();
        const min = today.getMinutes();
        const dateOfMonth = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const currentDate = `${hour}:${min} ${dateOfMonth}.${month}.${year}`;

        const newResult = [
          currentDate,
          this.props.playerName,
          this.props.partnerName,
          this.props.datePlace,
          this.props.gameTime,
          this.props.gameScore
        ];

        statistics = JSON.parse(statistics)
        statistics.unshift(newResult)
        
        const newStatistics = JSON.stringify(statistics)
        localStorage.setItem('statistics', newStatistics);

        const resetGameData = () => {
            this.props.onChangeState('pageName', 'MainMenu');
            this.props.onChangeState('currentQuestion', 0);
            this.props.onChangeState('currentMove', 0);
            this.props.onChangeState('gameScore', 0);
        }
        resetGameData();
    }
    
    render() {
        return (
            <div className="end-game">
                <h3>Thanks for playing the game</h3>
                <p className="end-game__text">
                    You completed the game in 
                    <span> {this.props.gameTime}.</span>
                </p>
                <p className="end-game__text">
                    You scored 
                    <span> {this.props.gameScore} points.</span>
                </p>
                <p className="end-game__text">
                    Partner :
                    <span> {this.props.partnerName}.</span> 
                </p>
                <p className="end-game__text">
                    Date place :
                    <span> {this.props.datePlace}.</span> 
                </p>
                <button onClick={this.addDataToStatistics}>
                    To main menu
                </button>
            </div>

        );
    }
}

export default EndGame;