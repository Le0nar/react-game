import React from 'react';
import './choose-area.scss';


class ChooseArea extends React.Component {
    render() {
        return (
        <div className="choose-area" 
        onClick={this.props.onChangeCurrentAnswer}>
            <div className="choose-area__possible-answer"
                data-answer = 'left'>
                <span>←</span>
                <span>{this.props.content.left.answer}</span>
            </div>
            <div className="choose-area__possible-answer"
                data-answer = 'up'>
                <span>↑</span>
                <span>{this.props.content.up.answer}</span>
            </div>
            <div className="choose-area__possible-answer"
                data-answer = 'right'>
                <span>→</span>
                <span>{this.props.content.right.answer}</span>
            </div>
            <div className="choose-area__possible-answer"
                data-answer = 'down'>
                <span>↓</span>
                <span>{this.props.content.down.answer}</span>
            </div>
        </div>
        );
    }
}

export default ChooseArea;