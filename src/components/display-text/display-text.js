import React, { Fragment } from 'react';
import './display-text.scss';


class DisplayText extends React.Component {
    render() {
        return (
        <p className="display-text">
            {this.props.content}
        </p>
        );
    }
}

export default DisplayText;
