import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerTime: 0,
      status: false,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.myTimer = this.myTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.timerControl();
    this.setState({
      status: !this.state.status,
      timerTime: this.state.timerTime
    });

  }

  timerControl() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({ interval: null });

    } else {
      const interval = setInterval(this.myTimer, 1000);
      this.setState({ interval: interval });
    }
  }

  myTimer() {
    this.setState({
      timerTime: this.state.timerTime + 1
    });
  }

  iconView() {
    if (this.state.status === false) {
      return 'fas fa-play';
    } else {
      return 'fas fa-pause';
    }
  }

  reset() {
    if (this.state.status === false) {
      this.setState({
        timerTime: 0
      });
    }
  }

  render() {
    const TempIcon = this.iconView();
    const movingNumber = this.state.timerTime;
    return (
      <div className="container">
        <div className="circle" onClick={this.reset}>
          <div className="counter">
            {movingNumber}
          </div>
        </div>
        <div className="controls">
          <div onClick={this.handleClick} className={TempIcon}></div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
