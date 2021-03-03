import React from "react";
import SettingsToggle from "../settings-toggle/settings-toggle";
import SettingsRange from "../settings-range/settings-range";

class AudioSettings extends React.Component {
  render() {
    return (
      <>
        <SettingsToggle
          name="Music"
          propertyName="isMusicOn"
          currentValue={this.props.isMusicOn}
          onChangeState={this.props.onChangeState}
        />
        <SettingsRange
          name="Music volume"
          propertyName="musicVolume"
          currentValue={this.props.musicVolume}
          onChangeState={this.props.onChangeState}
        />
        <SettingsToggle
          name="Sound"
          propertyName="isSoundOn"
          currentValue={this.props.isSoundOn}
          onChangeState={this.props.onChangeState}
        />
        <SettingsRange
          name="Sound volume"
          propertyName="soundVolume"  
          currentValue={this.props.soundVolume}
          onChangeState={this.props.onChangeState}
        />
      </>
    );
  }
}

export default AudioSettings;
