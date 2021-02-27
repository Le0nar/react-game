import React from "react";
import "./settings-range.scss";

class SettingsRange extends React.Component {
  changeValue = () => {};
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
          defaultValue="1"
        />
      </div>
    );
  }
}

export default SettingsRange;
