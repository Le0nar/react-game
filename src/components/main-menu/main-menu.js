import React from 'react';
import './main-menu.scss';
import Footer from "../footer/footer";

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
        this.props.onChangeState('pageName','Statistics');
    }
    render() {
        return (
        <>
        <div className="main-menu">
            <ul>
                <li onClick={this.toEnterName}>New game</li>
                <li onClick={this.toSettings}>Settings</li>
                <li onClick={this.toStatistics}>Statistics</li>
            </ul>
            
        </div>
        <Footer />
        </>

        );
    }
}

export default MainMenu;
