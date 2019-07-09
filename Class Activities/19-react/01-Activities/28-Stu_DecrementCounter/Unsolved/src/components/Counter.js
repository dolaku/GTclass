import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p className="card-text">Click Count: {this.state.count}</p>
        <button className="btn btn-primary m-1" onClick={this.handleIncrement}>
          Increment
          </button>
        <button className="btn btn-danger m-1" onClick={this.handleDecrement}>
          Decrement
          </button>
      </div>
    );
  }
}

export default Counter;
