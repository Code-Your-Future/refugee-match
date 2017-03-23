import React, { Component } from 'react';
import './question.css';


class Question extends Component {
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
                      <lable>
                        <input name={answer}
                          type="checkbox"
                          onChange={() => this.props.handleCheckBox(val.question, answer)}/>
                          {answer}
                      </lable>
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
