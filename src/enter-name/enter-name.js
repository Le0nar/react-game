import React from 'react';
import './enter-name.scss';

class EnterName extends React.Component {
    constructor(props) {
        super(props)
    }
    startGame = () => {
        this.props.onChangeState('pageName','GameArea')
    }
    render() {
        return(
            <div className="enter-name">
            <h3>Введите имя</h3>
            <input autoFocus={true}/>
            <button onClick={this.startGame}>OK</button>
        </div>
        )
    }
}


export default EnterName;