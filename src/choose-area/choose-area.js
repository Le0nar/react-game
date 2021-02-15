import React from 'react';
import './choose-area.scss';
import PossibleAnswer from '../possible-answer/possible-answer';


class ChooseArea extends React.Component {
    render() {
        return (
        <div className="choose-area">
            <PossibleAnswer />
            <PossibleAnswer />
            <PossibleAnswer />
            <PossibleAnswer />
        </div>
        );
    }
}

export default ChooseArea;