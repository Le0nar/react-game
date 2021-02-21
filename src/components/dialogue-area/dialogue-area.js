import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';
import ChooseArea from '../choose-area/choose-area';
import hayakoImg from '../../images/hayako.png'


class DialoqueArea extends React.Component {
  changeMove = () => {
    const currentMove = this.props.currentMove
    const currentQuestion = this.props.currentQuestion;

    this.props.onChangeState('currentMove', currentMove + 1);
    if (currentMove === 3) {
      this.props.onChangeState('currentMove', 1);
      this.props.onChangeState('currentQuestion', currentQuestion + 1);
    }
  }
  render() {
    const playerName = this.props.playerName;
    const partnerImg = <img src={hayakoImg} alt="Девочка"></img>
    const dialoguesData = this.props.dialoguesData;
    const currentContent = <DisplayText 
    content={dialoguesData.playerPhrase + playerName} />;
      
    return (
      <div className="dialoque-area">
          <div className="dialoque-area__top">    
              <div className="dialoque-area__name">
              {/* {this.props.partnerName} */}
              {this.props.playerName}
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
  