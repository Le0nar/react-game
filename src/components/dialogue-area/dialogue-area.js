import React from "react";
import "./dialogue-area.scss";
import DisplayText from "../display-text/display-text";
import ChooseArea from "../choose-area/choose-area";
import hayakoImg from "../../images/partners/hayako.png";
import nekoImg from "../../images/partners/neko.png";
import yukiImg from "../../images/partners/yuki.png";

class DialoqueArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswer: "left",
      isPlayerName: true,
      isBtnActive: true,
    };
  }

  changeCurrentAnswer = (e) => {
    let answerDirection;

    if (e.target.dataset.answer === undefined) {
      answerDirection = e.target.parentElement.dataset.answer;
    } else {
      answerDirection = e.target.dataset.answer;
    }

    this.changeDirectionAnswer(answerDirection);

    this.addScore(answerDirection);

    this.changeMove();
  };

  changeDirectionAnswer = (direction) => {
    this.setState({ currentAnswer: direction });
  };

  addScore = (direction) => {
    const currentQuestion = this.props.currentQuestion;
    const dialoguesData = this.props.dialoguesData;
    const questionScore =
      dialoguesData.questions[currentQuestion].answers[direction].score;

    this.props.onChangeState(
      "gameScore",
      Number(this.props.gameScore) + Number(questionScore)
    );
  };

  changeMove = () => {
    const questionQuantity = 5;
    const currentMove = this.props.currentMove;
    const currentQuestion = this.props.currentQuestion;

    this.props.onChangeState("currentMove", currentMove + 1);
    this.setState({ isPlayerName: !this.state.isPlayerName });

    if (currentMove === 0) {
      this.props.onChangeState("currentQuestion", 0);
      this.setState({ isBtnActive: true });
    } else if (currentMove === 1) {
      this.setState({ isBtnActive: false });
    } else if (currentMove === 2) {
      this.setState({ isBtnActive: true });
    } else if (currentMove === 3) {
      this.setState({ isPlayerName: false });
      this.props.onChangeState("currentMove", 1);
      this.props.onChangeState("currentQuestion", currentQuestion + 1);
    }
    if (currentMove === 3 && currentQuestion === questionQuantity - 1) {
      this.setState({ isBtnActive: false });
    }
  };

  goToEndGame = () => {
    this.props.onChangeState("pageName", "EndGame");
  };

  render() {
    let currentPartnerImg = hayakoImg;
    switch (this.props.partnerName) {
      case "Hayako":
        currentPartnerImg = hayakoImg;
        break;
      case "Neko":
        currentPartnerImg = nekoImg;
        break;
      case "Yuki":
        currentPartnerImg = yukiImg;
        break;

      default:
        break;
    }

    const playerName = this.props.playerName;
    const partnerImg = <img src={currentPartnerImg} alt="Девочка" className="dialoque-area__partner-img"/>;
    const dialoguesData = this.props.dialoguesData;

    const startPhrase = (
      <DisplayText content={dialoguesData.playerPhrase + playerName} />
    );

    let currentContent = startPhrase;
    let reactionMark = "s";

    const currentQuestion = this.props.currentQuestion;
    const currentMove = this.props.currentMove;

    const questionQuantity = 5;

    if (currentMove === 0) {
      currentContent = startPhrase;
    } else if (currentMove === 1 && currentQuestion < questionQuantity) {
      currentContent = (
        <DisplayText
          content={dialoguesData.questions[currentQuestion].partnerPhrase}
        />
      );
    } else if (currentMove === 2 && currentQuestion < questionQuantity) {
      currentContent = (
        <ChooseArea
          onChangeDirectionAnswer={this.changeDirectionAnswer}
          addScore={this.addScore}
          changeMove={this.changeMove}
          content={dialoguesData.questions[currentQuestion].answers}
          onChangeCurrentAnswer={this.changeCurrentAnswer}
        />
      );
    } else if (currentMove === 3 && currentQuestion < questionQuantity) {
      currentContent = (
        <DisplayText
          content={
            dialoguesData.questions[currentQuestion].answers[
              this.state.currentAnswer
            ].reaction
          }
        />
      );
    } else if (currentMove === 1 && currentQuestion === 5) {
      const gameScore = this.props.gameScore;
      if (gameScore <= 20) {
        reactionMark = "d";
      } else if (gameScore <= 40) {
        reactionMark = "c";
      } else if (gameScore <= 60) {
        reactionMark = "b";
      } else if (gameScore <= 80) {
        reactionMark = "a";
      } else if (gameScore <= 100) {
        reactionMark = "s";
      }
      currentContent = (
        <React.Fragment>
          <DisplayText content={dialoguesData.decisions[reactionMark]} />
          <button className="dialoque-area__btn" onClick={this.goToEndGame}>
            Finish the game
          </button>
        </React.Fragment>
      );
    }

    const currentName = this.state.isPlayerName
      ? this.props.playerName
      : this.props.partnerName;

    const nextButton = this.state.isBtnActive ? (
      <button className="dialoque-area__btn" onClick={this.changeMove}>
        Next
      </button>
    ) : (
      false
    );
    return (
      <div className="dialoque-area">
        <div className="dialoque-area__top">
          <div className="dialoque-area__name">{currentName}</div>
          {partnerImg}
        </div>
        <div className="dialoque-area__display">
          {currentContent}
          {nextButton}
        </div>
      </div>
    );
  }
}

export default DialoqueArea;
