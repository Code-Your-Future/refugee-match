import React, { Component } from 'react';
import './main.css';


class Main extends Component {
  render() {
    const languages = this.props.language;
    return (
      <div className="Main">
        <p className="App-intro">
          Please pick your language
        </p>
        <div className="languages">
          {languages.map((val) => {
            return (
              <div className={val}>
                <button>
                  <strong>{val} </strong>
                  <img src={require(`./${val}.png`)}  alt={val} />
                </button>
              </div>
                  );
          })}

        </div>
      </div>
    );
  }
}

export default Main;
