import React from 'react';
import './App.scss';
// import MainMenu from '../main-menu/main-menu';
// import EnterName from '../enter-name/enter-name';
// import Header from '../header/header';
import DialogueArea from '../dialogue-area/dialogue-area';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DialogueArea />
      </div>
    );
  }
}

export default App;
