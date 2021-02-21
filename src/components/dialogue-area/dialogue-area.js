import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';
import ChooseArea from '../choose-area/choose-area';
import hayakoImg from '../../images/hayako.png'


class DialoqueArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswer: 'left',
      isPlayerName: true
    }
  }
  changeMove = () => {
    const currentMove = this.props.currentMove;
    const currentQuestion = this.props.currentQuestion;

    this.props.onChangeState('currentMove', currentMove + 1);
    this.setState({isPlayerName: !this.state.isPlayerName})
    if (currentMove === 3) {
      this.setState({isPlayerName: false})
      this.props.onChangeState('currentMove', 1);
      this.props.onChangeState('currentQuestion', currentQuestion + 1);
    }

    
  }
  render() {
    const playerName = this.props.playerName;
    const partnerImg = <img src={hayakoImg} alt="Девочка"></img>
    const dialoguesData = this.props.dialoguesData;

    const startPhrase = <DisplayText 
    content={dialoguesData.playerPhrase + playerName} />;

    let currentContent = startPhrase;
    let currentQuestion = this.props.currentQuestion;
    const currentAnswer = this.state.currentAnswer;

    if (this.props.currentMove === 0) {
      currentQuestion = this.props.currentQuestion
    } else if (this.props.currentMove === 1) {
      currentContent = <DisplayText 
      content={dialoguesData.questions[currentQuestion].partnerPhrase} />;
    }else if (this.props.currentMove === 2) {
      currentContent = <DisplayText 
      content='Варианты ответов' />;
    } else if (this.props.currentMove === 3) {
      currentContent = <DisplayText 
      content={dialoguesData.questions[currentQuestion].answers[currentAnswer].reaction} />;
    }
    
    const currentName = this.state.isPlayerName ? this.props.playerName : this.props.partnerName;
    return (
      <div className="dialoque-area">
          <div className="dialoque-area__top">    
              <div className="dialoque-area__name">
              {currentName}
          </div>
          {partnerImg}
          </div>
              <div className="dialoque-area__display">
                  {currentContent}
                  <button onClick={this.changeMove}>
                    Далее
                  </button>
              </div>
        </div>  
    );
  }
}
  
  
  export default DialoqueArea;