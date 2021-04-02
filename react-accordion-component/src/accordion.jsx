import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.clickedId === id) {
      this.setState({ clickedId: null });
    } else {
      this.setState({ clickedId: id });
    }
  }

  render() {
    const handleClick = this.handleClick;
    return (
      <div>
        {this.props.topics.map(topic => {
          return (
            <div key={topic.id}>
              <button className="accordion" onClick={() => handleClick(topic.id)}>
                {topic.title}
              </button>
              <div className="panel" hidden={this.state.clickedId !== topic.id}>
                <p >
                  {topic.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
