import React from 'react';
import './App.scss';

import GameArea from '../game-area/game-area';
import MainMenu from '../main-menu/main-menu';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.state = {
      currentPage: MainMenu,
      parnterName: 'Hayako',
      music:'',
      playerName: 'Player',
      gameBackground: '',
      gameTime:'',
      gameScore:''
    };
  }

  changeCurrentPage(pageName) {
    this.setState({currentPage: pageName})
  }

  render() {
    return (
      <div className="App">
        <this.state.currentPage 
        onChangeCurrentPage={this.changeCurrentPage} />
      </div>
    );
  }
}

export default App;
