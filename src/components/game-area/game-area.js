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
  nextQuestion = () => {
    this.props.onChangeState('currentQuestion', this.props.currentQuestion + 1);
  }
  nextPhrase = () => {
    // if (dialoquesData.playerPhrase) return dialoquesData.questions[i].partnerPhrase
    // if (dialoquesData.questions[i].partnerPhrase) return варианты ответа
    // if (dialoquesData.questions[i].answers.[ответ].answer) return dialoquesData.questions[i].answers.[ответ].reaction
    // addScore(/dialoquesData.questions[i].answers.[ответ].score/)

    // if (this.propsCurrentQuesion < 4) {
        // nextQuesiotn()
    // } else {
    //              sumUp
    // }
  }

  render() {
    return (
    <div className="game-area"
      onClick={this.nextPhrase}>
      <Header />
      <DialoqueArea 
      {...this.props}
      dialoguesData = {dialoguesData} />
    </div>
    );
  }
}


export default GameArea;
