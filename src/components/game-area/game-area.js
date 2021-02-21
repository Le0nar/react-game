import React from 'react';
import './game-area.scss';
import Header from '../header/header';
import DialoqueArea from '../dialogue-area/dialogue-area';
import Modal from '../modal/modal';
import dialoguesData from '../../data/dialogues.json'

class GameArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="game-area"
      onClick={this.addListener}>
      <Header />
      <DialoqueArea 
      {...this.props}
      dialoguesData = {dialoguesData} />
    </div>
    );
  }
}


export default GameArea;
