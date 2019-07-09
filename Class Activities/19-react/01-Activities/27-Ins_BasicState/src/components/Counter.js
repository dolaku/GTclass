import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
// React.Component = super class
// Counter = new class
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  // must have state object
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    // setState method to update the count value && RERENDERS the component
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  // render (strict name/method) has to fire everytime setState is called - looks for the state object
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
