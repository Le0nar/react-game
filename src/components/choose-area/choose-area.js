import React from 'react';
import './choose-area.scss';


class ChooseArea extends React.Component {
    changeAnswer = (e) => {
    const arrow = e.key.slice(0,5);
    if (arrow === "Arrow") {
        const answerDirection = e.key.slice(5).toLowerCase();
    
        this.props.onChangeDirectionAnswer(answerDirection);
    
        this.props.addScore(answerDirection);
    
        this.props.changeMove();
    }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.changeAnswer);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.changeAnswer);
    }
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