import React from 'react';
import './App.scss';

import MainMenu from '../main-menu/main-menu';
import EnterName from '../enter-name/enter-name';
import GameArea from '../game-area/game-area';
import EndGame from '../end-game/end-game';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      pageName: 'EndGame',
      partnerName: 'Хаяко',
      playerName: 'Player',
      datePlace: 'Curry',
      gameTime:'00:00',
      gameScore: 0,
      currentQuestion: 0,
      currentMove: 0,
      isSoundOn:true
    };
  }

  changeState(key,value) {
    this.setState({[key]: value})
  }

  render() {
    const mainMenu = <MainMenu 
      onChangeState={this.changeState} />
    const enterName = <EnterName 
      onChangeState={this.changeState}/>
    const gameArea = <GameArea 
      onChangeState={this.changeState}
      {...this.state}/>
    const endGame = <EndGame 
      {...this.state}/>

    let currentPage = mainMenu
    switch (this.state.pageName) {
      case 'MainMenu':
        currentPage = mainMenu;
        break;
      case 'GameArea':
        currentPage = gameArea;
        break;
      case 'EnterName':
        currentPage = enterName;
        break;
      case 'EndGame':
        currentPage = endGame;
        break;
    
      default:
        break;
    }

    return (
      <div className="App">
        {currentPage}
      </div>
    );
  }
}

export default App;
