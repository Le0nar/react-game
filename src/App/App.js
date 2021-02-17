import React from 'react';
import './App.scss';

import GameArea from '../game-area/game-area';
import MainMenu from '../main-menu/main-menu';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: MainMenu,
      parnterName: 'Hayako',
      music:'',
      playerName: 'Player',
      gameBackground: '',
      gameTime:'',
      gameScore:''
    };
  }
  render() {
    return (
      <div className="App">
        <this.state.currentPage />
      </div>
    );
  }
}

export default App;
