import React from 'react';
import './App.scss';

import MainMenu from '../main-menu/main-menu';
import EnterName from '../enter-name/enter-name';
import GameArea from '../game-area/game-area';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.state = {
      pageName: 'MainMenu',
      parnterName: 'Hayako',
      music:'',
      playerName: 'Player',
      gameBackground: '',
      gameTime:'',
      gameScore:''
    };
  }

  changeCurrentPage(name) {
    this.setState({pageName: name})
  }

  render() {
    const mainMenu = <MainMenu 
      onChangeCurrentPage={this.changeCurrentPage} />
    const enterName = <EnterName />
    const gameArea = <GameArea 
      parnterName = {this.state.parnterName} />

    let currentPage = mainMenu
    switch (this.state.pageName) {
      case 'MainMenu':
        currentPage = mainMenu;
        break;
      case 'GameArea':
        currentPage = gameArea;
        break;
      case 'EnterName':
        currentPage = enterName;
        break;
    
      default:
        break;
    }

    return (
      <div className="App">
        {currentPage}
      </div>
    );
  }
}

export default App;
