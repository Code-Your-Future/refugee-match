import React, { Component } from 'react';
import './App.css';

import Main from './components/main/main';
import Question from './components/questions/question';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ['Arabic', 'English', 'فارسى' ],
      questions: [
        {
          question:'question1',
          answers: ['answer1.1', 'answer1.2', 'answer1.3']
        },
        {
          question:'question2',
          answers: ['answer2.1', 'answer2.2', 'answer2.3']
        },
        {
          question:'question3',
          answers: ['answer3.1', 'answer3.2', 'answer3.3']
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Refugee Match</h2>
        </div>

        <Main language={this.state.languages}/>
        <Question questions={this.state.questions}/>

      </div>
    );
  }
}

export default App;
