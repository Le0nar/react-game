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

        const newResult = [
          this.props.playerName,
          this.props.partnerName,
          this.props.datePlace,
          this.props.gameTime,
          this.props.gameScore
        ];

        statistics = JSON.parse(statistics)
        statistics.push(newResult)
        
        const newStatistics = JSON.stringify(statistics)
        localStorage.setItem('statistics', newStatistics);

        const restartGame = () => {
            this.props.onChangeState('pageName', 'MainMenu');
            this.props.onChangeState('currentQuestion', 0);
            this.props.onChangeState('currentMove', 0);
            this.props.onChangeState('gameScore', 0);
        }
        restartGame();
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