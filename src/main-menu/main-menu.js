import React from 'react';
import './main-menu.scss';


class MainMenu extends React.Component {
    startGame = () => {
        console.log(1)
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
