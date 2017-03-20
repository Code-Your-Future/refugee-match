import React, { Component } from 'react';
import './question.css';


class Question extends Component {
  render() {
    const questions = this.props.questions;
    return (
      <div className="question">
         {/*looping through all question state*/}
          {questions.map((val) => {
            return (
              <form>
                <div className="question">
                  <h2>{val.question}</h2>
                </div>
                {val.answers.map((answer) => {
                  return (
                    <div className="answer">
                      <lable><input name="num1" type="checkbox" />{answer}</lable>
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
