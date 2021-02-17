import React from 'react';
import './main-menu.scss';
import GameArea from '../game-area/game-area';

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    startGame = () => {
        this.props.onChangeCurrentPage(GameArea)
    }
    toMainSettings = () => {
        console.log(2)
    }
    toStatistics = () => {
        console.log(3)
    }
    render() {
        return (
        <div className="main-menu">
            <ul>
                <li onClick={this.startGame}>Новая игра</li>
                <li onClick={this.toMainSettings}>Настройки игры</li>
                <li onClick={this.toStatistics}>Статистика</li>
            </ul>
        </div>
        );
    }
}

export default MainMenu;
