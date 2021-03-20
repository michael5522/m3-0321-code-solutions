import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: this.state.click + 1
    });
  }

  getColor() {
    if (this.state.click === 0 || this.state.click === 1 || this.state.click === 2 || this.state.click === 3) {
      return 'purple';
    } else if (this.state.click === 4 || this.state.click === 5 || this.state.click === 6) {
      return 'lightpurple';
    } else if (this.state.click === 7 || this.state.click === 8 || this.state.click === 9) {
      return 'red';
    } else if (this.state.click === 10 || this.state.click === 11 || this.state.click === 12) {
      return 'orange';
    } else if (this.state.click === 13 || this.state.click === 14 || this.state.click === 15) {
      return 'yellow';
    } else if (this.state.click === 16 || this.state.click === 17 || this.state.click === 18) {
      return 'white';
    }
  }

  render() {

    const color = this.getColor();
    return (
      <div>
        <button className={color} onClick={this.handleClick}>Hot Button</button>
      </div>
    );
  }
}

export default HotButton;
