import React from 'react';
import './enter-name.scss';

class EnterName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playerName : 'Player'}
    }
    handleChange = (event) => {
        this.setState({playerName: event.target.value})
    }
    changePlayerName = currentValue => {
        if (currentValue === '') {
            return 'Player';
        } else {
            return currentValue
        }
    }
    startGame = () => {
        this.props.onChangeState('pageName','GameArea');
        const currentPlayerName = this.changePlayerName(this.state.playerName);
        this.props.onChangeState('playerName', currentPlayerName);

        this.props.setGameBackround()
    }
    render() {
        return(
            <div className="enter-name">
                <h3>Введите имя</h3>
                <input autoFocus={true} onChange={this.handleChange} />
                <button onClick={this.startGame}>OK</button>
            </div>
        )
    }
}


export default EnterName;