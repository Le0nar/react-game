import React from 'react';
import './game-area.scss';
import Header from '../header/header';
import DialogueArea from '../dialogue-area/dialogue-area';




class GameArea extends React.Component {
  render() {
    return (
      <div className="game-area">
        <Header />
        <DialogueArea />
      </div>
    );
  }
}

export default GameArea;
