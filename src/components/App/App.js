import React from 'react';
import './App.scss';

import MainMenu from '../main-menu/main-menu';
import EnterName from '../enter-name/enter-name';
import GameArea from '../game-area/game-area';
import EndGame from '../end-game/end-game';
import Settings from '../settings/settings';
import Statistics from '../statistics/statistics';
import Music from '../music/music';
import soundSrc from '../../audio/swipe.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      pageName: 'MainMenu',
      partnerName: 'Hayako',
      playerName: 'Player',
      datePlace: 'Curry',
      gameTime:'00:00',
      gameScore: 0,
      currentQuestion: 0,
      currentMove: 0,
      isTimeGame: false,
      isSoundOn: false,
      isMusicOn: false,
      musicVolume: 1,
      soundVolume: 1
    };
  }

  changeState(key,value) {
    if(key === 'pageName' || key === "currentMove") {
      this.playSound();
    };
    
    this.setState({[key]: value})
  }
  playSound = () => {
    if (this.state.isSoundOn) {
      this.audio = new Audio(soundSrc);
      this.audio.play();
    }
  }

  render() {
    const mainMenu = <MainMenu onChangeState={this.changeState} />;
    const enterName = <EnterName onChangeState={this.changeState} />;
    const gameArea = (
      <GameArea onChangeState={this.changeState} {...this.state} />
    );
    const endGame = (
      <EndGame onChangeState={this.changeState} {...this.state} />
    );
    const settings = (
      <Settings onChangeState={this.changeState} {...this.state} />
    );
    const statistics = (
      <Statistics {...this.state} onChangeState={this.changeState} />
    );

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
      case 'Settings':
        currentPage = settings;
        break;
      case 'Statistics':
        currentPage = statistics;
        break;
    
      default:
        break;
    }

    return (
      <div className="App">
        {currentPage}
        <Music isMusicOn={this.state.isMusicOn}/>
      </div>
    );
  }
}

export default App;
