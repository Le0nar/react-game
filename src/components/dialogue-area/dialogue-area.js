import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';
import ChooseArea from '../choose-area/choose-area';
import hayakoImg from '../../images/hayako.png'


class DialoqueArea extends React.Component {
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
                {this.props.partnerName}
            </div>
            {partnerImg}
            </div>
                <div className="dialoque-area__display">
                    {currentContent}
                </div>
         </div>  
      );
    }
}
  
  
  export default DialoqueArea;
  