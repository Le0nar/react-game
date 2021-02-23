import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time : 0};
    } 
    componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    updateTime = () => {
        const time =  this.state.time;
        const seconds = time % 60;
        const minutes = Math.floor(time / 60);
        const timeString = `${this.addZero(minutes)}:${this.addZero(seconds)}`

        this.props.onChangeState('gameTime', timeString);

        this.setState({time: this.state.time + 1});
    }
    addZero = (n) =>  {
        return (n < 10 ? '0' : '') + n;
    }
    render () {
        const time = this.props.gameTime;
        return(
            <span>{time}</span>
        )
    }
}

export default Timer;