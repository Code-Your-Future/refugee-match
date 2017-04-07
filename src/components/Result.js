import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
  	}
  }
  render() {
    return (
      <div className="result">
        the result
      </div>
    );
  }
}
