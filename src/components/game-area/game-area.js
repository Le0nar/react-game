import React from 'react';
import './game-area.scss';
import Header from '../header/header';
import DialogueArea from '../dialogue-area/dialogue-area';
import Modal from '../modal/modal';




const GameArea = (props) => {
    return (
      <div className="game-area">
        <Header />
        <DialogueArea 
        {...props}/>
        
        {/* <Modal /> */}
      </div>
    );
}


export default GameArea;
