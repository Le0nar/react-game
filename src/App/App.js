import React from 'react';
import './App.scss';

import GameArea from '../game-area/game-area';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GameArea />
      </div>
    );
  }
}

export default App;
