import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        count: props.initialCount || 0 ,
        step: props.initialStep || 1
      };
    }
  
    render() {
  
      return (
        <div className = 'counter'>
          <button
            onClick={() =>
              this.setState(currentState => ({
                count: ((currentState.count - currentState.step) < 0) 
                ? currentState.count 
                : currentState.count - currentState.step
              }))
            }
          >
            -
          </button>
          <p>{this.state.count}</p>
          <button
            onClick={() =>
              this.setState(currentState => ({
                count: currentState.count + currentState.step
              }))
            }
          > 
            +
          </button>
        </div>
      );
    }
  }