import React from 'react';
import './game-area.scss';
import Header from '../header/header';
import DialogueArea from '../dialogue-area/dialogue-area';
import Modal from '../modal/modal';




class GameArea extends React.Component {
  render() {
    return (
      <div className="game-area">
        <Header />
        <DialogueArea />
        
        {/* <Modal /> */}
      </div>
    );
  }
}

export default GameArea;
