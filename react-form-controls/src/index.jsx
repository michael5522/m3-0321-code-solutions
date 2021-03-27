import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable no-console */

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {

    event.preventDefault();
    console.log(this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.getElementById('root')
);
