import React from 'react';
/* eslint-disable no-console */

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  greenRed() {
    if (this.state.value.length < 8) {
      return 'red';
    } else {
      return 'green';
    }
  }

  whatMark() {
    if (this.state.value.length < 8) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  whatMessage() {
    if (this.state.value === '') {
      return 'A password is required';
    } else if (this.state.value.length < 8) {
      return 'Your Password is too short';
    } else {
      return null;
    }
  }

  render() {
    const color = this.greenRed();
    const icon = this.whatMark();
    const text = this.whatMessage();
    return (
      <div>
        <div>Password</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <i className={` ${color} ${icon}`}/>
        </form>
        <div className={color}>{text}</div>
      </div>
    );
  }
}
export default ValidatedInput;
