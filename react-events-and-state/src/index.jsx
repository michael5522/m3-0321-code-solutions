import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    const currentStatus = this.state.isClicked;
    if (currentStatus) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick={this.handleButtonClick}>Click Me!</button>;
    }
  }

}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
