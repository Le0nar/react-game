import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';
import ChooseArea from '../choose-area/choose-area';
import hayakoImg from '../../images/hayako.png'
import dialoguesData from '../../data/dialogs.json'

class DialogueArea extends React.Component {
    render() {
        console.log(dialoguesData)
        const partnerImg = <img src={hayakoImg} alt="Девочка"></img>

        return (
        <div className="dialoque-area">
            <div className="dialoque-area__top">
                <div className="dialoque-area__name">
                    {this.props.partnerName}
                </div>
                {partnerImg}
            </div>
            <div className="dialoque-area__display">
                <DisplayText 
                content={dialoguesData.questions[0].partnerPhrase} />
            </div>
        </div>
        );
    }
}

export default DialogueArea;
