import React from "react";
import "./enter-name.scss";

class EnterName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerName: "Player" };
  }

  handleChange = (event) => {
    this.setState({ playerName: event.target.value });
  }

  changePlayerName = () => {
    const currentName = this.state.playerName
    if (currentName === "") {
      return "Player";
    } else {
      return currentName;
    }
  }

  startGameByPressing = (e) => {
    if (e.key === "Enter") {
        this.startGame();
    }
  }

  startGame = () => {
    this.props.onChangeState("pageName", "GameArea");
    const currentPlayerName = this.changePlayerName(this.state.playerName);
    this.props.onChangeState("playerName", currentPlayerName);

    this.props.setGameBackround();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.startGameByPressing);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.startGameByPressing);
  }

  render() {
    return (
      <div className="enter-name">
        <h3>Please enter your name</h3>
        <input autoFocus={true} onChange={this.handleChange} />
        <button onClick={this.startGame}>OK</button>
      </div>
    );
  }
}

export default EnterName;
