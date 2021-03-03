import React from "react";
import "./App.scss";

import MainMenu from "../main-menu/main-menu";
import EnterName from "../enter-name/enter-name";
import GameArea from "../game-area/game-area";
import EndGame from "../end-game/end-game";
import Settings from "../settings/settings";
import Statistics from "../statistics/statistics";
import Music from "../music/music";
import soundSrc from "../../audio/swipe.mp3";

import defaultBgImg from "../../images/backgrounds/default.png";
import sicilyBgImg from "../../images/backgrounds/sicily.png";
import curryBgImg from "../../images/backgrounds/curry.png";
import springBgImg from "../../images/backgrounds/spring.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      pageName: "MainMenu",
      partnerName: "Hayako",
      playerName: "Player",
      datePlace: "Curry",
      gameTime: "00:00",
      gameScore: 0,
      currentQuestion: 0,
      currentMove: 0,
      isTimeGame: false,
      isSoundOn: false,
      isMusicOn: false,
      musicVolume: 1,
      soundVolume: 1,
      backgroundImg: "default",
    };
  }

  changeState(key, value) {
    if (key === "pageName" || key === "currentMove") {
      this.playSound();
    }

    this.setState({ [key]: value });
  }

  setGameBackround = () => {
    const value = this.state.datePlace.toLowerCase();
    this.setState({ backgroundImg: value });
  };

  playSound = () => {
    if (this.state.isSoundOn) {
      this.audio = new Audio(soundSrc);
      this.audio.volume=this.state.soundVolume;
      this.audio.play();
    }
  };

  render() {
    const mainMenu = <MainMenu onChangeState={this.changeState} />;
    const enterName = (
      <EnterName
        onChangeState={this.changeState}
        setGameBackround={this.setGameBackround}
      />
    );
    const gameArea = (
      <GameArea onChangeState={this.changeState} {...this.state} />
    );
    const endGame = (
      <EndGame onChangeState={this.changeState} {...this.state} />
    );
    const settings = (
      <Settings onChangeState={this.changeState} {...this.state} />
    );
    const statistics = (
      <Statistics {...this.state} onChangeState={this.changeState} />
    );

    let currentPage = mainMenu;
    switch (this.state.pageName) {
      case "MainMenu":
        currentPage = mainMenu;
        break;
      case "GameArea":
        currentPage = gameArea;
        break;
      case "EnterName":
        currentPage = enterName;
        break;
      case "EndGame":
        currentPage = endGame;
        break;
      case "Settings":
        currentPage = settings;
        break;
      case "Statistics":
        currentPage = statistics;
        break;

      default:
        break;
    }

    let pathBgImage = defaultBgImg;
    switch (this.state.backgroundImg) {
      case "default":
        pathBgImage = defaultBgImg;
        break;
      case "sicily":
        pathBgImage = sicilyBgImg;
        break;
      case "spring":
        pathBgImage = springBgImg;
        break;
      case "curry":
        pathBgImage = curryBgImg;
        break;

      default:
        break;
    }

    return (
      <div
        className="app"
        style={{ backgroundImage: "url(" + pathBgImage + ")" }}
      >
        {currentPage}
        <Music
          isMusicOn={this.state.isMusicOn}
          musicVolume={this.state.musicVolume}
        />
      </div>
    );
  }
}

export default App;
