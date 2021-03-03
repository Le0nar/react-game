import React from 'react';
import './settings-toggle.scss';


class SettingsToggle extends React.Component {
    changeValue = () => {
        this.props.onChangeState(this.props.propertyName, !this.props.currentValue);
    }
    render() {
        let value;
        if (this.props.currentValue) {
            value = "On"
        } else {
            value = "Off"
        }
        return (
            <label className="settings-item" onClick={this.changeValue}>
                <span>{this.props.name}</span>
                <span>{value}</span>
            </label>
        )
    }
}

export default SettingsToggle;