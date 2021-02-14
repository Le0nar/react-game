import React from 'react';
import './dialogue-area.scss';
import DisplayText from '../display-text/display-text';


class DialogueArea extends React.Component {
    render() {
        return (
        <div className="dialoque-area">
            <div className="dialoque-area__name">
                123
            </div>
            <div className="dialoque-area__display">
                <DisplayText />
            </div>
        </div>
        );
    }
}

export default DialogueArea;
