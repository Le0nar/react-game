import React from "react";
import "./to-main-menu-btn.scss";

class ToMainMenuBtn extends React.Component {
  goToMainMenu = () => {
    this.props.onChangeState("pageName", "MainMenu");
  };
  render() {
    return <button onClick={this.goToMainMenu}>{this.props.content}</button>;
  }
}

export default ToMainMenuBtn;
