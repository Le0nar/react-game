import React from 'react';
import './end-game.scss';


class EndGame extends React.Component {
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
            </div>
        );
    }
}

export default EndGame;