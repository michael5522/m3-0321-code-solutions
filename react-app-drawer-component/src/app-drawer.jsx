import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const menu = (
      <div>
        <div className="container">
          <h1 onClick={this.handleClick}>Menu</h1>
          <h4 onClick={this.handleClick}>About</h4>
          <h4 onClick={this.handleClick}>Get Started</h4>
          <h4 onClick={this.handleClick}> Sign In</h4>
        </div>
        <div className="right" onClick={this.handleClick}></div>
      </div>
    );
    return (
      <div>
        {this.state.showMenu ? menu : <i className="fas fa-bars" onClick={this.handleClick} />}
      </div>
    );
  }
}

export default AppDrawer;
