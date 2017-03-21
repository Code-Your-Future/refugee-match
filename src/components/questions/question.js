import React, { Component } from 'react';
import './question.css';


class Question extends Component {
  handleClick(e) {
    console.log(`${e.target.name} is ${e.target.checked ? 'selected' : 'not selected'} `);
  }
  render() {
    const questions = this.props.questions;
    return (
      <div className="questions">
         {/*looping through all questions state*/}
          {questions.map((val, i) => {
            return (
              <form key={i}>
                <div className="question">
                  <h2>{val.question}</h2>
                </div>
                {val.answers.map((answer, i) => {
                  return (
                    <div className="answer" key={i}>
                      <lable><input name={answer} type="checkbox"  onClick={this.handleClick}/>{answer}</lable>
                    </div>
                  )
                })}
              </form>
            )
          })}
      </div>
    );
  }
}

export default Question;
