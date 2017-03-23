import React from 'react';

export default function SingleOptionQuestion(props) {
  const question = props.question.question;
  const options = props.question.options;
  const answer = props.whenAnswered;
  return (
    <form>
      <h3>{question}</h3>
      {
        options.map((option, index) => {
          return (
            <label htmlFor={index} key={index} >{option}
              <input type='radio' name='option' value={option} id={index} onChange={answer} /><br/>
            </label>
          );
        })
      }
    </form>
  );
}

// import React, { Component } from 'react';

// export default class SingleOptionQuestion extends Component {
//  render() {
//    const question = this.props.question.question;
//    const options = this.props.question.options;
//    const answer = this.props.whenAnswered;
//    return (
//      <form>
//        <h3>{question}</h3>
//        {
//          options.map((option, index) => {
//            return (
//              <label htmlFor={index} key={index} >{option}
//                <input type='radio' name='option' value={option} id={index} onChange={answer} /><br/>
//              </label>
//            );
//          })
//        }
//      </form>
//    );
//  }
// }
