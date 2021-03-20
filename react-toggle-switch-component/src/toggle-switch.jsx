import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: !this.state.status
    });
  }

  onOff() {
    if (this.state.status === false) {
      return 'on';
    } else {
      return 'off';
    }
  }

  textMessage() {
    if (this.state.status === false) {
      return 'ON';
    } else {
      return 'OFF';
    }
  }

  render() {
    const status = this.onOff();
    const word = this.textMessage();
    return (
      <div className="toggle-container">
        <div className={`toggle-slider ${status}`} onClick={this.handleClick}>
        <div className={`toggle-button ${status}-button`}></div>
        </div>
        <div>{word}</div>
      </div>

    );
  }
}

export default ToggleSwitch;
