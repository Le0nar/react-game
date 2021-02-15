import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';
import ChooseArea from '../choose-area/choose-area';
import partnerImgSrc from '../images/hayako.png'

class DialogueArea extends React.Component {
    render() {
        // 
        const partnerName = 'Hayako'
        const partnerImg = <img src={partnerImgSrc} alt="Девочка"></img>
        // 
        return (
        <div className="dialoque-area">
            <div className="dialoque-area__top">
                <div className="dialoque-area__name">
                    {partnerName}
                </div>
                {partnerImg}
            </div>
            <div className="dialoque-area__display">
                <ChooseArea />
            </div>
        </div>
        );
    }
}

export default DialogueArea;
