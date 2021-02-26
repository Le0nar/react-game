import React from 'react';
import soundSrc from '../../music/Komiku-Road-2-Chill.mp3';

class MusicBtn extends React.Component {
     constructor(props){
         super(props)
         this.state = {isSoundOn : false}
     }
    toggleSound = () => {
        this.setState({isSoundOn: !this.state.isSoundOn});

    }
    render() {
        const x = 0.1
        const content = this.state.isSoundOn ? 'Sound On' : 'Sound Off';
        const audio = <audio  autoPlay  src={soundSrc} loop/>

        return (
          <>
            <button onClick={this.toggleSound} className="sound-btn">
              {content}
            </button>
            {this.state.isSoundOn ? audio : false}
          </>
        );
    }
}

export default MusicBtn;