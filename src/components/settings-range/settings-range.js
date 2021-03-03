import React from "react";
import "./settings-range.scss";

class SettingsRange extends React.Component {
  changeValue = (e) => {
    this.props.onChangeState(this.props.propertyName, e.target.value)
    console.log(this.props.currentValue)
  };
  render() {
    return (
      <div className="settings-item">
        <span>{this.props.name}</span>
        <input
          className="settings-range"
          onChange={this.changeValue}
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue={this.props.currentValue}
        />
      </div>
    );
  }
}

export default SettingsRange;
