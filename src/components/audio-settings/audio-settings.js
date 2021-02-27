import React from 'react';
import SettingsToggle from '../settings-toggle/settings-toggle';

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
        <SettingsToggle
          name="Sound"
          propertyName="isSoundOn"
          currentValue={this.props.isSoundOn}
          onChangeState={this.props.onChangeState}
        />
      </>
    );
  }
}

export default AudioSettings;