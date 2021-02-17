import React from 'react';
import './choose-area.scss';


class ChooseArea extends React.Component {
    render() {
        return (
        <div className="choose-area">
            <div className="choose-area__possible-answer">
                <span>←</span>
                <span>Да, конечно</span>
            </div>
            <div className="choose-area__possible-answer">
                <span>←</span>
                <span>Да, конечно</span>
            </div>
            <div className="choose-area__possible-answer">
                <span>←</span>
                <span>Да, конечно</span>
            </div>
            <div className="choose-area__possible-answer">
                <span>←</span>
                <span>Да, конечно</span>
            </div>
        </div>
        );
    }
}

export default ChooseArea;