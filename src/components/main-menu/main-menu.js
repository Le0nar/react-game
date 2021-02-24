import React from 'react';
import './main-menu.scss';

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    toEnterName = () => {
        this.props.onChangeState('pageName','EnterName');
    }
    toSettings = () => {
        this.props.onChangeState('pageName','Settings');
    }
    toStatistics = () => {
        console.log(3)
    }
    render() {
        return (
        <div className="main-menu">
            <ul>
                <li onClick={this.toEnterName}>Новая игра</li>
                <li onClick={this.toSettings}>Настройки игры</li>
                <li onClick={this.toStatistics}>Статистика</li>
            </ul>
        </div>
        );
    }
}

export default MainMenu;
