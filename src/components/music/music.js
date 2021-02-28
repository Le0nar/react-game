import React from 'react';
import soundSrc from '../../audio/Komiku-Road-2-Chill.mp3';

class Music extends React.Component {
  render() {
    const audio = <audio autoPlay src={soundSrc} volume={0}/>;
    return this.props.isMusicOn ? audio : false;
  }
}

export default Music;