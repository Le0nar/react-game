import React from "react";
import "./game-area.scss";
import Header from "../header/header";
import DialoqueArea from "../dialogue-area/dialogue-area";
import Modal from "../modal/modal";
import dialoguesData from "../../data/dialogues.json";

class GameArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalOn: false,
      timeLeft: 60,
    };
  }
  showModal = (e) => {
    if (e.key === "Escape") {
      this.toggleModal();
    }
  }
  toggleModal = () => {
    this.setState({ isModalOn: !this.state.isModalOn });
  };

  updateTime = () => {
    if (this.props.gameTime === "01:00") {
      this.props.onChangeState("pageName", "EndGame");
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.showModal);
    if (this.props.isTimeGame === true) {
      this.timerID = setInterval(() => this.updateTime(), 1000);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.showModal);
    clearInterval(this.timerID);

  }
  render() {
    const modal = (
      <Modal
        {...this.props}
        onChangeState={this.props.onChangeState}
        toggleModal={this.toggleModal}
      />
    );
    return (
      <div className="game-area" onClick={this.addListener}>
        <Header
          onChangeState={this.props.onChangeState}
          gameScore={this.props.gameScore}
          gameTime={this.props.gameTime}
        />
        <DialoqueArea {...this.props} dialoguesData={dialoguesData} />
        {this.state.isModalOn ? modal : false}
      </div>
    );
  }
}

export default GameArea;
